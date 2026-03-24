import Project from "./clientView"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project",
};


export default function page() {
  return <Project />
}