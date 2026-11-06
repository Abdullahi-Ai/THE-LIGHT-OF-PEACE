import React, { useEffect, Suspense, lazy, Component } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("The Light of Peace - Uncaught runtime error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center p-8 text-center">
          <div className="w-16 h-16 bg-brand-emerald/10 text-brand-emerald rounded-3xl flex items-center justify-center mb-6 text-3xl font-bold">
            !
          </div>
          <h1 className="text-3xl font-heading font-bold text-brand-emerald-dark mb-4">Something went wrong</h1>
          <p className="text-brand-muted mb-8 max-w-md text-sm">
            We encountered an unexpected issue. Please refresh the page to continue.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-brand-emerald text-white rounded-full font-bold text-xs uppercase tracking-wider shadow-md"
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Lazy-load below-the-fold sections with Vite code-splitting
const About = lazy(() => import('./components/About'));
const Programs = lazy(() => import('./components/Programs'));
const ImpactStats = lazy(() => import('./components/ImpactStats'));
const CleanWater = lazy(() => import('./components/CleanWater'));
const MosqueConstruction = lazy(() => import('./components/MosqueConstruction'));
const Udhhiya = lazy(() => import('./components/Udhhiya'));
const SuccessStories = lazy(() => import('./components/SuccessStories'));
const Donation = lazy(() => import('./components/Donation'));
const Transparency = lazy(() => import('./components/Transparency'));
const Gallery = lazy(() => import('./components/Gallery'));
const Partners = lazy(() => import('./components/Partners'));
const Volunteer = lazy(() => import('./components/Volunteer'));
const Blog = lazy(() => import('./components/Blog'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const AboutOrganization = lazy(() => import('./components/AboutOrganization'));

const LoadingFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center py-20 bg-brand-cream">
    <div className="w-10 h-10 border-3 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const HomePage = ({ scrollTo, onOpenGallery }) => (
  <>
    <Hero scrollTo={scrollTo} />
    <About scrollTo={scrollTo} />
    <Programs scrollTo={scrollTo} />
    <ImpactStats />
    <CleanWater scrollTo={scrollTo} />
    <MosqueConstruction scrollTo={scrollTo} />
    <Udhhiya scrollTo={scrollTo} onOpenGallery={onOpenGallery} />
    <SuccessStories />
    <Donation />
    <Transparency onOpenGallery={onOpenGallery} scrollTo={scrollTo} />
    <Gallery />
    <Partners />
    <Volunteer />
    <Blog />
    <FAQ />
    <Contact />
  </>
);

export default function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Only scroll to top on actual route transition if not an in-page anchor
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const scrollTo = (id) => {
    const executeScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (pathname !== '/') {
      navigate('/');
      // Use requestAnimationFrame for reliable execution after route change
      requestAnimationFrame(() => {
        setTimeout(executeScroll, 120);
      });
    } else {
      executeScroll();
    }
  };

  const handleOpenGallery = () => {
    scrollTo("gallery");
  };

  return (
    <div className="font-sans antialiased text-brand-text bg-brand-cream overflow-x-hidden min-h-screen flex flex-col justify-between selection:bg-brand-emerald selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-brand-emerald focus:text-white focus:rounded-xl focus:shadow-xl focus:font-bold focus:text-xs focus:uppercase focus:tracking-wider focus:outline-none focus:ring-2 focus:ring-brand-gold"
      >
        Skip to main content
      </a>
      <ErrorBoundary>
        <Navbar scrollTo={scrollTo} />
        <main id="main-content" tabIndex="-1" className="flex-grow focus:outline-none">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage scrollTo={scrollTo} onOpenGallery={handleOpenGallery} />} />
              <Route path="/about" element={<div className="pt-24"><About scrollTo={scrollTo} /></div>} />
              <Route path="/about-the-organization" element={<AboutOrganization scrollTo={scrollTo} />} />
              <Route path="/about-the-organization/" element={<AboutOrganization scrollTo={scrollTo} />} />
              <Route path="/programs" element={<div className="pt-24"><Programs scrollTo={scrollTo} /></div>} />
              <Route path="/water" element={<div className="pt-24"><CleanWater scrollTo={scrollTo} /></div>} />
              <Route path="/mosque" element={<div className="pt-24"><MosqueConstruction scrollTo={scrollTo} /></div>} />
              <Route path="/udhhiya" element={<div className="pt-24"><Udhhiya scrollTo={scrollTo} onOpenGallery={handleOpenGallery} /></div>} />
              <Route path="/donate" element={<div className="pt-24"><Donation /></div>} />
              <Route path="/gallery" element={<div className="pt-24"><Gallery /></div>} />
              <Route path="/volunteer" element={<div className="pt-24"><Volunteer /></div>} />
              <Route path="/faq" element={<div className="pt-24"><FAQ /></div>} />
              <Route path="/contact" element={<div className="pt-24"><Contact /></div>} />
              <Route path="/blog/:id" element={<BlogPost />} />
              {/* Fallback route */}
              <Route path="*" element={<HomePage scrollTo={scrollTo} onOpenGallery={handleOpenGallery} />} />
            </Routes>
          </Suspense>
        </main>
        <Footer scrollTo={scrollTo} onOpenGallery={handleOpenGallery} />
      </ErrorBoundary>
    </div>
  );
}
