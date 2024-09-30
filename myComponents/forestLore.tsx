"use client";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

function ForestLore() {
  const lore = `The LORE starts in the Deadly forest of    N.S.U.T.,where he seized a GPA of 8.71 from the woods.`;

  return (
    <div className="relative flex h-full w-full items-center justify-center bg-black">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="w-1/2">
        <TextGenerateEffect words={lore} />
      </div>
    </div>
  );
}

export default ForestLore;
