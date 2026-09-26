import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/config';
import Button from '../components/Button';

const AnimatedCounter = ({ value, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const end = value;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const CodeVisual = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-cyan-accent/10 to-accent/20 rounded-3xl blur-2xl opacity-60" />
      
      <div className="relative glass rounded-2xl overflow-hidden border border-white/[0.1]">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs text-gray-500 font-mono">dashboard.jsx</span>
        </div>
        
        {/* Code content */}
        <div className="p-5 font-mono text-xs sm:text-sm space-y-2 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-500"
          >
            <span className="text-purple-400">const</span>{' '}
            <span className="text-cyan-accent">App</span> = () =&gt; {'{'}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="pl-4"
          >
            <span className="text-purple-400">return</span> (
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="pl-8 text-gray-300"
          >
            &lt;<span className="text-accent-light">Dashboard</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            className="pl-12"
          >
            <span className="text-cyan-accent">theme</span>=
            <span className="text-green-400">"dark"</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 }}
            className="pl-12"
          >
            <span className="text-cyan-accent">animated</span>=
            <span className="text-orange-400">{'{true}'}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="pl-8 text-gray-300"
          >
            /&gt;
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 }}
            className="pl-4 text-gray-300"
          >
            )
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.9 }}
            className="text-gray-500"
          >
            {'}'}
          </motion.div>
          
          {/* Floating stats cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="mt-4 grid grid-cols-2 gap-2"
          >
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
              <div className="text-accent-light text-lg font-bold">98</div>
              <div className="text-gray-500 text-[10px]">Performance</div>
            </div>
            <div className="bg-cyan-accent/10 border border-cyan-accent/20 rounded-lg p-3">
              <div className="text-cyan-accent text-lg font-bold">100</div>
              <div className="text-gray-500 text-[10px]">Accessibility</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 section-padding overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-accent/8 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-sm text-green-400 font-medium">
                {siteConfig.availability}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-white">Turn Your Idea Into a </span>
              <span className="text-gradient-accent">Website That Gets Results.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed"
            >
              I build fast, modern and responsive websites for businesses, startups, creators and individuals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button href="#contact">
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="#projects" variant="secondary">
                View My Work
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {siteConfig.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-white">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <CodeVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
