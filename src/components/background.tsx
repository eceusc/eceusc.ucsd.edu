export default function Background({children} : {children: any}) {
    return (
        <div className="bg-slate-500 min-h-screen">
            <div className="p-4 sm:pt-36">
                {children}
            </div>
        </div>
    )
}