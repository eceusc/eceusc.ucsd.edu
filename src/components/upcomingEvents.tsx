import Container from "./container";
import Image from "next/image";
import EventsGrid from "./eventCard";
import { Event } from "@/app/types";

const eventsList : Event[] = [
    // {
    //   title: 'WECE Cat Cafe Social',
    //   date: '10/12 SUN',
    //   time: '2-3PM',
    //   location: 'The Cat Cafe, 302 Island Avenue',
    //   information: 'Relax with cats and fellow WECE members! A casual social event to build community and destress.',
    //   tag: 'wece',
    //   rsvpLink: 'https://forms.gle/ifoiaoCNd7aTc6fL8',
    // },
    // {
    //   title: 'Flip-Flop Mentorship Program Opener',
    //   date: '10/20 MON',
    //   time: '5-8PM',
    //   location: 'Henry Booker Room, Jacobs Hall 2nd Floor',
    //   information: 'Learn about our mentorship program and how to sign up. Connect with upperclassmen and industry professionals.',
    //   tag: 'mentorship',
    //   rsvpLink: 'https://forms.gle/z46LogsRaJqB6YfE8',
    // },
    // {
    //   title: 'Power Engineering Connect',
    //   date: '10/23 THU',
    //   time: '6-7.30PM',
    //   location: 'Henry Booker Room, Jacobs Hall 2nd Floor',
    //   information: 'This event connects students with faculty and industry professionals in power and energy systems to explore academic paths and career opportunities in the field.',
    //   tag: 'academic',
    //   rsvpLink: 'https://forms.google.com/example4',
    // },
    // {
    //   title: 'Circuit Design Workshop',
    //   date: '11/2 SAT',
    //   time: '10AM-12PM',
    //   location: 'Jacobs Hall Room 3506',
    //   information: 'Hands-on workshop covering fundamental circuit design principles. Perfect for students in ECE 35 or beyond.',
    //   tag: 'academic',
    //   rsvpLink: 'https://forms.google.com/example5',
    // },
    // {
    //   title: 'Tech Talk: AI in Hardware',
    //   date: '11/8 FRI',
    //   time: '5-6:30PM',
    //   location: 'EBU1 Room 3501',
    //   information: 'Guest speaker from NVIDIA discussing the intersection of AI and hardware engineering.',
    //   tag: 'professional',
    //   rsvpLink: 'https://forms.google.com/example6',
    // },
    {
      title: 'WECE Speed friending with Female Professors ',
      date: '11/07 FRI',
      time: '4:00-5:30PM',
      location: 'Henry Booker Room, Jacobs Hall 2nd Floor',
      information: 'Whether you’re a new freshman or have survived a few years in UCSD, we welcome you to join us in a close chat with your professors across the ECE and CSE departments to gain insight on their work and journey as a woman in the space. Although the event is aimed at WECE students, it is open to anyone. Food will be provided! Our featured professors are Professor Naghizadeh, Professor Ding, Professor Shi, Professor Saha',
      tag: 'wece',
      rsvpLink: 'https://eceusc.slack.com/archives/C09KCE2TACA/p1761185652903459',
    },
    {
      title: 'Intern Panel',
      date: '11/14 FRI',
      time: '5:00-6:00PM',
      location: 'ECE 2315, Jacobs Hall 2nd Floor',
      information: 'The ECE Undergraduate Student Council presents a panel of your peers who interned this summer. Get first-hand advice on landing an internship, what the work is really like, and how to maximize your experience. Bring your questions!',
      tag: 'wece',
      rsvpLink: 'https://eceusc.slack.com/archives/C09KCE2TACA/p1761185652903459',
    }
  ];

export default function UpcomingEvents() {
  return (
    <Container type="1">
      
      {/* <div className="flex flex-col items-center text-white p-4">
        <div className="mb-4">
          <Image
            src="/images/fall_opener_ad.png"
            alt="Fall opener flyer"
            width={800}
            height={600}
            className="rounded-sm"
          />
        </div>
      </div> */}
      <EventsGrid eventsList = {eventsList}/>
    </Container>
  );
}