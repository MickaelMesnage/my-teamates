import { SigninForm } from "@/components/organisms/Signin/SigninForm";
import { SigninButton } from "@/components/organisms/SigninButton/SigninButton";
import { getAuthSession } from "@/lib/auth";
import { URLS } from "@/urls";
import Link from "next/link";

export default async function Page() {
  // const session = await getAuthSession();
  return (
    <main>
      <SigninButton />
      <SigninForm />
      <p>
        Pas encore de compte ? <Link href={URLS.signup}>M&apos;inscrire</Link>
      </p>
      {/* {JSON.stringify(session)} */}
    </main>
  );
}
