"use client";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

function VillainLore() {
  const lore = `And Used them to defeat many Deadly Villains`;

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="w-[80%]">
        <TextGenerateEffect words={lore} />
      </div>
    </div>
  );
}

export default VillainLore;
