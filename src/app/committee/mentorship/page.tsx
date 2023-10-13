import Layout from "../../layout";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Background from "@/components/background";
import CommitteeBody from "@/components/committee_body";
import Contact from "../../../components/contact_info"

export default function Mentorship() {
  let titles = ["Mentorship Program"];
  let desc = [
    "The Mentorship Program strives to build an inclusive community among ECE Undergraduate students at UC San Diego.",
    "The ECE Mentorship Program from ECE Undergraduate Student Council is open again! We pair upperclassmen mentors with freshman/transfer mentees to help navigate ECE and college endeavors at UCSD! We host large and small group socials and mixers, as well as 1-on-1 mentorship. 2nd+ year students are encouraged to apply as mentors!", 
    "By pairing freshman and transfer students with upperclassmen, the Mentorship program ensures that students can get the guidance they need to be successful socially, professionally, and technically. Running all year long, Mentorship hosts a range of events, including 1-1 guidance,hands-on workshop, professional career panel, hands-on workshop, professional career panel, small group socials, and large group socials. Covering topics like building a strong resume and LinkedIn, how to search for internships & jobs, getting involved in research, as well as the best places to study and eat on campus - you're sure to get all your questions answered!",
  ];
  let images = [
    "/images/committees/mentorship/mentorPic3.png",
    "/images/committees/mentorship/mentorPic4.png",
    "/images/committees/mentorship/mentorship1.jpg",
    "/images/committees/mentorship/mentorship3.png"
  ];
  let secondaryDesc = [ 
    "Please submit applications no later than Tuesday (10/3) at midnight. Our mentorship opener/intro is a virtual event at 5:30pm on Wednesday(10/4). All positions are first come first serve based."
  ]
  let button = [
    ["Apply", "https://forms.gle/pBoZ5pqQYW7ugpR36"],
    ["Zoom Link", "https://zoom.us/j/6251769216?pwd=dHJ1ME5FTXpscGZ6ajBtRFZCVGMwQT09"]
  ]
  let files = [
    "/images/committees/mentorship/mentor_recruit_poster.jpg"
  ]

  return (
    <Layout>
      <Navbar pageLocation="Committees" hideInitialNav={false} />
      <Background>
      <CommitteeBody titles={titles} desc={desc} secondaryDesc={secondaryDesc} button={button} images={images} files={files}/>
        <Contact index={[13, 4]}/>
      </Background>
      <Footer />
    </Layout>
  );
}
