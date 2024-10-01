"use client"
import React from "react";
import {FloatingDock} from '@/components/ui/floating-dock';
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "TARS",
      icon: (
        <Image src="/Icons/TARS.png" width={20} height={20} alt="TARS" className="rounded-lg w-5 h-5"/>
      ),
      href: "#TARS",
    },

    {
      title: "DAWG",
      icon: (
        <p className="h-full w-full rounded-lg flex items-center justify-center">🦸🏼‍♂️</p>
      ),
      href: "#hype",
    },
    {
      title: "Forest",
      icon: (
        <p className="h-full w-full rounded-lg flex items-center justify-center">🌳</p>
      ),
      href: "#college",
    },
    {
      title: "Powers of Gods",
      icon: (
        <p className="h-full w-full rounded-lg flex items-center justify-center">⚡️</p>
      ),
      href: "#skills",
    },
    {
      title: "Villains",
      icon: (
        <p className="h-full w-full rounded-lg flex items-center justify-center">💀</p>
      ),
      href: "#projects",
    },

    {
      title: "Armies",
      icon: (
        <p className="h-full w-full rounded-lg flex items-center justify-center">💥</p>
      ),
      href: "#experience",
    },
    {
      title: "Trinity",
      icon: (
        <Image src="/Icons/githubW.png" width={20} height={20} alt="TARS" className="rounded-lg w-5 h-5"/>
      ),
      href: "#trinity",
    },
  ];
  return (
    <div className="flex items-center justify-center h-fit w-full">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
