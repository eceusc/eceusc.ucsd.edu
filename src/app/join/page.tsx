import Layout from "../layout";
import Navbar from "@/components/navbar";
import Background from "@/components/background";
import Footer from "@/components/footer";
import Hero from "./hero"

export default function Join() {
  return (
    <Layout>
      <Navbar pageLocation="Join" hideInitialNav={false} />
      <Background>
        <div className="grid lg:grid-rows-2 grid-flow-col lg:gap-12 place-content-center md:grid-rows-4 md:gap-4 sm:grid-rows-4 sm:gap-4">
            <div>
                <Hero title="Join Our Newsletter" body="Get email update on our upcoming events and opening positions!" />
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe4L9CgfkrNSQNcNzbMf0iXQuvEGWmDPPqFj4aAdFnZub3Ypw/viewform" target="_blank">
                    <button className="p-3 px-8 bg-gray-700 text-white rounded my-5 hover:bg-white hover:text-black font-bold">Subscribe</button>
                </a>
            </div>
            <div>
                <Hero title="Connect with us on Social Media" body="Follow our Instagram and join our Discord server!" />
                <div className="grid grid-rows-2 grid-flow-col">

                    <a href="https://www.instagram.com/eceusc_ucsd/" target="_blank" className="flex flex-row my-auto">
                        <img className="w-12 h-12 mr-5" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
                        <span className="my-auto text-white hover:font-bold">Instagram</span>
                    </a>
                    <a href="https://discord.gg/RneYxRfccP" target="_blank" className="flex flex-row my-auto">
                        <img className="w-12 h-12 mr-5" src="https://img.icons8.com/fluency/48/discord-logo.png" alt="discord-logo"/>
                        <span className="my-auto text-white hover:font-bold">Discord</span>
                    </a>
                    <a href="https://www.linkedin.com/in/ece-usc/" target="_blank" className="flex flex-row my-auto">
                        <img className="w-12 h-12 mr-5" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
                        <span className="my-auto text-white hover:font-bold">LinkedIn</span>
                    </a>
                    <a href="https://www.youtube.com/@eceusc_ucsd" target="_blank" className="flex flex-row my-auto">
                        <img className="w-12 h-12 mr-5" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play"/>
                        <span className="my-auto text-white hover:font-bold">Youtube</span>
                    </a>
                </div>
            </div>
            <div>
                <Hero title="Apply for Our Mentorship Program" body="Our mentorship program opens up in fall quarter!" />
                <a href="" target="_blank">
                    <button className="p-3 px-8 bg-gray-600 text-gray-300 rounded my-5 font-bold" disabled>Apply</button>
                </a>
            </div>
            <div>
                <Hero title="Apply for Our Shadowing Program" body="Application opens up in spring quarter!" />
                <a href="" target="_blank">
                    <button className="p-3 px-8 bg-gray-600 text-gray-300 rounded my-5 font-bold" disabled>Apply</button>
                </a>
            </div>
        </div>
      </Background>
      <Footer />
    </Layout>
  );
}