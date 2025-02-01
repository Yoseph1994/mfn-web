import Navbar from "@/components/User/Navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default layout;
