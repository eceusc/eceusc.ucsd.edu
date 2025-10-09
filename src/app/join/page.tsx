import Navbar from "@/components/navbar";
import Background from "@/components/background";
import Footer from "@/components/footer";
import Hero from "./hero";
import { FaDiscord, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function JoinPage() {
  return (
    <>
      <Navbar pageLocation="Join" hideInitialNav={false} />
      <Background>
        <div className="grid grid-rows-4 md:grid-rows-2 grid-flow-col lg:gap-12 place-content-center gap-4 p-4 mt-20 md:m-auto">
          <div>
            <Hero
              title="Join Our Newsletter"
              body="Get email update on our upcoming events and opening positions!"
            />
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe4L9CgfkrNSQNcNzbMf0iXQuvEGWmDPPqFj4aAdFnZub3Ypw/viewform"
              target="_blank"
            >
              <button className="p-3 px-8 bg-gray-700 text-white rounded my-5 hover:bg-white hover:text-black hover:transition-all font-bold">
                Subscribe
              </button>
            </a>
          </div>
          <div>
            <Hero
              title="Connect with us on Social Media"
              body="Follow our Instagram and join our Discord server!"
            />
            <div className="grid grid-rows-2 grid-flow-col">
              <a
                href="https://www.instagram.com/eceusc_at_ucsd/"
                target="_blank"
                className="flex flex-row my-auto"
              >
                <FaInstagram className="w-12 h-12 mr-5 text-white" />
                <span className="my-auto text-white hover:text-slate-200">
                  Instagram
                </span>
              </a>
              <a
                href="https://discord.gg/RneYxRfccP"
                target="_blank"
                className="flex flex-row my-auto"
              >
                <FaDiscord className="w-12 h-12 mr-5 text-white" />
                <span className="my-auto text-white hover:text-slate-200">
                  Discord
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/ece-usc/"
                target="_blank"
                className="flex flex-row my-auto"
              >
                <FaLinkedin className="w-12 h-12 mr-5 text-white" />
                <span className="my-auto text-white hover:text-slate-200">
                  LinkedIn
                </span>
              </a>
              <a
                href="https://www.youtube.com/@eceusc_ucsd"
                target="_blank"
                className="flex flex-row my-auto"
              >
                <FaYoutube className="w-12 h-12 mr-5 text-white" />
                <span className="my-auto text-white hover:text-slate-200">
                  YouTube
                </span>
              </a>
            </div>
          </div>
          <div>
            <Hero
              title="Apply for Our Mentorship Program"
              body="Our mentorship program is open during the fall quarter!"
            />
            <a href="https://forms.gle/pBoZ5pqQYW7ugpR36" target="_blank">
              <button className="p-3 px-8 bg-gray-700 text-white rounded my-5 hover:bg-white hover:text-black hover:transition-all font-bold">
                Apply
              </button>
            </a>
          </div>
          <div>
            <Hero
              title="Apply for a Council Position"
              body="Our council applications are currently open!"
            />
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf-aLy5RhN5WNcMs7aPl8RWY2L1K96R_qy5bbu3bk07e3Oyug/viewform"
              target="_blank"
            >
              <button className="p-3 px-8 bg-gray-700 text-white rounded my-5 hover:bg-white hover:text-black hover:transition-all font-bold">
                Apply
              </button>
            </a>
          </div>
        </div>
      </Background>
      <Footer />
    </>
  );
}
