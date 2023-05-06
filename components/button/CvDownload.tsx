import Link from "next/link";
import React from "react";

type Props = {href:string, download:string};

function CvDownload({href, download}: Props) {
  return (
    <Link href={href} download={download} className=" max-w-[100px] flex p-2 gap-2 items-center border-2 rounded-lg text-sm md:p-4 md:text-base cursor-pointer ">
      CV
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
    </Link>
  );
}

export default CvDownload;
