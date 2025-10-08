export type File = {
	title: string;
	src: string;
};

export interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  information: string;
  tag: 'professional' | 'academic' | 'wece' | 'social' | 'mentorship';
  rsvpLink: string;
  coverImage?: string; // Optional - will use default based on tag if not provided
}
