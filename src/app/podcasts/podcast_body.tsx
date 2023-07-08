'use client';

import { useState } from "react";
import podcastList from "./podcast_info"
export default function PodcastBody() {
    const [currentPodcast, setCurrentPodcast] = useState(podcastList.length - 1);
    return (
        <div className="lg:w-2/3 h-full m-auto">
          <div className="text-center font-bold pb-4 sm:pb-8">
            <span className="text-white text-2xl md:text-4xl">Podcasts</span>
          </div>
          <div className="flex flex-col-reverse md:flex-row shadow-xl shadow-slate-400 md:h-[36rem]">
            <div className="bg-slate-800 w-full rounded-b-md md:rounded-none md:rounded-l-md p-4 h-full">
              <span className="text-white text-xl">
                Episode {podcastList[currentPodcast].episode} with{" "}
                {podcastList[currentPodcast].guest}
              </span>
              <iframe
                width="100%"
                height="350"
                src={podcastList[currentPodcast].url}
                title="Podcast"
                className="border-none p-2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
              <div className="p-2">
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
                      ? "bg-slate-700 text-white text-lg truncate p-2 border-b-4 border-slate-800 text-left cursor-not-allowed"
                      : "bg-slate-800 text-white text-lg truncate p-2 border-b-4 border-slate-800"
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
    )
}