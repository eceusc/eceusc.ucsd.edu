export type File = {
	title: string;
	src: string;
};

export type Event = {
	name: string;
	desc: string;
	date: Date;
	startHour: number;
	endHour: number;
};

export type UserInfo = {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    major: string;
}
