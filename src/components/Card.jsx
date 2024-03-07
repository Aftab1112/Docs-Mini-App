import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

function Card() {
  //   const data=[
  //     icon , desc , fileSize,closeOrDownload, tagDetails
  //   ]

  return (
    <div className="relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white p-5 overflow-hidden px-8 py-10">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <div className="footer absolute  w-full    bottom-0 left-0">
        <div className="flex items-center px-8 py-3 justify-between mb-3">
          <h5>0.4mb</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            <LuDownload size="0.7em" color="#fff" />
          </span>
        </div>
        <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
          <h3 className="text-sm font-semibold">Download Now</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
