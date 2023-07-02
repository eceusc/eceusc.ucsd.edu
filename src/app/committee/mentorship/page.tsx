import Layout from "../../layout";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Background from "@/components/background";
import CommitteeBody from "@/components/committee_body";

export default function Mentorship() {
  let titles = ["Mentorship Program"];
  let desc = [
    "The Mentorship Program strives to build an inclusive community among ECE Undergraduate students at UC San Diego.",
    "By pairing freshman and transfer students with upperclassmen, the Mentorship program ensures that students can get the guidance they need to be successful socially, professionally, and technically. Running all year long, Mentorship hosts a range of events, including 1-1 guidance,hands-on workshop, professional career panel, hands-on workshop, professional career panel, small group socials, and large group socials. Covering topics like building a strong resume and LinkedIn, how to search for internships & jobs, getting involved in research, as well as the best places to study and eat on campus - you're sure to get all your questions answered!",
  ];
  let images = [
    "/committees/mentorship/mentorPic3.png",
    "/committees/mentorship/mentorPic4.png",
  ];

  return (
    <Layout>
      <Navbar pageLocation="Committees" hideInitialNav={false} />
      <Background>
        <CommitteeBody titles={titles} desc={desc} images={images} />
      </Background>
      <Footer />
    </Layout>
  );
}
