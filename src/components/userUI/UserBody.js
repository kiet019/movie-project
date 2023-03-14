import React, { useEffect } from "react";

export default function UserBody({Children}) {
  useEffect(() => {
    window.scrollTo(0,0)
  })
  return <div className="userBody">
    {Children}
  </div>;
}
