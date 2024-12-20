import Navbar from "@/components/navbar";
import Background from "@/components/background";
import Footer from "@/components/footer";
import PodcastBody from "./podcast_body";

<<<<<<< HEAD
export default function PodcastPage() {
=======
export default function Podcasts() {
>>>>>>> a7cd53fe107bc364340cb3599f89d0e2ba7a7cfd
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
