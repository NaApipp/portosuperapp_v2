import ToolsPage from "./ClientView";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  return <ToolsPage searchParams={searchParams} />;
}
