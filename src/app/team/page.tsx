import Navbar from "@/components/navbar";
import Background from "@/components/background";
import Footer from "@/components/footer";
import TeamMemberCard from "@/components/team";
import members from "../members";

export default function TeamPage() {
	return (
		<>
			<Navbar pageLocation="Team" hideInitialNav={false} />
			<Background>
				<div className="min-h-screen bg-gray-1000 p-8">
                    <h1 className="text-4xl font-bold text-center mb-8 text-black-800">Our Team</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {members.filter((m)=>m.name!='TBD').map((member, index) => (
                        <TeamMemberCard key={index} member={member} />
                        ))}
                    </div>
                </div>
			</Background>
			<Footer />
		</>
	);
}
