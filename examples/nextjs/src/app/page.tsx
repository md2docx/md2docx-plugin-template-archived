import { LandingPage } from "@repo/shared/dist/server";
import { Demo } from "@repo/shared";
import { ReactNode } from "react";

export const metadata = {
  title: "Md2docx Plugin Template",
};

/** next.js landing page */
export default function Page(): ReactNode {
  return (
    <LandingPage title="Next.js Example">
      <Demo />
    </LandingPage>
  );
}
