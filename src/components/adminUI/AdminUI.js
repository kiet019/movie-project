import React from "react";
import AdminBody from "./AdminBody";
import AdminHeader from "./AdminHeader";

export default function AdminUI({ Children }) {
  return (
    <div className="admin-ui">
        <AdminHeader />
        <AdminBody Children={Children} />
    </div>
  );
}
