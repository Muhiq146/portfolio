import { articleRoute } from "@/lib/article-route";

const route = articleRoute("blog");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
