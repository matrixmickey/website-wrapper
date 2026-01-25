"use client";

import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";

export default function Wrapper({authorization}: {authorization: React.ReactNode}) {
    const [selectedAppUrl, setSelectedAppUrl] = useState(process.env.NEXT_PUBLIC_COLLEGE_BOWL_POOL_URL);
    
    const { user, isLoading } = useUser();

    useEffect(() => {
        if (isLoading) {
            return;
        }
        window.addEventListener("message", (event) => {
            if (event.origin !== process.env.NEXT_PUBLIC_COLLEGE_BOWL_POOL_URL) {
                return;
            }
            if (event.data !== "requestUser") {
                return;
            }
            event.source?.postMessage(user, { targetOrigin: event.origin });
        });
    }, [isLoading]);

    return (
        <>
        <div className="header">
            <div className="body">
            <div>matrixmickeydotcom</div>
            <select value={selectedAppUrl} onChange={(e) => setSelectedAppUrl(e.target.value)}>
                <option value={process.env.NEXT_PUBLIC_COLLEGE_BOWL_POOL_URL}>College Bowl Pool</option>
            </select>
            </div>
            {authorization}
        </div>
        {!isLoading && <iframe className="body" src={selectedAppUrl}></iframe>}
        </>
    );
} 