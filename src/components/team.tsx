import members from "../app/members";
import Image from "next/image";
import { MdEmail } from "react-icons/md";

export default function Team({
  name,
  email,
  position,
  pic,
  major,
  minor,
  depth,
  year,
  lines,
}: {
  name: string;
  email: string;
  position: string;
  pic: string;
  major: string;
  minor: string | null;
  depth: string | null;
  year: string;
  lines: string[];
}) {
  return (
   <div className="grid grid-cols-2 bg-slate-800 rounded-md p-4 m-4 text-white shadow-sm shadow-slate-800">
      <div>
        <Image 
          src={pic}
          alt={name}
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <span>{major} Major</span>
        <span className="text-sm text-slate-300">{depth ? "w/ depth in " + depth : ""}</span>
        <span className="text-sm">{minor ? minor + " Minor" : ""}</span>
      </div>
      <div className="p-2 flex flex-col">
        <span className="text-lg">{name} • {year}</span>
        <span className="text-md text-slate-300">{position}</span>
      </div>
      <div className="flex flex-col">
        <span className="">{lines[2] ? lines[2] : lines[1]}</span>
      </div>
   </div>
  )
}
