import { articleRoute } from "@/lib/article-route";

const route = articleRoute("case-studies");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
