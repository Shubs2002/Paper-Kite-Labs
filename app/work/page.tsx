/**
 * app/work/page.tsx
 * /work — Redirects to /work/tech as the default work view.
 */

import { redirect } from "next/navigation";

export default function WorkPage() {
  redirect("/work/tech");
}
