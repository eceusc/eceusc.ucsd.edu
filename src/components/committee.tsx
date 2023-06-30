import Link from 'next/link';
import Container from '../components/container';

export default function Committee() {
    let committees = [
        [
            "Academic", 
            "The Academic Committee is the bridge between the ECE department and our undergraduate students. Our biggest event is the town hall, where students can provide feedback to ECE department professors, as well as ask any questions they have.", 
            "/academic"
        ],
        [
            "Mentorship", 
            "The Mentorship Program strives to build an inclusive community among undergraduate students. By pairing new students with upperclassmen, the Mentorship program ensures that students can get the guidance they need to be successful socially, professionally, and technically.", 
            "/mentorship"
        ],
        [
            "Professional",
            "The Professional Committee works to ensure that ECE students are well-versed in the realm of professional development. While technical skills are important for industry and academia, learning how to utilize a network or making a good impression is equally important.",
            "/professional"
        ],
        [
            "Social",
            "The Social committee works to ensure that ECE students are rewarded for all their hard work! Through social events such as meeting new people over boba and ice cream or watching movies off-campus, we strive to ensure that you can meet other like minded ECE students.",
            "/social"
        ],
        [
            "Technical",
            "The technical committee works to ensure ECE students have relevant technical skills for industry. While ECE classes may cover academic and theoretical topics, ECE USC’s technical committee emphasizes hands-on learning through fun workshops and quarter long projects.",
            "/technical"
        ],
        [
            "Women in ECE",
            "The Women in ECE program at ECE USC strives to build a community for women in ECE. As an underrepresented group in Electrical and Computer Engineering, WECE strives towards hosting events that can give women a better look into what it means to be an engineer in this field.",
            "/wece"
        ]
    ]

    return (
        <Container type="1">
            <span
                className="flex text-2xl md:text-4xl text-white justify-center p-8"
                id="committees"
            >
                Our Committees
            </span>
            <div 
                id="#committees"
                className="grid md:grid-cols-3 gap-4"
            >
                {committees.map(([name, desc, redirect]) => (
                    CommitteeItem(name, desc, redirect)
                ))}
            </div>
        </Container>
    )
}

function CommitteeItem(name: string, desc: string, redirect: string) {
    return (
        <div
            className="flex flex-col p-6 h-fit md:h-72 text-center rounded-lg bg-slate-700 shadow-lg"
        >
            <Link
                href={redirect}
                className="text-2xl text-white p-2 font-bold"
            >
                {name}
            </Link>
            <span
                className="text-lg text-white"
            >
                {desc}
            </span>
        </div>
    )
}