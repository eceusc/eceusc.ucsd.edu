import Image from "next/image";
import Layout from "./layout";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Committee from "../components/committee";
import AboutUs from "../components/about";

export default function Home() {
  return (
    <Layout>
      <Navbar pageLocation="Home" hideInitialNav={true} />
      <Hero
        title="ECE Undergraduate Student Council"
        body="Representing all ECE Undergraduates at UCSD"
      />
      <div className="scale-150 sm:scale-100">
        <Image
          src="/images/background.jpg"
          alt="UCSD Falling Star Building"
          width="3200"
          height="1800"
          key="falling-star"
          className="blur-[2px] sm:blur-none"
        />
      </div>
      <AboutUs />
      <Committee />
      <Footer />
    </Layout>
  );
}
