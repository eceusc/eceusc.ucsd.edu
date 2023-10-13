import Carousel from "./Carousel";

export default function CommitteeBody({
  titles,
  desc,
  secondaryDesc,
  button,
  images,
  videos,
  files,
}: {
  titles: string[];
  desc: string[];
  secondaryDesc?: string[];
  button?: string[][];
  images: string[];
  videos?: string[];
  files?: string[];
}) {
  return (
    <div className="md:w-1/2 m-auto">
      <div className="text-center font-bold">
        <span className="text-white text-2xl md:text-4xl">{titles[0]}</span>
      </div>
      <div>
        <div className="flex flex-col text-left">
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
        <div className="grid md:grid-cols-1 gap-4 p-8 md:p-4">
          {files
            ? files.map((src) => (
                <iframe
                  title={src.substring(0, src.length - 4)}
                  src={src + "#view=Fit"}
                  width="100%"
                  height="600"
                  key={src}
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
