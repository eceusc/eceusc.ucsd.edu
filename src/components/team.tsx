import members from "../app/members";
import Image from "next/image";

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
		<div
			className="flex flex-col text-center bg-slate-800 rounded-lg p-6 m-4 text-white shadow-sm shadow-slate-900"
			key={name}
		>
			<div className="m-2">
				<Image
					src={pic}
					alt={name}
					width={100}
					height={100}
					className="rounded-full outline outline-2 outline-offset-4 outline-slate-700 hover:outline-slate-300 transition-all m-auto"
				/>
			</div>

			<div className="m-2 flex flex-col items-center">
				<span className="text-lg">{name}</span>
				<span className="text-md text-slate-300">{position}</span>
			</div>

			<div className="mb-6 inline-flex items-center justify-center w-full">
				<hr className="w-16 md:w-24 lg:w-32 h-px bg-gray-200 border-0 dark:bg-gray-700" />
				<span className="px-3 font-medium bg-gray-800">{year}</span>
				<hr className="w-16 md:w-24 lg:w-32 h-px bg-gray-200 border-0 dark:bg-gray-700" />
			</div>

			<div className="flex flex-col ">
				<span>{major}</span>
				<span className="text-sm text-slate-300">
					{depth ? " w/ depth in " + depth : ""}
				</span>
				<span className="text-sm mt-2">{minor ? minor : ""}</span>
			</div>

			<div className="flex flex-col mt-4">
				<span className="text-sm">{lines[0] ? `Fun fact: ${lines[0]}` : ""}</span>
			</div>
		</div>
	);
}
