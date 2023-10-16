import members from "../app/members";
import { MdEmail } from "react-icons/md";

interface Member {
	name: string;
	email: string;
	position: string;
	pic: string;
}

export default function contact_info({ names }: { names: string[] }) {
	return (
		<div className="grid place-items-center my-8">
			<span className="font-bold text-xl text-start text-white mb-6">
				Questions or ideas?
			</span>
			<div className="flex gap-5 flex-wrap justify-center">
				{names.map((i) => {
					const member: Member =
						members[members.findIndex((m) => m.name.includes(i))];
					return (
						<div className="flex flex-row space-around p-6 bg-slate-700 rounded-lg shadow-sm shadow-slate-800" key={i}>
							<img
								src={member.pic}
								className="rounded-full w-24 mr-5 outline outline-2 outline-offset-4 outline-slate-300"
							/>
							<div className="my-auto">
								<span className="text-lg flex text-white">
									{member.name}
									<a
										href={`mailto:${member.email}`}
										className="ml-3 self-center"
									>
										<MdEmail />
									</a>
								</span>

								<span className="text-slate-300 text-md">
									{member.position}
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
