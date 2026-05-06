import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import ProfilePicture from "./ProfilePicture";
import User from "./User";
import { auth0 } from "@/lib/auth0";

export default async function Authorization() {
    const session = await auth0.getSession();
    const user = session?.user;

    return (user ? <User profilePicture={<ProfilePicture />} logoutButton={<LogoutButton />} /> : <LoginButton />);
}