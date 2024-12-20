export default function Container({
	children,
	type,
	id = "",
}: {
	children: any;
	type: "1" | "2";
	id?: string;
}) {
	let t1 = (
		<div
			className="w-full h-fit p-12 bg-slate-600 border-y-slate-700 border-solid border-t-4"
			id={id}
		>
			{children}
		</div>
	);
	let t2 = (
		<div
			className="w-full h-fit p-12 bg-slate-500 border-y-slate-400 border-solid border-t-4"
			id={id}
		>
			{children}
		</div>
	);

	return type === "1" ? t1 : t2;
}
