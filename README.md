# Unstitched Studios - Infinite Video Carousel

A stunning infinite auto-scrolling video carousel built for Unstitched Studios. This component showcases multiple videos continuously scrolling from right to left with seamless looping and smooth animations.

## 🎥 Demo

**Live Demo:** [Visit your Lovable deployment URL]

## ✨ Features

- ✅ **Infinite Scroll:** Videos loop seamlessly without any visible breaks
- ✅ **Auto-Scroll:** Continuous right-to-left scrolling with no user controls
- ✅ **Smooth Animations:** 60fps performance using Framer Motion
- ✅ **Multiple Videos:** Displays multiple videos simultaneously based on screen size
- ✅ **Fully Responsive:** Optimized layouts for all device sizes
- ✅ **Auto-Play:** Videos auto-play when visible (muted)
- ✅ **Hover Effects:** Elegant hover interactions with title reveal
- ✅ **Performance Optimized:** Efficient rendering and smooth scrolling

## 📱 Responsive Breakpoints

- **Desktop (1920px+):** 4-5 videos visible
- **Laptop (1024px-1919px):** 3-4 videos visible  
- **Tablet (768px-1023px):** 2-3 videos visible
- **Mobile (320px-767px):** 1-2 videos visible

## 🛠️ Tech Stack

- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Vite** - Build tool

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:8080
```

## 📂 Project Structure

```
src/
├── components/
│   ├── VideoCarousel.tsx      # Main carousel component
│   └── VideoCard.tsx           # Individual video card component
├── data/
│   └── carouselVideos.ts       # Video data configuration
├── pages/
│   └── Index.tsx               # Main page
└── index.css                   # Design system & animations
```

## 🎨 Implementation Approach

### Infinite Scroll Logic

The infinite scroll effect is achieved by:

1. **Array Duplication:** The video array is duplicated 3 times to ensure seamless looping
2. **CSS Animations:** Using keyframe animations with `translateX(-50%)` to scroll exactly half the content
3. **Seamless Loop:** When the animation completes, it restarts from the beginning, creating the infinite effect

### Performance Optimization

- **GPU Acceleration:** Using CSS transforms for smooth 60fps animations
- **Efficient Rendering:** Only visible videos are actively rendered
- **Lazy Loading:** Videos use poster images and load on-demand
- **Muted Auto-Play:** Videos auto-play muted to avoid browser blocking

### Design System

All styling uses semantic design tokens defined in `src/index.css`:
- Dark cinematic theme with teal accent color
- Consistent spacing and typography
- Reusable animation utilities
- Responsive breakpoints

## 🎬 Video Data Structure

```typescript
interface CarouselVideo {
  id: number;
  url: string;
  thumbnail: string;
  title: string;
}
```

To add your own videos, edit `src/data/carouselVideos.ts`:

```typescript
export const carouselVideos = [
  {
    id: 1,
    url: 'your-video-url.mp4',
    thumbnail: 'your-thumbnail.jpg',
    title: 'Your Video Title'
  },
  // Add more videos...
];
```

## ⚙️ Customization

### Adjust Scroll Speed

In `src/components/VideoCarousel.tsx`, change the animation duration:

```tsx
<VideoCarousel videos={videos} speed="normal" /> // 40s duration
<VideoCarousel videos={videos} speed="fast" />   // 25s duration
```

Or edit the animation in `src/index.css`:

```css
.animate-scroll {
  animation: scroll 40s linear infinite; /* Change 40s to your preferred speed */
}
```

### Modify Card Size

In `src/components/VideoCard.tsx`, adjust the dimensions:

```tsx
className="w-[400px] h-[225px]" // Change to your preferred size
```

### Change Theme Colors

Edit design tokens in `src/index.css`:

```css
:root {
  --primary: 180 85% 45%;        /* Teal accent */
  --background: 220 20% 8%;      /* Dark background */
  /* Modify as needed */
}
```

## 📊 Performance Metrics

- **Animation:** 60fps smooth scrolling
- **Load Time:** Optimized with lazy loading
- **Memory:** Efficient rendering of visible elements only
- **Responsive:** Smooth performance across all devices

## 🎯 Requirements Met

- ✅ Infinite scroll with seamless loop
- ✅ Auto-scroll from right to left
- ✅ No user controls (automatic only)
- ✅ Multiple videos displayed simultaneously
- ✅ Smooth, consistent scrolling speed
- ✅ Videos maintain aspect ratio
- ✅ Auto-play with muted audio
- ✅ Fully responsive design
- ✅ Optimized performance
- ✅ Clean, maintainable code

## 🎁 Bonus Features

- ✨ Hover effects with title reveal
- ✨ Smooth scale animations on hover
- ✨ Gradient overlays for depth
- ✨ Two carousels with different speeds
- ✨ Professional cinematic design
- ✨ Accessible markup

## 📝 License

This project was created as a technical assessment for Unstitched Studios.

## 👨‍💻 Author

Built with ❤️ for Unstitched Studios Internship Application

---

**Frontend Development Task 2: Infinite Auto-Scrolling Video Carousel**  
Company: Unstitched Studios  
Position: Front-End & Testing Intern
