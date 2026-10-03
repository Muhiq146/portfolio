// The shape of a voice agent: audio in, understanding, audio out.
const stages = [
  { name: "Mic", detail: "Browser · WebRTC" },
  { name: "Transport", detail: "LiveKit room" },
  { name: "Speech → text", detail: "Streaming STT" },
  { name: "LLM", detail: "Tools · MCP · RAG", core: true },
  { name: "Text → speech", detail: "Sentence-chunked" },
  { name: "Speaker", detail: "Back to the user" },
];

function Connector() {
  return (
    <span aria-hidden className="wire h-6 w-px shrink-0 self-center lg:h-px lg:w-auto lg:min-w-4 lg:flex-1" />
  );
}

export default function Pipeline() {
  return (
    <figure className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
      <figcaption className="mb-5 font-mono text-[11px] uppercase tracking-widest text-faint">
        How a voice agent works
      </figcaption>
      <ol className="flex flex-col items-stretch lg:flex-row lg:items-center">
        {stages.map((stage, i) => (
          <li key={stage.name} className="contents">
            {i > 0 && <Connector />}
            <div
              className={`rounded-xl border px-4 py-3 lg:min-w-0 lg:shrink-0 ${
                stage.core
                  ? "border-signal/60 bg-signal-dim"
                  : "border-line bg-surface-2"
              }`}
            >
              <div className={`text-sm font-medium ${stage.core ? "text-signal" : "text-ink"}`}>
                {stage.name}
              </div>
              <div className="mt-0.5 font-mono text-[11px] text-faint">{stage.detail}</div>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
