import Container from "./container";
import Image from "next/image";

export default function AboutUs() {
	return (
		<Container type="1">
			<span className="flex text-2xl md:text-4xl text-white justify-center p-8 pt-0 font-bold">
				About Us
			</span>
			<div className="sm:w-1/2 m-auto" id="about">
				<Image
					src="/images/all_officers.jpeg"
					alt="Group photo of all members"
					width="4030"
					height="2932"
					sizes="800px"
					key="officers"
					className="rounded-sm"
				/>
			</div>
			<span className="flex text-center m-auto text-white md:w-1/2 p-2 pt-8 md:p-4 font-normal text-lg">
				The ECE Undergraduate Student Council (ECE USC) is the voice of
				Electrical and Computer Engineering (ECE) students at UC San Diego.
				Through community building, networking, and leadership, the council
				strives to effect change within the department and campus at large
				though various events and programs.
			</span>
		</Container>
	);
}
