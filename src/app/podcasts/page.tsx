"use client";

import Layout from "../layout";
import Navbar from "@/components/navbar";
import Background from "@/components/background";
import Footer from "@/components/footer";
import { useState } from "react";
import podcastList from "./podcast_info";

export default function Podcasts() {
  const [currentPodcast, setCurrentPodcast] = useState(podcastList.length - 1);

  return (
    <Layout>
      <Navbar pageLocation="Podcasts" hideInitialNav={false} />
      <Background>
        <div className="lg:w-2/3 h-full m-auto">
          <div className="text-center font-bold">
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
            <div className="flex flex-col text-left rounded-t-md md:rounded-none md:rounded-r-md bg-slate-800 border-solid border-2 border-slate-900">
              {podcastList.map((podcastItem) => (
                <button
                  className={
                    podcastItem.episode == currentPodcast + 1
                      ? "bg-slate-700 text-white text-lg truncate p-2 border-b-4 border-slate-800 cursor-not-allowed"
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
      </Background>
      <Footer />
    </Layout>
  );
}

function PodcastItem() {}
