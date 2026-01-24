"use client";

import { useState } from "react";

export default function Wrapper({authorization}: {authorization: React.ReactNode}) {
    const [selectedAppUrl, setSelectedAppUrl] = useState("https://college-bowl-pool-328214224548.us-east1.run.app");

    return (
        <>
        <div className="header">
            <div className="body">
            <div>matrixmickeydotcom</div>
            <select value={selectedAppUrl} onChange={(e) => setSelectedAppUrl(e.target.value)}>
                <option value="https://college-bowl-pool-328214224548.us-east1.run.app">College Bowl Pool</option>
            </select>
            </div>
            {authorization}
        </div>
        <iframe className="body" src={selectedAppUrl}></iframe>
        </>
    );
} 