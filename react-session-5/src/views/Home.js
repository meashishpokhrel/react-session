import React from "react";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <span>This is homepage</span> <Outlet />
    </div>
  );
}