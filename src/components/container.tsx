export default function Container({children, type}: {children: any, type: "1" | "2"}) {
    let t1 = (
        <div className="w-full h-fit p-12 bg-slate-600 border-y-slate-700 border-solid border-y-4 border-">
            {children}
        </div>
    )
    let t2 = (
        <div className="w-full h-fit p-12 bg-slate-300 ">
            {children}
        </div>
    )

    return type === "1" ? t1 : t2;
}