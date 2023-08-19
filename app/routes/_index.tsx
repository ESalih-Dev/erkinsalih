import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { Button } from "~/components/ui/button";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Index = () => (
  <div className="container">
    <h1>Welcome to the start of something special :P</h1>
  </div>
);

export default Index;
