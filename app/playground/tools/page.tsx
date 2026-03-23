// app/tools/page.tsx

import dynamic from "next/dynamic";
import Tabs from "./tabs";
import { Wrench } from "lucide-react";

const Wpm = dynamic(() => import("./tabs/WpmTest"));
const Investment = dynamic(() => import("./tabs/Investment"));
const PostalCode = dynamic(() => import("./tabs/PostalCode"));

export default async function ToolsPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab = "wpm" } = await searchParams;

  return (
    <div>
      <div className="flex flex-col gap-4 items-center justify-center mt-4">
        <h1 className="flex items-center gap-2 text-2xl font-bold">
          {" "}
          <Wrench className="w-6 h-6" /> Tools
        </h1>

        <Tabs />
      </div>

      <div style={{ marginTop: 20 }}>
        {tab === "wpm" && <Wpm />}
        {tab === "postal-code" && <PostalCode />}
        {tab === "investment" && <Investment />}
        
      </div>
    </div>
  );
}
