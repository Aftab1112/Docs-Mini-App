import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Hello",
      fileSize: "3mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColour: "bg-green-500",
      },
    },
    {
      desc: "Hello",
      fileSize: "3mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColour: "bg-blue-500" },
    },
    {
      desc: "Hello",
      fileSize: "3mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload Now",
        tagColour: "bg-green-500",
      },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed w-full h-full z-[3] top-0 left-0 flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
