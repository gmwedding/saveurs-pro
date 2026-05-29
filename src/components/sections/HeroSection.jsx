import { motion } from 'framer-motion';
import { useCartStore } from '../../store/useCartStore.js';
import clientData from '../../data/client.json';

const SERIF = { fontFamily: '"Cormorant Garamond", serif' };

export default function HeroSection() {
  const openCart = useCartStore((s) => s.openCart);

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-6"
      style={{ minHeight: '88vh', backgroundColor: '#FFFFFF' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex flex-col items-center gap-6 max-w-xl"
      >
        <h1
          className="font-light leading-none tracking-widest uppercase"
          style={{ ...SERIF, fontSize: 'clamp(3.5rem, 13vw, 7.5rem)', color: '#0D1B3E' }}
        >
          {clientData.name}
        </h1>

        <div className="flex items-center gap-3 w-full max-w-xs">
          <div className="flex-1 h-px" style={{ backgroundColor: '#DDDDE8' }} />
          <span style={{ color: '#EC1C23', fontSize: '14px' }}>✦</span>
          <div className="flex-1 h-px" style={{ backgroundColor: '#DDDDE8' }} />
        </div>

        <p
          className="font-light leading-relaxed tracking-wide"
          style={{ ...SERIF, fontSize: 'clamp(1rem, 3vw, 1.3rem)', color: '#6A6A6A', fontStyle: 'italic' }}
        >
          {clientData.tagline}
        </p>

        <motion.button
          whileHover={{ backgroundColor: '#1C3D79', color: '#FFFFFF' }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.15 }}
          onClick={openCart}
          className="mt-2 px-10 py-3.5 text-[11px] tracking-[0.25em] uppercase font-bold"
          style={{ border: '2px solid #1C3D79', color: '#1C3D79', backgroundColor: 'transparent' }}
        >
          Ver carta
        </motion.button>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          {clientData.address && (
            <span className="text-[10px] tracking-widest uppercase" style={{ color: '#9A9A9A' }}>
              📍 {clientData.address}
            </span>
          )}
          {clientData.hours && (
            <span className="text-[10px] tracking-widest uppercase" style={{ color: '#9A9A9A' }}>
              🕐 {clientData.hours}
            </span>
          )}
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: '#DDDDE8' }} />
    </section>
  );
}
