import React, { useEffect, Suspense, lazy, Component } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center p-8 text-center">
          <div className="w-20 h-20 bg-brand-emerald/10 rounded-3xl flex items-center justify-center mb-6">
            <div className="text-4xl text-brand-emerald">!</div>
          </div>
          <h1 className="text-3xl font-heading font-bold text-brand-emerald-dark mb-4">Something went wrong</h1>
          <p className="text-brand-muted mb-8 max-w-md">The website encountered an unexpected error. Please try refreshing the page.</p>
          <button onClick={() => window.location.reload()} className="px-8 py-3 bg-brand-emerald-dark text-white rounded-full font-bold">Refresh Page</button>
        </div>
      );
    }
    return this.props.children;
  }
}

const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Programs = lazy(() => import('./components/Programs'));
const ImpactStats = lazy(() => import('./components/ImpactStats'));
const CleanWater = lazy(() => import('./components/CleanWater'));
const MosqueConstruction = lazy(() => import('./components/MosqueConstruction'));
const Udhhiya = lazy(() => import('./components/Udhhiya'));
const Transparency = lazy(() => import('./components/Transparency'));
const Donation = lazy(() => import('./components/Donation'));
const Blog = lazy(() => import('./components/Blog'));
const SuccessStories = lazy(() => import('./components/SuccessStories'));
const Partners = lazy(() => import('./components/Partners'));
const Volunteer = lazy(() => import('./components/Volunteer'));
const FAQ = lazy(() => import('./components/FAQ'));
const Gallery = lazy(() => import('./components/Gallery'));
const Contact = lazy(() => import('./components/Contact'));
const BlogPost = lazy(() => import('./components/BlogPost'));

const Loading = () => (
  <div className="fixed inset-0 bg-brand-emerald-dark flex items-center justify-center z-[100]">
    <div className="w-12 h-12 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const HomePage = ({ scrollTo }) => (
  <>
    <Hero scrollTo={scrollTo} />
    <About scrollTo={scrollTo} />
    <Programs />
    <ImpactStats />
    <CleanWater />
    <MosqueConstruction scrollTo={scrollTo} />
    <Udhhiya scrollTo={scrollTo} />
    <Transparency />
    <Donation />
    <Blog />
    <SuccessStories />
    <Partners />
    <Volunteer scrollTo={scrollTo} />
    <FAQ />
    <Contact />
  </>
);

export default function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const scrollTo = (id) => {
    if (pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans antialiased text-brand-text bg-brand-cream overflow-x-hidden">
      <ErrorBoundary>
        <Navbar scrollTo={scrollTo} />
        <main>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<HomePage scrollTo={scrollTo} />} />
              <Route path="/gallery" element={<div className="pt-20"><Gallery /></div>} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
          </Suspense>
        </main>
        <Footer scrollTo={scrollTo} />
      </ErrorBoundary>
    </div>
  );
}
