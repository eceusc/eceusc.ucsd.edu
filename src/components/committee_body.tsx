import Image from "next/image";

export default function CommitteeBody({
  titles,
  desc,
  images,
  videos,
  files,
}: {
  titles: string[];
  desc: string[];
  images?: string[];
  videos?: string[];
  files?: string[];
}) {
  return (
    <div className="md:w-1/2 m-auto">
      <div className="text-center font-bold">
        <span className="text-white text-2xl md:text-4xl">{titles[0]}</span>
      </div>
      <div className="flex flex-col text-center">
        {desc.map((line) => (
          <span className="text-white p-2 pt-8 md:p-4 font-normal">{line}</span>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-4 p-8 md:p-4">
        {images
          ? images.map((src) => (
              <Image src={src} alt={src} width="400" height="400" />
            ))
          : ""}
      </div>
      {titles[1] ? (
        <div className="text-center font-normal">
          <span className="text-white text-xl md:text-2xl">{titles[1]}</span>
        </div>
      ) : (
        ""
      )}
      {files ? (
        <div className="grid md:grid-cols-1 gap-4 p-8 md:p-4">
          {files
            ? files.map((src) => (
                <iframe
                  title={src.substring(0, src.length - 4)}
                  src={src}
                  width="100%"
                  height="600"
                />
              ))
            : ""}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}