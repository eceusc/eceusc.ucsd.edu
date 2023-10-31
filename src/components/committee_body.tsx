import Carousel from "./Carousel";
import Image from "next/image";

export default function CommitteeBody({
	titles,
	desc,
	flyers,
	secondaryDesc,
	button,
	images,
	videos,
	files,
}: {
	titles: string[];
	desc: string[];
	flyers?: string[];
	secondaryDesc?: string[];
	button?: string[][];
	images: string[];
	videos?: string[];
	files?: object;
}) {
	return (
		<div className="md:w-1/2 m-auto mt-20 sm:m-auto">
			<div className="text-center font-bold">
				<span className="text-white text-2xl md:text-4xl">{titles[0]}</span>
			</div>
			<div>
				<div className="flex flex-col text-center sm:text-left">
					{desc.map((line) => (
						<span className="text-white p-2 pt-8 md:p-4 font-normal" key={line}>
							{line}
						</span>
					))}
				</div>
				<Carousel images={images} />
			</div>
			{titles[1] ? (
				<div className="text-center font-normal">
					<span className="text-white text-xl md:text-2xl">{titles[1]}</span>
				</div>
			) : (
				""
			)}

			{flyers ? (
				<div className="flex justify-center">
					<div className="grid md:grid-cols-1 gap-4 p-8 md:p-4">
						{flyers
							? flyers.map((src) => (
									<Image
										title={src.substring(0, src.length - 4)}
										src={src + "#view=Fit"}
										alt={src}
										width={600}
										height={600}
										key={src}
									/>
							  ))
							: ""}
					</div>
				</div>
			) : (
				""
			)}

			{secondaryDesc ? (
				<div className="flex flex-col text-left">
					{secondaryDesc.map((line) => (
						<span className="text-white p-2 pt-8 md:p-4 font-normal" key={line}>
							{line}
						</span>
					))}
				</div>
			) : (
				""
			)}

			{button ? (
				<div className="text-center">
					{button.map((b) => (
						<a href={b[1]} key={b[0]}>
							<button className="p-3 m-3 px-8 bg-gray-700 text-white rounded my-5 hover:bg-white hover:text-black hover:transition-all font-bold">
								{b[0]}
							</button>
						</a>
					))}
				</div>
			) : (
				""
			)}

			{files ? (
				<div className="grid md:grid-cols-2 gap-4 p-8 md:p-4">
					{files
						? Object.keys(files).map((key) => (
								<a href={files[key]} target="_blank">
									<div className="bg-slate-600 w-full h-full text-white p-4 rounded hover:bg-slate-700 transition">
										<span>{key}</span>
									</div>
								</a>
						  ))
						: ""}
				</div>
			) : (
				""
			)}
		</div>
	);
}
