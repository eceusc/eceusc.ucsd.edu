import Link from "next/link";
import Container from "./container";
import { FaArrowRight } from "react-icons/fa";

export default function Committee() {
  let committees = [
    [
      "Academic",
      "The Academic Committee is the bridge between the ECE department and our undergraduate students who provide feedback to ECE department professors.",
      "/committee/academic",
    ],
    [
      "Mentorship",
      "The Mentorship Program builds a community by pairing new students with upperclassmen, providing the guidance they need to be successful socially, professionally, and technically.",
      "/committee/mentorship",
    ],
    [
      "Professional",
      "The Professional Committee works to ensure that ECE students are well-versed in the realm of professional development, from utilizing a network to making a good impression.",
      "/committee/professional",
    ],
    [
      "Social",
      "The Social committee works to ensure that ECE students are rewarded for all their hard work through social events such as meeting new people over boba or group study sessions.",
      "/committee/social",
    ],
    [
      "Technical",
      "The technical committee works to ensure ECE students have relevant technical skills for industry, emphasizing hands-on learning through fun workshops and quarter long projects.",
      "/committee/technical",
    ],
    [
      "Women in ECE",
      "The Women in ECE program strives to build a community for an underrepresented group in ECE. WECE strives towards hosting events that can give a better look into this field.",
      "/committee/wece",
    ],
  ];

  return (
    <Container type="2" >
      <span
        className="flex text-2xl md:text-4xl text-white justify-center p-8 pt-0 font-bold"
        id="committees"
      >
        Our Committees
      </span>
      <div className="grid md:grid-cols-3 gap-4">
        {committees.map(([name, desc, redirect]) =>
          CommitteeItem(name, desc, redirect)
        )}
      </div>
    </Container>
  );
}

function CommitteeItem(name: string, desc: string, redirect: string) {
  return (
    <>
      <div className="table table-col p-6 h-fit md:h-60 text-center rounded-lg bg-slate-700 shadow-lg">
        <div className="flex flex-row justify-center">
          <Link href={redirect}>
            <span className="text-2xl text-white font-semibold p-2">
              {name}
            </span>
          </Link>
          <Link href={redirect} className="text-2xl text-white pt-1 font-bold">
            <FaArrowRight />
          </Link>
        </div>
        <span className="text-lg text-white p-2">{desc}</span>
      </div>
    </>
  );
}
