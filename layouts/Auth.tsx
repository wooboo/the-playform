import React from "react";

// components

import Navbar from "../components/Navbars/AuthNavbar";
import FooterSmall from "../components/Footers/FooterSmall";
interface AuthProps {
  children?: React.ReactNode;
}
export default function Auth({ children }: AuthProps) {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative w-full h-full min-h-screen py-40">
          <div
            className="absolute top-0 w-full h-full bg-no-repeat bg-slate-800 bg-full"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
