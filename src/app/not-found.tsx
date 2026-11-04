import Link from "next/link";
import { Deepam } from "@/components/Deepam";

export default function NotFound() {
  return (
    <section className="section container empty empty--big">
      <Deepam size={90} />
      <h1>This path is not lit yet</h1>
      <p className="muted">The page you are looking for does not exist.</p>
      <Link href="/" className="btn btn--gold btn--lg">Return home</Link>
    </section>
  );
}
