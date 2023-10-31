export default function Hero({ title, body }: { title: string; body: string }) {
	return (
		<>
			<div className="flex flex-col absolute z-20 bg-slate-700 bg-opacity-70 text-white mt-6 m-12 p-2 justify-items-center rounded-sm top-20 md:top-32 lg:top-52 md:w-1/3 md:bg-opacity-0 md:left-32">
				<div className="">
					<span className="text-4xl font-bold">{title}</span>
				</div>
				<div className="">
					<span className="text-2xl">{body}</span>
				</div>
			</div>
		</>
	);
}
