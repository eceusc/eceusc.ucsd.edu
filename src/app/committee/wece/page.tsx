import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Background from "@/components/background";
import CommitteeBody from "@/components/committee_body";
import Contact from "@/components/contact_info";

export default function WECEPage() {
	let titles = ["Women in ECE"];
	let desc = [
		"The Women in ECE program at ECE USC strives to build a community for women in ECE. As an underrepresented group in Electrical and Computer Engineering, WECE strives towards hosting events that can give women a better look into what it means to be an engineer in this field. From social events to panels with women in industry, WECE works to build a network where one can learn from others and establish a successful career as an Electrical or Computer Engineer.",
	];
	let images = [
		"/committees/wece/wece1.png",
		"/committees/wece/wece2.png",
		"/committees/wece/wecePic2.png",
	];

	return (
		<>
			<Navbar pageLocation="Committees" hideInitialNav={false} />
			<Background>
				<CommitteeBody titles={titles} desc={desc} images={images} />
				<Contact names={["Ruilin", "Kaitlin"]} />
			</Background>
			<Footer />
		</>
	);
}
