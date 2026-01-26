import Authorization from "@/components/Authorization";
import Wrapper from "@/components/Wrapper";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("__session");

  return (
    <div className="page">
      <Wrapper authorization={<Authorization />} sessionCookie={sessionCookie?.value} />
    </div>
  );
}