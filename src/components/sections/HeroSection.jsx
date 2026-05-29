import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';
import clientData from '../../data/client.json';

const SERIF = { fontFamily: '"Cormorant Garamond", serif' };

export default function HeroSection() {
  const scrollToMenu = () =>
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });

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
        <img
          src={logo}
          alt={clientData.name}
          style={{ width: '220px', maxWidth: '60vw' }}
          draggable={false}
        />

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
          onClick={scrollToMenu}
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
          {clientData.instagram && (
            <a
              href={`https://instagram.com/${clientData.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-widest uppercase"
              style={{ color: '#9A9A9A', textDecoration: 'none' }}
            >
              📸 @{clientData.instagram}
            </a>
          )}
          {clientData.email && (
            <a
              href={`mailto:${clientData.email}`}
              className="text-[10px] tracking-widest"
              style={{ color: '#9A9A9A', textDecoration: 'none' }}
            >
              ✉️ {clientData.email}
            </a>
          )}
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: '#DDDDE8' }} />
    </section>
  );
}
