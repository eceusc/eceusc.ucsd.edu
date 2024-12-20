import Navbar from "@/components/navbar";
import Background from "@/components/background";
import Footer from "@/components/footer";
import PodcastBody from "./podcast_body";

export default function PodcastPage() {
	return (
		<>
			<Navbar pageLocation="Podcasts" hideInitialNav={false} />
			<Background>
				<PodcastBody />
			</Background>
			<Footer />
		</>
	);
}
