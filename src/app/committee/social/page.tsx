import Layout from "../../layout";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Background from "@/components/background";
import CommitteeBody from "@/components/committee_body";

export default function Social() {
  let titles = ["Social Events"];
  let desc = [
    "The Social committee works to ensure that ECE students are rewarded for all their hard work! Through social events and outings, ECE USC’s Social team helps build a community within ECE. Whether it’s meeting new people over boba and ice cream, watching movies off-campus, or hosting a study social before finals - the social committee ensures that you can meet other like minded ECE students, make new friends, and blow off some steam.",
  ];
  let images = [
    "/committees/social/studyPic1.JPG",
    "/committees/social/studyPic2.JPG",
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