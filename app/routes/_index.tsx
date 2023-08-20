import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { MainContent } from "~/components/index/MainContent";
import { Button } from "~/components/ui/button";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "It's Kin 🥶" },
    { name: "description", content: "Welcome to my website!" },
  ];
};

const Index = () => (
  <div className="container md:mt-20">
    <MainContent />
  </div>
);

export default Index;
