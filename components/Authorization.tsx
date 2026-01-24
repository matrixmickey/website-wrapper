import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { auth0 } from "@/lib/auth0";

export default async function Authorization() {
    const session = await auth0.getSession();
    const user = session?.user;

    return (user ? <div className="auth"><Profile /><LogoutButton /></div> : <LoginButton />);
}