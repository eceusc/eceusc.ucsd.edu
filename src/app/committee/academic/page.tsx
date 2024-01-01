import Layout from "../../layout";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Background from "@/components/background";
import CommitteeBody from "@/components/committee_body";
import Contact from "../../../components/contact_info";
import { File } from "@/app/types";

export default function Academic() {
	let titles = ["Academic Events", "Previous ECE Town Halls"];
	let desc = [
		"Our Academic events is the bridge between the ECE department and undergraduate students. Their biggest event is their town hall, where students can provide feedback to ECE department professors, as well as ask any questions they have.",
		"Our Academic events also hosts professors for more informal AMAs - so if students have questions or would like to get to know a professor better, they can do so!",
		"Another key Academic event is our ECE Interviews! Click here to view our past interviews and their recordings/slides.",
	];
	let images = [
		"/committees/academic/townHall1.jpg",
		"/committees/academic/townHall2.jpg",
	];
	let files: File[] = [
		{
			title: "Town Hall Event 10-27-2020",
			src: "/committees/academic/Town_Hall-10_27_2020.pdf",
		},
	];

	return (
		<>
			<Navbar pageLocation="Committees" hideInitialNav={false} />
			<Background>
				<CommitteeBody
					titles={titles}
					desc={desc}
					images={images}
					files={files}
				/>
				<Contact names={[""]} />
			</Background>
			<Footer />
		</>
	);
}
