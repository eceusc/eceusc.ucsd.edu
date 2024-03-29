let members = [
	{
		// This object is a rebound for components/contact_info.tsx
		// when empty args are provided.
		name: "TBD",
		position: "Open Position",
		major: "N/A",
		minor: null,
		depth: null,
		lines: ["TBD"],
		pic: "/22-23/tbd.png",
		email: "",
		year: "",
	},
	{
		name: "Kayren Zheng",
		position: "President",
		major: "Electrical Engineering",
		minor: null,
		depth: "Circuit",
		lines: [
			"Has summer internship",
			"Enjoys playing Legos and jigsaw puzzles,",
			"Fun Fact: I'm a bad driver :-)",
		],
		pic: "/22-23/Kayren.png",
		email: "k1zheng@ucsd.edu",
		year: "Senior",
	},
	{
		name: "TBD",
		position: "VP External",
		major: "N/A",
		minor: null,
		depth: null,
		lines: ["TBD"],
		pic: "/22-23/tbd.png",
		email: "",
		year: "",
	},
	{
		name: "Harini Gurusankar",
		position: "VP Internal",
		major: "Computer Engineering",
		minor: null,
		depth: "Power",
		lines: [
			"Intern at Keysight Technologies",
			"Enjoys playing the piano, dancing, and singing",
			"Fun Fact: I can speak 5 languages.",
		],
		pic: "/22-23/Harini.png",
		email: "hgurusan@ucsd.edu",
		year: "Senior",
	},
	{
		name: "Mustahsin Zarif",
		position: "Secretary",
		major: "Electrical Engineering",
		minor: null,
		depth: "Computer System Design & Electronic Circuits and Systems",
		lines: [
			"Part of IEEE QP, RoboCup, Supercomputing, and Kendo",
			"Likes reading light novels, watching KDramas, talking to new people, watching anime, moderating Facebook and discord groups/servers",
			"Fun Fact: I hold a black belt in Karate and I'm the RoboCup Soccer Co-Chair.",
		],
		pic: "/22-23/Zarif.png",
		email: "mmzarif@ucsd.edu",
		year: "Sophomore",
	},
	{
		name: "TBD",
		position: "Mentorship Chair",
		major: "N/A",
		minor: null,
		depth: null,
		lines: ["N/A"],
		pic: "/22-23/tbd.png",
		email: "N/A",
		year: "",
	},
	{
		name: "Ruilin Hu",
		position: "WECE Chair",
		major: "Computer Engineering",
		minor: null,
		depth: null,
		lines: [
			"Loves video games and digital art. Also enjoy running and swimming a lot.",
			"Fun Fact: There has not been one single school/institution that they've stayed for more than three years yet.",
		],
		pic: "/22-23/Ruilin.jpg",
		email: "ruhu@ucsd.edu",
		year: "Senior",
	},
	{
		name: "Kaitlin Calimbahin",
		position: "WECE Chair",
		major: "Electrical Engineering",
		minor: null,
		depth: null,
		lines: ["TBD", "Fun Fact: I ride a motorcycle."],
		pic: "/22-23/Kaitlin.png",
		email: "kcalimbahin@ucsd.edu",
		year: "Junior",
	},
	{
		name: "Brandon Szeto",
		position: "Professional Chair",
		major: "Computer Engineering",
		minor: null,
		depth: null,
		lines: [
			"Enjoys exercising, reading, and exploring the outdoors.",
			"Fun Fact: I look better in person.",
		],
		pic: "/22-23/Brandon.png",
		email: "bszeto@ucsd.edu",
		year: "Junior",
	},
	{
		name: "TBD",
		position: "Co-Professional Chair",
		major: "N/A",
		minor: null,
		depth: null,
		lines: ["N/A"],
		pic: "/22-23/tbd.png",
		email: "N/A",
		year: "",
	},
	{
		name: "Ricky Li",
		position: "Social Chair",
		major: "Computer Engineering",
		minor: null,
		depth: null,
		lines: [
			"Part of Chinese American Student Association.",
			"Enjoys being active, going to the gym, playing volleyball and basketball.",
			"Fun Fact: I grew up in the city with the very first in-n-out.",
		],
		pic: "/22-23/Ricky.png",
		email: "rili@ucsd.edu",
		year: "Junior",
	},
	{
		name: "TBD",
		position: "Academic Chair",
		major: "N/A",
		minor: null,
		depth: null,
		lines: ["N/A"],
		pic: "/22-23/tbd.png",
		email: "N/A",
		year: "",
	},
	{
		name: "Rana Singh",
		position: "Technical Chair",
		major: "Electrical Engineering",
		minor: null,
		depth: null,
		lines: [
			"Part of Triton Robosub and IEEE",
			"Enjoys playing guitar, table tennis, and swimming. ",
			"Fun Fact: I can solve a rubiks cube blindfolded.",
		],
		pic: "/22-23/Rana.png",
		email: "ras010@ucsd.edu",
		year: "Sophomore",
	},
	{
		name: "Angela Tsai",
		position: "Webmaster",
		major: "Math-CS",
		minor: "Data Science",
		depth: null,
		lines: [
			"CSE tutor",
			"Enjoys playing basketball, table tennis, badminton, and watching anime.",
			"Fun Fact: Im left handed but I play sports with my right hand.",
		],
		pic: "/22-23/Angela.png",
		email: "cjt002@ucsd.edu",
		year: "Sophomore",
	},
	{
		name: "Basil Thaddeus",
		position: "Webmaster",
		major: "Cognitive Science",
		minor: null,
		depth: "Machine Learning and Neural Computation",
		lines: [
			"Enjoys hanging out with friends, playing video games, and coding (lame i know).",
			"Fun Fact: I've broken 3 different parts of both my hands.",
		],
		pic: "/22-23/Basil.png",
		email: "brobertthaddeus@ucsd.edu",
		year: "Junior",
	},
	{
		name: "Joshua Choi",
		position: "Mentorship Social Chair",
		major: "Electrical Engineering",
		minor: null,
		depth: null,
		lines: [
			"Part of IEEE",
			"Enjoys playing basketball, working out, and watching TV.",
			"Fun Fact: I am Korean but I do not like kimchi.",
		],
		pic: "/22-23/Joshua.png",
		email: "jmc008@ucsd.edu",
		year: "Sophomore",
	},
	{
		name: "Yong Quan Neo",
		position: "Technical Project Chair",
		major: "Electrical Engineering",
		minor: null,
		depth: "Computer System Design",
		lines: ["Enjoys playing badminton.", "Fun Fact: I am from Malaysia 🇲🇾."],
		pic: "/22-23/Neo.png",
		email: "yneo@ucsd.edu",
		year: "Sophomore",
	},
];

export default members;
