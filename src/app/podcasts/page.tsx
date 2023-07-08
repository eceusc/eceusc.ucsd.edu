import Layout from "../layout";
import Navbar from "@/components/navbar";
import Background from "@/components/background";
import Footer from "@/components/footer";
import PodcastBody from "./podcast_body";

export default function Podcasts() {
  return (
    <Layout>
      <Navbar pageLocation="Podcasts" hideInitialNav={false} />
      <Background>
        <PodcastBody />
      </Background>
      <Footer />
    </Layout>
  );
}