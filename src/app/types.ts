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

export interface Member {
	name: string;
	email: string;
	position: string;
	pic: string;
	major: string;
	minor: string | null;
	depth: string | null;
	year: string;
	lines: string[];
}
