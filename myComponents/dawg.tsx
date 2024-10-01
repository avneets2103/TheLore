"use client"
import React from "react";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

interface Props {}

function Dawg(props: Props) {
  const storywords = `Once upon a Time, there was a Developer...      He had that D.A.W.G. in him . Debugging . All . Weekend . Guaranteed .      This is his story! The Story of Developer Avneet 🦸🏼‍♂️`;
  const {} = props;

  return (
    <FollowerPointerCard
      title={<TitleComponent title={"TARS"} avatar={"/Icons/chat-bot.png"} />}
    >
      <div className="bg-grid-white/[0.2] relative flex h-full w-full items-center justify-center bg-black">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="w-[75%] lg:w-1/2">
          <TextGenerateEffect words={storywords} />
        </div>
      </div>
    </FollowerPointerCard>
  );
}

export default Dawg;

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
