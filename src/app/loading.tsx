import Image from "next/image";

export default function Loading() {
	return (
		<div className="bg-zinc-900 h-screen w-screen">
			<div className="h-screen flex flex-col items-center justify-center">
				<Image
					src="/images/logo.svg"
					width={200}
					height={65}
					alt="ECE USC Logo"
					className=""
				/>
				<span className="text-white text-4xl mt-10 animate-pulse">
					Loading...
				</span>
			</div>
		</div>
	);
}
