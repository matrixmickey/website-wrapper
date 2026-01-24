import { auth0 } from "@/lib/auth0";
import Image from 'next/image'

export default async function Profile() {
    const session = await auth0.getSession();
    const user = session?.user;

  if (!user) {
    return null;
  }

  return (
    <Image
      src={user.picture || ""}
      alt={user.name || 'User profile'}
      className="profile-picture"
      width={100}
      height={100}
    />
  );
}