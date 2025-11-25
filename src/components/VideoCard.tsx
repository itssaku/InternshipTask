import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoCardProps {
  id: number;
  url: string;
  thumbnail: string;
  title: string;
}

const VideoCard = ({ url, thumbnail, title }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play might be blocked, silently handle
      });
    }
  }, []);

  return (
    <motion.div
      className="relative flex-shrink-0 w-[400px] h-[225px] mx-4 rounded-lg overflow-hidden bg-card video-card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        poster={thumbnail}
        onLoadedData={() => setIsLoaded(true)}
      >
        <source src={url} type="video/mp4" />
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

      {/* Title Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 p-6"
      >
        <h3 className="text-foreground font-display text-lg font-bold tracking-tight">
          {title}
        </h3>
      </motion.div>

      {/* Play Icon (shown when not loaded or on hover) */}
      {(!isLoaded || isHovered) && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-8 h-8 text-primary fill-primary" />
          </div>
        </motion.div>
      )}

      {/* Border Accent */}
      <div className="absolute inset-0 border-2 border-primary/0 hover:border-primary/30 rounded-lg transition-all duration-300" />
    </motion.div>
  );
};

export default VideoCard;
