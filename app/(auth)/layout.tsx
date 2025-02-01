import Logo from "@/components/User/Logo";
import Image from "next/image";
import React from "react";

async function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-3">
            <div className="flex items-center justify-center gap-4 logo-center">
              <Logo />
              <h1 className="text-2xl font-semibold text-blue-600">MFNIM</h1>
            </div>
          </div>
          <div className="">{children}</div>
        </div>
      </section>

      <section className="auth-illustration">
        <Image
          src="/assets/images/Logo-MFNIM.jpg"
          layout="fill"
          alt="auth-illustration"
          className="size-full object-cover"
        />
      </section>
    </main>
  );
}

export default layout;
