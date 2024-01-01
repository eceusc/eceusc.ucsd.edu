import Layout from "../layout";
import Navbar from "@/components/navbar";
import Background from "@/components/background";
import Footer from "@/components/footer";
import Team from "@/components/team";
import members from "../members";

export default function TeamPage() {
	return (
		<>
			<Navbar pageLocation="Our Team" hideInitialNav={false} />
			<Background>
				<div className="text-center font-bold md:pb-4 mt-20 md:m-auto">
					<span className="text-white text-2xl md:text-4xl">Meet the Team</span>
				</div>
				<div className="sm:w-1/2 lg:w-2/3 m-auto grid lg:grid-cols-2 xl:grid-cols-3">
					{members
						.filter((m) => m.name != "TBD")
						.map((m) => (
							<Team
								name={m.name}
								email={m.email}
								position={m.position}
								pic={m.pic}
								major={m.major}
								minor={m.minor}
								depth={m.depth}
								year={m.year}
								lines={m.lines}
								key={m.name}
							/>
						))}
				</div>
			</Background>
			<Footer />
		</>
	);
}
