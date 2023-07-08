import Layout from "../../layout";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Background from "@/components/background";
import CommitteeBody from "@/components/committee_body";
import Contact from "../../../components/contact_info"

export default function Social() {
  let titles = ["Technical Events"];
  let desc = [
    "The technical committee works to ensure ECE students have relevant technical skills for industry. While ECE classes may cover academic and theoretical topics, ECE USC’s technical committee emphasizes hands-on learning through fun workshops and quarter long projects. With topics on Arduino and basic circuit building, as well as Python and machine learning, these workshops cover the foundations of what it takes to be an industry-relevant engineer.",
  ];
  let images = [
    "/committees/technical/projectTeamPic.jpg",
    "/committees/technical/TechnicalPic2.JPG",
  ];

  return (
    <Layout>
      <Navbar pageLocation="Committees" hideInitialNav={false} />
      <Background>
        <CommitteeBody titles={titles} desc={desc} images={images} />
        <Contact index={[10, 14]} />
      </Background>
      <Footer />
    </Layout>
  );
}
