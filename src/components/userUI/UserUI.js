import React from "react";
import UserBody from "./UserBody";
import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";
import UserNavigation from "./UserNavigation";

export default function UserUI({ Children }) {
  return (
    <>
      <div className="userUI">
        <UserHeader />
        <UserNavigation />
        <UserBody Children={Children} />
      </div>
      <UserFooter />
    </>
  );
}
