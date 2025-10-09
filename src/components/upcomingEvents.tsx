import Container from "./container";
import Image from "next/image";
import EventsGrid from "./eventCard";
import { Event } from "@/app/types";

const eventsList : Event[] = [
    {
      title: 'WECE Cat Cafe Social',
      date: '10/12 SUN',
      time: '2-3PM',
      location: 'The Cat Cafe, 302 Island Avenue',
      information: 'Relax with cats and fellow WECE members! A casual social event to build community and destress.',
      tag: 'wece',
      rsvpLink: 'https://forms.gle/ifoiaoCNd7aTc6fL8',
    },
    {
      title: 'Flip-Flop Mentorship Program Opener',
      date: '10/20 MON',
      time: '5-8PM',
      location: 'Henry Booker Room, Jacobs Hall 2nd Floor',
      information: 'Learn about our mentorship program and how to sign up. Connect with upperclassmen and industry professionals.',
      tag: 'mentorship',
      rsvpLink: 'https://forms.gle/z46LogsRaJqB6YfE8',
    },
    {
      title: 'Power Engineering Connect',
      date: '10/23 THU',
      time: '6-7.30PM',
      location: 'Henry Booker Room, Jacobs Hall 2nd Floor',
      information: 'This event connects students with faculty and industry professionals in power and energy systems to explore academic paths and career opportunities in the field.',
      tag: 'academic',
      rsvpLink: 'https://forms.google.com/example4',
    },
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