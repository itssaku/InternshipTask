import VideoCarousel from "@/components/VideoCarousel";
import { carouselVideos } from "@/data/carouselVideos";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Unstitched Studios
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Where creativity meets innovation. Watch our latest work in motion.
            </p>
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Infinite Auto-Scrolling Video Showcase</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Video Carousel */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <VideoCarousel videos={carouselVideos} speed="normal" />
        </motion.div>
      </section>

      {/* Secondary Carousel (Faster Speed) */}
      <section className="relative mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <VideoCarousel videos={carouselVideos} speed="fast" />
        </motion.div>
      </section>

      {/* Info Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Seamless. Smooth. Stunning.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience our portfolio through an infinite carousel that never stops. 
              Every video tells a story, every frame crafted with precision.
            </p>
            
            {/* Technical Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { title: "∞ Infinite Scroll", desc: "Seamless loop with no breaks" },
                { title: "⚡ Smooth Performance", desc: "60fps animations guaranteed" },
                { title: "📱 Fully Responsive", desc: "Optimized for all devices" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-xl font-display font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            Built with React, Tailwind CSS & Framer Motion
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            Frontend Development Task for Unstitched Studios
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
