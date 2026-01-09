import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { personalDetails } from '../data';
import Socials from './Socials';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
  const canvasRefs = useRef([]);
  const GRID_SIZE = 5; // 5x5 grid = 25 tiles

  useEffect(() => {
    const img = new Image();
    img.src = profileImg;

    img.onload = () => {
      const tileWidth = img.width / GRID_SIZE;
      const tileHeight = img.height / GRID_SIZE;

      canvasRefs.current.forEach((canvas, index) => {
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const row = Math.floor(index / GRID_SIZE);
        const col = index % GRID_SIZE;

        // Set high resolution for sharpness
        canvas.width = 100; // Arbitrary high res tile size
        canvas.height = 100;

        ctx.drawImage(
          img,
          col * tileWidth, row * tileHeight, tileWidth, tileHeight, // Source slice
          0, 0, canvas.width, canvas.height // Destination
        );
      });
    };
  }, []);

  return (
    <section className="relative min-h-[110vh] overflow-hidden layer-sky flex flex-col items-center justify-center text-center px-5 pb-32">

      {/* Decorative Clouds */}
      <motion.div
        animate={{ x: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute top-20 left-10 w-32 h-12 bg-white/40 blur-xl rounded-full"
      />
      <motion.div
        animate={{ x: [0, -60, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute top-40 right-20 w-48 h-16 bg-white/30 blur-xl rounded-full"
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col items-center gap-6"
      >
        <span className="text-xl font-bold bg-white/20 px-4 py-2 rounded-full border border-white/40 shadow-sm text-slate-800 backdrop-blur-sm">
          Hello, Explorer! 👋
        </span>

        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight drop-shadow-sm">
          {personalDetails.name.split(' ')[0]}
        </h1>

        <p className="text-2xl md:text-3xl font-bold text-slate-700 max-w-2xl leading-snug">
          Building <span className="text-white underline decoration-wavy decoration-orange-400">Intelligent</span> Worlds with AI & Code.
        </p>

        <div className="flex gap-4 mt-6">
          <Socials className="bg-white/30 p-3 rounded-full backdrop-blur-sm border border-white/50" />
        </div>
      </motion.div>

      {/* Floating Avatar */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, y: [0, -20, 0] }}
        transition={{
          scale: { duration: 0.5 },
          y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
        }}
        className="relative mt-12 z-10"
      >
        <div className="absolute inset-0 bg-white/50 blur-[60px] rounded-full scale-150"></div>
        <div className="relative group w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-white shadow-2xl skew-y-0 overflow-hidden bg-slate-200">
          {/* Mosaic Grid */}
          <div className="w-full h-full grid grid-cols-5 grid-rows-5 pointer-events-none select-none">
            {[...Array(GRID_SIZE * GRID_SIZE)].map((_, i) => (
              <canvas
                key={i}
                ref={el => canvasRefs.current[i] = el}
                className="w-full h-full block"
              />
            ))}
          </div>

          {/* Transparent Protection Overlay */}
          <div className="absolute inset-0 z-20 rounded-full bg-transparent" aria-hidden="true"></div>
        </div>
        {/* Floating Tech Badge */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute -right-6 top-0 bg-orange-400 text-white font-bold px-4 py-2 rounded-xl shadow-lg border-2 border-white -rotate-12"
        >
          AI Wizard 🧙‍♂️
        </motion.div>
      </motion.div>

      {/* Transition to next layer */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#006994] to-transparent z-0"></div>
    </section>
  );
};

export default Hero;
