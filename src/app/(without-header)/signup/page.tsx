import { SigninButton } from "@/components/organisms/SigninButton/SigninButton";
import { SignupForm } from "@/components/organisms/Signup/SignupForm";
import { URLS } from "@/urls";
import { url } from "inspector";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <SignupForm />
      <p>
        Déjà inscrit ? <Link href={URLS.signin}>Me connecter</Link>
      </p>
    </main>
  );
}
