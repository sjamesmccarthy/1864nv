"use client";

import { useState, useEffect, useRef } from "react";
import GradeIcon from "@mui/icons-material/Grade";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton } from "@mui/material";

export default function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [showInvestmentInfo, setShowInvestmentInfo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = [
    { src: "/vid-cheers.mp4", type: "video/mp4" },
    { src: "/vid-coktail.mp4", type: "video/mp4" },
    { src: "/vid-beer-gobblet.mp4", type: "video/mp4" },
    { src: "/vid-wine-pour.mp4", type: "video/mp4" },
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) =>
          prevIndex === videos.length - 1 ? 0 : prevIndex + 1
        );
        setIsFading(false);
      }, 1000); // Match this duration with the CSS transition duration
    };

    video.addEventListener("ended", handleVideoEnd);

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [videos.length]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      video.playbackRate = 1; // Speed up videos by 25%
      video.play();
    }
  }, [currentVideoIndex]);

  return (
    <div className="bg-black min-h-screen w-full">
      {/* Video Section Container */}
      <div className="relative w-full h-[60vh] lg:h-[75vh] overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <source
            src={videos[currentVideoIndex].src}
            type={videos[currentVideoIndex].type}
          />
          Your browser does not support the video tag.
        </video>

        {/* Black gradient overlay at bottom of video */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/100 to-transparent pointer-events-none"></div>
      </div>

      <div className="px-8 lg:px-26 lg:py-0">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-[128px] text-white font-special-elite font-bold h-[142px] text-center relative inline-block">
            1864
            <sup className="align-super text-sm text-white ml-1 absolute top-6 right-[-.25rem]">
              ™
            </sup>
          </h1>
        </div>
        <div className="flex items-center justify-center gap-4 mt-2 md:mt-4">
          <span className="text-sm lg:text-2xl text-white font-special-elite font-bold">
            BREWERY
          </span>
          <span className="text-white flex items-center mt-0 pb-1">
            <GradeIcon fontSize="medium" />
          </span>
          <span className="text-sm lg:text-2xl text-white font-special-elite font-bold">
            DISTILLERY
          </span>
          <span className="text-white flex items-center mt-0 pb-1">
            <GradeIcon fontSize="medium" />
          </span>
          <span className="text-sm lg:text-2xl text-white font-special-elite font-bold">
            SALOON
          </span>
        </div>
        <p className="w-full py-6 text-center mt-8 mb-8 text-white leading-relaxed text-xl lg:text-2xl font-special-elite">
          1864™ is an eccentric gathering place that fuses a traditional
          small-batch craft brewery, distillery, and artisanal cocktail saloon
          with the intimacy of a speakeasy and charm of the Old West. Whether
          Carson City is your home, or you are traveling through, our doors are
          open to anyone seeking a distinctive experience built on quality,
          creativity, and community. Step inside and share a drink&mdash;and a
          story&mdash;in a space where everyone is welcome and every visit adds
          to the history.
        </p>
        <p className="w-full text-center text-white leading-relaxed text-xl lg:text-2xl font-special-elite">
          OPENING 2026
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-16 pb-8">
          <Button
            variant="outlined"
            size="large"
            onClick={() => setShowInvestmentInfo(!showInvestmentInfo)}
            sx={{
              color: "white",
              borderColor: "white",
              "&:hover": {
                borderColor: "white",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
              fontFamily: "var(--font-special-elite)",
              fontSize: "1.125rem",
              padding: "12px 24px",
              width: { xs: "100%", sm: "300px" },
            }}
          >
            <span className="mt-2">INVESTMENT OPPORTUNITY</span>
          </Button>
          <Button
            variant="outlined"
            size="large"
            component="a"
            href="https://8fbd57f3.sibforms.com/serve/MUIFAC3OpdaWIHZAs6YRLqTU7T8EEt8zWglYMw2k7mrT5Shg4Q8fhgN4T6UtWpSkKTwQ1HB1oIHX-p76meLAUsUjaLbmv3poMQFmU6repoYQGDmErHQoauNLvEhLreY47P-YUOb3Zujkko0O9K-ueFnD1GVjJ0TK2J-mDLK0LBCtB1cA1IGe1LO9uca26khHY76CBSmT5yy2n6Gh"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              borderColor: "white",
              "&:hover": {
                borderColor: "white",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
              fontFamily: "var(--font-special-elite)",
              fontSize: "1.125rem",
              padding: "12px 24px",
              width: { xs: "100%", sm: "300px" },
            }}
          >
            <span className="mt-2">STAY IN THE KNOW</span>
          </Button>
        </div>
        {showInvestmentInfo && (
          <div className="mt-0 p-6 backdrop-blur-sm rounded-lg border border-white/20  mx-auto">
            <p className="text-white text-lg text-center leading-relaxed font-special-elite mb-6">
              To learn more about becoming an investor in what will be a future
              &ldquo;Best of Carson&rdquo; for years to come, send an e-mail to{" "}
              <a
                href="mailto:invest@1864nv.com"
                className="text-white underline hover:text-gray-300 transition-colors"
              >
                invest@1864nv.com
              </a>{" "}
              with your name, contact information and brief summary on how you
              feel you can contribute to this legacy. We look forward to hearing
              from you.
            </p>
            <div className="flex justify-center">
              <IconButton
                onClick={() => setShowInvestmentInfo(false)}
                sx={{
                  color: "white",
                  border: "1px solid white",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "white",
                  },
                  padding: "2px",
                  cursor: "pointer",
                }}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </div>
          </div>
        )}
        <footer className="mt-8 pb-16 text-center">
          <p className="text-xs text-white font-special-elite">
            ©/™ 2025 1864 NV LLC
          </p>
        </footer>
      </div>
    </div>
  );
}
