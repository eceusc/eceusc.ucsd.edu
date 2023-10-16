"use client";

import { useState } from "react";
import podcastList from "./podcast_info";
export default function PodcastBody() {
	const [currentPodcast, setCurrentPodcast] = useState(podcastList.length - 1);
	return (
		<div className="lg:w-3/4 h-full m-auto">
			<div className="grid text-white  pb-4 sm:pb-8">
				<span className="text-center font-bold text-2xl md:text-4xl">
					Podcasts
				</span>
				<br />
				<span className="text-justify">
					In our podcast series, we&apos;ll interview undergraduate students
					from the ECE majors about their experiences in the major as well as
					extracurricular activities that they did during their time in college.
					Whether you&apos;re studying electrical engineering, planning on
					transferring to ECE, or simply curious about what’s going on in our
					major, this podcast is for you! So sit back, relax, and join us as we
					explore the world of electrical engineering.
				</span>
			</div>
			<div className="flex flex-col-reverse md:flex-row shadow-xl shadow-slate-400 md:h-[36rem]">
				<div className="text-center bg-slate-800 rounded-b-md md:rounded-none md:rounded-l-md p-5 h-full">
					<div className="my-3">
						<span className="text-white text-xl font-bold">
							Episode {podcastList[currentPodcast].episode} with{" "}
							{podcastList[currentPodcast].guest}
						</span>
					</div>
					<iframe
						width="100%"
						height="350"
						src={podcastList[currentPodcast].url}
						title="Podcast"
						className="border-none p-2"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					/>
					<div className="p-2 text-justify">
						<span className="text-white">
							{podcastList[currentPodcast].description}
						</span>
					</div>
				</div>
				<div className="flex flex-col rounded-t-md md:rounded-none md:rounded-r-md bg-slate-800 border-solid border-2 border-slate-900">
					{podcastList.map((podcastItem) => (
						<button
							className={
								podcastItem.episode == currentPodcast + 1
									? "bg-slate-700 text-white text-lg truncate p-4 text-left cursor-not-allowed font-bold"
									: "bg-slate-800 text-white text-lg truncate p-4 text-left hover:bg-slate-600"
							}
							onClick={() => setCurrentPodcast(podcastItem.episode - 1)}
							key={podcastItem.guest + podcastItem.episode}
						>
							EP{podcastItem.episode} with {podcastItem.guest}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
