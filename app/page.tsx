"use client";

import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import Profile from "@/components/Profile";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user } = useUser();

  const [selectedAppUrl, setSelectedAppUrl] = useState("https://college-bowl-pool-328214224548.us-east1.run.app");

  function handleIframeLoad(event: React.SyntheticEvent<HTMLIFrameElement>) {
    if (user) {
      event.currentTarget.contentWindow?.postMessage({ type: "auth", user }, "*");
    }
  }

  return (
    <div className="page">
      <div className="header">
        <div className="body">
          <div>matrixmickeydotcom</div>
          <select value={selectedAppUrl} onChange={(e) => setSelectedAppUrl(e.target.value)}>
            <option value="https://college-bowl-pool-328214224548.us-east1.run.app">College Bowl Pool</option>
          </select>
        </div>
        {user ? <div className="auth"><Profile /><LogoutButton /></div> : <LoginButton />}
      </div>
      <iframe className="body" onLoad={handleIframeLoad} src={selectedAppUrl}></iframe>
    </div>
  );
}