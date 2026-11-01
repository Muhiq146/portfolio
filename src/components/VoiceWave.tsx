"use client";

import { useEffect, useRef, useState } from "react";

type Mode = "idle" | "listening" | "denied";

const BARS = 56;
const ACCENT = "178, 74, 37"; // --color-accent as rgb

// Canvas waveform: plays a synthetic "speech" pattern until the visitor turns on
// their mic, then follows the live spectrum. Audio is analysed locally only.
export default function VoiceWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const [mode, setMode] = useState<Mode>("idle");

  useEffect(() => {
    const canvas = canvasRef.current;
    const g = canvas?.getContext("2d");
    if (!canvas || !g) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const levels = new Float32Array(BARS);
    let freq: Uint8Array<ArrayBuffer> | null = null;
    let width = 0;
    let height = 0;
    let visible = true;
    let raf = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (!visible || width === 0) return;

      const analyser = analyserRef.current;
      if (analyser) {
        if (!freq || freq.length !== analyser.frequencyBinCount) {
          freq = new Uint8Array(analyser.frequencyBinCount);
        }
        analyser.getByteFrequencyData(freq);
      }

      // Frozen clock for reduced motion keeps the idle wave still.
      const s = reduceMotion && !analyser ? 1.3 : now / 1000;
      const half = (BARS - 1) / 2;
      const gap = 3;
      const barW = Math.max(2, (width - gap * (BARS - 1)) / BARS);
      const mid = height / 2;

      g.clearRect(0, 0, width, height);
      for (let i = 0; i < BARS; i++) {
        const d = Math.abs(i - half) / half; // 0 at centre, 1 at the edges
        let target: number;
        if (analyser && freq) {
          // Low frequencies in the middle, mirrored outward.
          const bin = Math.floor(Math.pow(d, 1.5) * freq.length * 0.5);
          target = Math.pow(freq[bin] / 255, 1.2);
        } else {
          const syllables = Math.max(0, Math.sin(s * 2.3) * Math.sin(s * 0.9 + 1.2));
          const envelope = 0.18 + 0.82 * Math.pow(syllables, 0.5);
          const texture = 0.6 + 0.4 * Math.sin(i * 0.55 + s * 6) * Math.sin(i * 0.21 - s * 3.3);
          target = envelope * texture * (1 - d * 0.7);
        }
        levels[i] += (target - levels[i]) * (reduceMotion && !analyser ? 1 : 0.22);

        const level = levels[i];
        const barH = Math.max(3, level * height * 0.92);
        g.fillStyle = `rgba(${ACCENT}, ${0.3 + 0.7 * Math.min(1, level * 1.4)})`;
        g.beginPath();
        g.roundRect(i * (barW + gap), mid - barH / 2, barW, barH, barW / 2);
        g.fill();
      }
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);
    resize();
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  const stop = () => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    audioCtxRef.current?.close();
    streamRef.current = null;
    audioCtxRef.current = null;
    analyserRef.current = null;
  };

  useEffect(() => stop, []);

  const toggle = async () => {
    if (mode === "listening") {
      stop();
      setMode("idle");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true },
      });
      const ctx = new AudioContext();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.75;
      ctx.createMediaStreamSource(stream).connect(analyser);
      streamRef.current = stream;
      audioCtxRef.current = ctx;
      analyserRef.current = analyser;
      setMode("listening");
    } catch {
      stop();
      setMode("denied");
    }
  };

  const status = {
    idle: "It reacts to your voice. Nothing is recorded.",
    listening: "Listening. Audio stays in your browser.",
    denied: "Microphone unavailable",
  }[mode];

  return (
    <div className="rounded-2xl border border-line bg-[#fbf8f2]/70 p-5 shadow-[0_1px_0_#fff_inset,0_12px_30px_-18px_rgba(60,40,20,0.35)]">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-serif text-lg italic">Say something.</p>
        <span className="flex items-center gap-2 text-xs text-faint">
          <span className={`size-1.5 rounded-full ${mode === "listening" ? "blink bg-accent" : "bg-line-strong"}`} />
          {mode === "listening" ? "Mic on" : "Demo"}
        </span>
      </div>
      <canvas
        ref={canvasRef}
        className="my-4 block h-36 w-full sm:h-40"
        aria-label="Animated voice waveform"
        role="img"
      />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted" aria-live="polite">
          {status}
        </p>
        <button
          type="button"
          onClick={toggle}
          aria-pressed={mode === "listening"}
          className="rounded-full border border-ink/80 px-4 py-1.5 text-sm font-medium transition hover:bg-ink hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {mode === "listening" ? "Stop mic" : "Talk to it"}
        </button>
      </div>
    </div>
  );
}
