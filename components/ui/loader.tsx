"use client"
import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-row gap-2 mt-2">
      <div className="w-2 h-2 rounded-full bg-black dark:bg-primaryColor animate-bounce [animation-delay:-.1s]" />
      <div className="w-2 h-2 rounded-full bg-black dark:bg-primaryColor animate-bounce [animation-delay:-.3s]" />
      <div className="w-2 h-2 rounded-full bg-black dark:bg-primaryColor animate-bounce [animation-delay:-.5s]" />
    </div>
  );
}

export default Loader;