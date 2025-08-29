import Image from "next/image";
import Layout from "./layout";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/hero";
//import Committee from "../components/committee";
import AboutUs from "../components/about";
import UpcomingEvents from "../components/upcomingEvents";

export default function Home() {
	return (
		<>
			<Navbar pageLocation="Home" hideInitialNav={true} />
			<Hero
				title="ECE Undergraduate Student Council"
				body="Representing the community of ECE students at UC San Diego"
			/>
			<div className="bg-cover bg-center pointer-events-none	select-none">
				<picture>
					<source
						media="(max-width: 37.5em)"
						srcSet="/images/mobile-background.jpg"
					/>
					<source media="(min-width: 37.5em)" srcSet="/images/background.jpg" />
					<Image
						src="/images/background.jpg"
						alt="UCSD Falling Star Building"
						key="falling-star"
						className=""
						width={3200}
						height={1600}
					/>
				</picture>
			</div>
			<UpcomingEvents />
			<AboutUs />
			<div id="committees" className="absolute -mt-20"></div>{" "}
			{/* Without this^ line, the committees navbar item scrolls too far */}
			{/*<Committee />*/}
			<Footer />
		</>
	);
}
