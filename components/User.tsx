"use client";

import { useState } from "react";

export default function User({profilePicture, logoutButton}: {profilePicture: React.ReactNode, logoutButton: React.ReactNode}) {
    const [showUserInfo, setShowUserInfo] = useState(false);

    function toggleUserInfo() {
        setShowUserInfo(!showUserInfo);
    }

    return (
        <div className="user">
            <div onClick={toggleUserInfo}>
                {profilePicture}
            </div>
            <div className="user-info">
                {showUserInfo ? logoutButton : ""}
            </div>
        </div>
    )
}