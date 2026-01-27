"use client";

import { useState } from "react";

export default function Wrapper({authorization}: {authorization: React.ReactNode}) {
    const [selectedAppUrl, setSelectedAppUrl] = useState(process.env.NEXT_PUBLIC_COLLEGE_BOWL_POOL_URL);

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
        <iframe className="body" src={selectedAppUrl}></iframe>
        </>
    );
} 