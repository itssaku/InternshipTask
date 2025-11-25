import { motion } from "framer-motion";
import VideoCard from "./VideoCard";

interface Video {
  id: number;
  url: string;
  thumbnail: string;
  title: string;
}

interface VideoCarouselProps {
  videos: Video[];
  speed?: "normal" | "fast";
}

const VideoCarousel = ({ videos, speed = "normal" }: VideoCarouselProps) => {
  // Duplicate videos array to create seamless infinite loop
  const duplicatedVideos = [...videos, ...videos, ...videos];

  return (
    <div className="relative w-full overflow-hidden py-12">
      {/* Gradient Overlays for Fade Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Scrolling Container */}
      <motion.div
        className={`flex ${speed === "fast" ? "animate-scroll-fast" : "animate-scroll"}`}
        style={{
          width: "fit-content",
        }}
      >
        {duplicatedVideos.map((video, index) => (
          <VideoCard
            key={`${video.id}-${index}`}
            id={video.id}
            url={video.url}
            thumbnail={video.thumbnail}
            title={video.title}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default VideoCarousel;
