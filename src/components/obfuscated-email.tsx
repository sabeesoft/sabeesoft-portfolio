"use client";

import { useEffect, useState } from "react";

const USER = ["s", "a", "b", "e", "e", "s", "o", "f", "t", "y"].join("");
const DOMAIN = ["g", "m", "a", "i", "l", ".", "c", "o", "m"].join("");

function getAddress() {
  return `${USER}@${DOMAIN}`;
}

export function ObfuscatedEmail({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    setAddress(getAddress());
  }, []);

  return (
    <a
      href={address ? `mailto:${address}` : undefined}
      className={className}
      rel="nofollow"
    >
      {label ?? address ?? "···"}
    </a>
  );
}
