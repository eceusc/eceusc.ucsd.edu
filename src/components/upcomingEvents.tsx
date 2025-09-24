import Container from "./container";
import Image from "next/image";

export default function UpcomingEvents() {
  return (
    <Container type="1">
      <span className="flex text-2xl md:text-4xl text-white justify-center p-8 pt-0 font-bold">
        Upcoming Events
      </span>
      <div className="flex flex-col items-center text-white p-4">
        <div className="mb-4">
          <Image
            src="/images/fall_opener_ad.png"
            alt="Fall opener flyer"
            width={800}
            height={600}
            className="rounded-sm"
          />
        </div>
      </div>
    </Container>
  );
}