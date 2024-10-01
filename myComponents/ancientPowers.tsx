"use client";
import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


interface Props {}

function AncientPowers(props: Props) {
  const {} = props;
  const powerWords = "In his quest through the forest, He discovered the ANCIENT POWERS OF THE GODS! ⚡️"

  return (
    <FollowerPointerCard
    title={<TitleComponent title={"TARS"} avatar={"/icons/chat-bot.png"} />}
    className="flex flex-col items-center gap-4 m-4"
    >
      <div className="relative mx-auto flex h-[60vh] w-[70vw] flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]">
        <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
        <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
        <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
        <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

        <EvervaultCard text="Discover" />
      </div>
      <div className="w-[60vw]">
        <TextGenerateEffect words={powerWords} />
      </div>
    </FollowerPointerCard>
  );
}

export default AncientPowers;

const TitleComponent = ({
    title,
    avatar,
  }: {
    title: string;
    avatar: string;
  }) => (
    <div className="flex items-center space-x-2">
      <Image
        src={avatar}
        height="20"
        width="20"
        alt="thumbnail"
        className="rounded-full border-2 border-white"
      />
      <p>{title}</p>
    </div>
  );
