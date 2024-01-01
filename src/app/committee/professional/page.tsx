import Layout from "../../layout";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Background from "@/components/background";
import CommitteeBody from "@/components/committee_body";
import Contact from "../../../components/contact_info";
import { File } from "@/app/types";

export default function Professional() {
	let titles = ["Professional Events", "Previous Workshop Slides"];
	let desc = [
		"The professional committee works to ensure that ECE students are competent in the realm of professional development. While technical skills are important for industry and academia, learning how to network and making a good impression is equally important in advancing one's career. Our events range from workshops and resume reviews to career panels and fairs. In the end, we hope to bridge the gap between students and industry professionals.",
	];
	let images = [
		"/committees/professional/profess_pic1.png",
		"/committees/professional/profess_pic2.png",
	];
	let files: File[] = [
		{
			title: "Innovating your Linkedin Profile",
			src: "/committees/professional/Presentation-01_27_2021.pdf",
		},
		{
			title: "Why Are Internships Important?",
			src: "/committees/professional/Presentation-10_15_2020.pdf",
		},
	];

	let flyers = ["/committees/professional/ece_rcf_flyer.png"];

	return (
		<>
			<Navbar pageLocation="Committees" hideInitialNav={false} />
			<Background>
				<CommitteeBody
					titles={titles}
					desc={desc}
					images={images}
					files={files}
					flyers={flyers}
				/>
				<Contact names={["Brandon"]} />
			</Background>
			<Footer />
		</>
	);
}
