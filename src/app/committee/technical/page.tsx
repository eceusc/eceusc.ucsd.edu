import Layout from "../../layout";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Background from "@/components/background";
import CommitteeBody from "@/components/committee_body";
import Contact from "../../../components/contact_info";
import { File } from "@/app/types";

export default function Social() {
	let titles = ["Technical Events", "Fall 2023 Guided Quarterly Project"];
	let desc = [
		"The technical committee works to ensure ECE students have relevant technical skills for industry. While ECE classes may cover academic and theoretical topics, ECE USC’s technical committee emphasizes hands-on learning through fun workshops and quarter long projects. With topics on Arduino and basic circuit building, as well as Python and machine learning, these workshops cover the foundations of what it takes to be an industry-relevant engineer.",
	];
	let secondaryDesc = [
		"Join the ECE USC Guided Quarterly Project! The program's purpose is to introduce projects to students who have no experience but are interested in building one. We will have technical leads, like mentors, to help guide you and answer any question you might have for the given project. freshmen are encouraged to apply for the project, and 2nd+ year students are encouraged to apply as technical leads!",
		"Please submit applications no later than Wednesday (10/4) at midnight. Our QP intro is an in-person event at 7pm on Tuesday(10/3) at Henry Booker Room (2nd Floor @ Jacob's Hall). All positions are first come first serve based. We hope that you can join us for an exciting quarter!",
	];
	let button = [["Apply", "https://forms.gle/1xR9AFFiPfJDY6Us6"]];
	let images = [
		"/committees/technical/projectTeamPic.jpg",
		"/committees/technical/TechnicalPic2.jpg",
	];
	let flyers = ["/committees/technical/2023F_guided_qp.png"];
	let files = [
		{
			title: "Tech Demo",
			src: "https://drive.google.com/file/d/1e4MbFcUu_ifKBuET9UwVkdm_KgyZPs8O/preview",
		},
	];

	return (
		<>
			<Navbar pageLocation="Committees" hideInitialNav={false} />
			<Background>
				<CommitteeBody
					titles={titles}
					desc={desc}
					secondaryDesc={secondaryDesc}
					button={button}
					images={images}
					files={files}
					flyers={flyers}
				/>
				<Contact names={["Rana", "Neo"]} />
			</Background>
			<Footer />
		</>
	);
}
