import members from "../app/members"

interface Member {
    name: string,
    email: string,
    position: string,
    pic: string
}

export default function contact_info({ index }: {index: number[]}) {
    
    return(
        <div className="grid place-items-center my-8">
            <span className="font-bold text-xl text-start">Questions or ideas?</span>
            <div className="flex gap-5 flex-wrap">

                {index.map( i => {
                    const member: Member = members[i];
                    return(
                    <div className="flex flex-row space-around mt-3">
                    <img src={member.pic} className="rounded-full w-24 mr-5"/>
                        <div className="my-auto">
                            <span className="text-lg flex">
                                {member.name} 
                                <a href={`mailto:${member.email}`} className="ml-3 self-center">
                                    <img className="w-5" src="https://img.icons8.com/material-outlined/24/mail.png" alt="mail"/> 
                                    {/* FOR DARK THEME: https://img.icons8.com/material/24/mail.png */}
                                </a>
                            </span> 
                            
                            <span className="text-slate-800 text-sm">{member.position}</span>
                        </div>
                    </div>
                    )
                    
                })}

            </div>

        </div>
    )
}