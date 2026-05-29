import SEO from './components/layout/SEO.jsx';
import Navbar from './components/layout/Navbar.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import PopularSection from './components/sections/PopularSection.jsx';
import MenuSection from './components/sections/MenuSection.jsx';
import CartDrawer from './components/ui/CartDrawer.jsx';
import ProductModal from './components/ui/ProductModal.jsx';
import clientData from './data/client.json';

const SERIF = { fontFamily: '"Cormorant Garamond", serif' };

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF', color: '#0D1B3E', overflowX: 'clip' }}>
      <SEO />
      <Navbar />
      <CartDrawer />
      <ProductModal />
      <main>
        <HeroSection />
        <PopularSection />
        <MenuSection />
      </main>
      <footer
        className="flex flex-col items-center justify-center gap-2 py-10"
        style={{ backgroundColor: '#0D1B3E' }}
      >
        <span
          className="font-light tracking-widest"
          style={{ ...SERIF, fontSize: '1.4rem', color: '#FFFFFF', letterSpacing: '0.1em' }}
        >
          {clientData.name}
        </span>
        {clientData.instagram && (
          <a
            href={`https://instagram.com/${clientData.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] tracking-[0.25em] uppercase"
            style={{ color: '#8A9DC0', fontStyle: 'italic', ...SERIF, textDecoration: 'none' }}
          >
            @{clientData.instagram}
          </a>
        )}
        {clientData.email && (
          <a
            href={`mailto:${clientData.email}`}
            className="text-[9px] tracking-[0.25em]"
            style={{ color: '#8A9DC0', textDecoration: 'none' }}
          >
            {clientData.email}
          </a>
        )}
        <div className="flex items-center gap-3 mt-3">
          <div className="h-px w-10" style={{ backgroundColor: 'rgba(236,28,35,0.3)' }} />
          <span className="text-[10px] tracking-widest" style={{ color: '#6B84B8' }}>
            © {new Date().getFullYear()} · {clientData.address}
          </span>
          <div className="h-px w-10" style={{ backgroundColor: 'rgba(236,28,35,0.3)' }} />
        </div>
      </footer>
    </div>
  );
}
