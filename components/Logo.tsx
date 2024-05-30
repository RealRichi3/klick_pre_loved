import React from "react";
import Image from "next/image";
import Link from "next/link";

export const KlickLogo = () => {
  return (
    <div>
      <Link href="/">
        <Image src={"/klick.png"} width={35} height={35} alt="Klick" />
      </Link>
    </div>
  );
};
export const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image src={"/logo.svg"} width={140} height={140} alt="Klick" />
      </Link>
    </div>
  );
};
