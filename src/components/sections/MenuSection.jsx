import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProductCard from '../ui/ProductCard.jsx';
import menu from '../../data/menu.json';

const ALL = 'Todos';
const categories = [ALL, ...Array.from(new Set(menu.map((p) => p.category)))];
const SERIF = { fontFamily: '"Cormorant Garamond", serif' };

export default function MenuSection() {
  const [active, setActive] = useState(ALL);
  const filtered = active === ALL ? menu : menu.filter((p) => p.category === active);

  return (
    <section
      id="menu"
      className="px-4 py-14"
      style={{ backgroundColor: '#F5F3EE', position: 'relative', zIndex: 10 }}
    >
      <div className="flex flex-col items-center gap-2 mb-10">
        <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: '#EC1C23' }}>
          notre carte
        </span>
        <h2
          className="font-normal"
          style={{ ...SERIF, fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', color: '#0D1B3E' }}
        >
          Nuestros productos
        </h2>
        <div className="flex items-center gap-3 mt-1">
          <div className="h-px w-12" style={{ backgroundColor: '#DDDDE8' }} />
          <span style={{ color: '#EC1C23', fontSize: '10px' }}>✦</span>
          <div className="h-px w-12" style={{ backgroundColor: '#DDDDE8' }} />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="px-4 py-1.5 text-[10px] tracking-widest uppercase font-bold transition-colors"
            style={
              active === cat
                ? { backgroundColor: '#1C3D79', color: '#FFFFFF' }
                : { backgroundColor: 'transparent', color: '#9A9A9A', border: '1px solid #DDDDE8' }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        className="grid gap-4 max-w-4xl mx-auto"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
