import members from "../app/members";
import { MdEmail } from "react-icons/md";

interface Member {
  name: string;
  email: string;
  position: string;
  pic: string;
}

export default function contact_info({ index }: { index: number[] }) {
  return (
    <div className="grid place-items-center my-8">
      <span className="font-bold text-xl text-start text-white">
        Questions or ideas?
      </span>
      <div className="flex gap-5 flex-wrap">
        {index.map((i) => {
          const member: Member = members[i];
          return (
            <div className="flex flex-row space-around mt-3" key={i}>
              <img src={member.pic} className="rounded-full w-24 mr-5" />
              <div className="my-auto">
                <span className="text-lg flex text-white">
                  {member.name}
                  <a
                    href={`mailto:${member.email}`}
                    className="ml-3 self-center"
                  >
                    <MdEmail />
                    {/* FOR DARK THEME: https://img.icons8.com/material/24/mail.png */}
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
