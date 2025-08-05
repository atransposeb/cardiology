import './App.css';
import logo from './C1-min.png';
import { useEffect, useState } from 'react';

const mockCards = [
  { name: 'Rishav Kumar', handle: '@rishav.kr', code: 'KPRM-EERR-Y73U' },
  { name: 'Aanya Singh', handle: '@aanya.s', code: 'XJQW-PLMN-9Z2K' },
  { name: 'Dev Mehra', handle: '@dev.mehra', code: 'QWER-TYUI-1234' },
  { name: 'Priya Patel', handle: '@priya.p', code: 'ZXCV-BNML-5678' },
  { name: 'Arjun Rao', handle: '@arjun.rao', code: 'ASDF-GHJK-4321' },
];

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showNavLogo, setShowNavLogo] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const maxScroll = windowHeight * 0.6;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
      setShowNavLogo(progress > 0.7);
      
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        const opacity = 0.95 - (progress * 0.95);
        const blur = 30 - (progress * 25);
        
        navbar.style.background = `rgba(255, 255, 255, ${opacity})`;
        navbar.style.backdropFilter = `blur(${blur}px) saturate(180%)`;
        navbar.style.webkitBackdropFilter = `blur(${blur}px) saturate(180%)`;
        navbar.style.borderBottom = `1px solid rgba(255, 255, 255, ${opacity * 0.3})`;
        navbar.style.boxShadow = `0 8px 32px rgba(0, 0, 0, ${opacity * 0.1})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardClick = (cardIndex) => {
    setSelectedCard(cardIndex);
    const detailSection = document.getElementById('card-details');
    if (detailSection) {
      detailSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeDetailView = () => {
    setSelectedCard(null);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => (prev + 1) % 4);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => (prev - 1 + 4) % 4);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const goToSlide = (slideIndex) => {
    if (isAnimating || slideIndex === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(slideIndex);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <div className="App">
      {/* Header with navigation */}
      <header className="navbar">
        <div className="nav-content">
          <div className={`nav-logo ${showNavLogo ? 'visible' : ''}`}>
            <img src={logo} alt="Company Logo" className="company-logo" />
          </div>
          <div className="nav-links">
            <button className="login-btn">Login</button>
            <button className="hire-btn">Hire</button>
            <button className="get-plus-btn">Get Plus</button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="main-content">
        <div className="hero-section">
          <h1 
            className="main-title"
            style={{
              transform: `scale(${1 - scrollProgress * 0.7}) translateY(${scrollProgress * -100}px)`,
              opacity: Math.max(0.1, 1 - scrollProgress * 0.9)
            }}
          >
            Cardiology
          </h1>
          <p 
            className="subtitle"
            style={{
              opacity: Math.max(0, 1 - scrollProgress * 1.5),
              transform: `translateY(${scrollProgress * -30}px)`
            }}
          >
            your own virtual business card
          </p>
        </div>
        <div className="card-scroll-container">
          <div className="card-track">
            {/* First set of cards */}
            {mockCards.map((card, idx) => (
              <div 
                className="card" 
                key={`first-${idx}`}
                onClick={() => handleCardClick(idx)}
              >
                <div className="card-header">
                  <div className="card-logo">
                    <img src={logo} alt="Company Logo" className="card-logo-img" />
                  </div>
                  <div className="card-info">
                    <div className="card-name">{card.name}</div>
                    <div className="card-handle">{card.handle}</div>
                  </div>
                </div>
                <div className="card-code">{card.code}</div>
                <div className="card-footer">
                  <div className="card-badge">
                    <svg width="48" height="48" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="20" fill="none" stroke="white" strokeWidth="2" />
                      <text x="24" y="32" textAnchor="middle" fontSize="32" fill="white">✦</text>
                    </svg>
                    <div className="card-badge-label">Silver Member</div>
                  </div>
                  <div className="card-qr">
                    <svg width="48" height="48" viewBox="0 0 48 48">
                      <rect width="48" height="48" fill="white"/>
                      <text x="24" y="32" textAnchor="middle" fontSize="24" fill="black">QR</text>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {mockCards.map((card, idx) => (
              <div 
                className="card" 
                key={`second-${idx}`}
                onClick={() => handleCardClick(idx)}
              >
                <div className="card-header">
                  <div className="card-logo">
                    <img src={logo} alt="Company Logo" className="card-logo-img" />
                  </div>
                  <div className="card-info">
                    <div className="card-name">{card.name}</div>
                    <div className="card-handle">{card.handle}</div>
                  </div>
                </div>
                <div className="card-code">{card.code}</div>
                <div className="card-footer">
                  <div className="card-badge">
                    <svg width="48" height="48" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="20" fill="none" stroke="white" strokeWidth="2" />
                      <text x="24" y="32" textAnchor="middle" fontSize="32" fill="white">✦</text>
                    </svg>
                    <div className="card-badge-label">Silver Member</div>
                  </div>
                  <div className="card-qr">
                    <svg width="48" height="48" viewBox="0 0 48 48">
                      <rect width="48" height="48" fill="white"/>
                      <text x="24" y="32" textAnchor="middle" fontSize="24" fill="black">QR</text>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Information Slides Section */}
        <div className="slides-section">
          <div className="slides-container">
            <div className="slides-wrapper" style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
              
              {/* Slide 1: What is a virtual card? */}
              <div className="slide slide-1">
                <div className="slide-content">
                  <div className="slide-text">
                    <h2 className="slide-title">What is a<br />virtual<br />card?</h2>
                    <div className="play-button" onClick={nextSlide}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5v14l11-7z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <div className="slide-visual">
                    <div className="card-showcase">
                      <div className="showcase-card">
                        <div className="card-header">
                          <div className="card-logo">
                            <img src={logo} alt="Company Logo" className="card-logo-img" />
                          </div>
                          <div className="card-info">
                            <div className="card-name">ARJUN RAO</div>
                            <div className="card-handle">@arjun.rao</div>
                          </div>
                        </div>
                        <div className="card-code-display">ASDF-GHJK-4321</div>
                        <div className="card-footer">
                          <div className="card-badge">
                            <svg width="48" height="48" viewBox="0 0 48 48">
                              <circle cx="24" cy="24" r="20" fill="none" stroke="white" strokeWidth="2" />
                              <text x="24" y="32" textAnchor="middle" fontSize="32" fill="white">✦</text>
                            </svg>
                            <div className="badge-text">SILVER</div>
                          </div>
                          <div className="card-qr">
                            <svg width="48" height="48" viewBox="0 0 48 48">
                              <rect width="48" height="48" fill="white"/>
                              <text x="24" y="32" textAnchor="middle" fontSize="24" fill="black">QR</text>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2: Transform message */}
              <div className="slide slide-2">
                <div className="slide-content">
                  <div className="slide-text">
                    <p className="slide-subtitle">you don't need a portfolio</p>
                    <h2 className="slide-title-large">Just a card, that does it all</h2>
                    <div className="play-button" onClick={nextSlide}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5v14l11-7z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <div className="slide-visual">
                    <div className="card-showcase">
                      <div className="showcase-card showcase-card-style-2">
                        <div className="card-header">
                          <div className="card-logo">
                            <img src={logo} alt="Company Logo" className="card-logo-img" />
                          </div>
                          <div className="card-info">
                            <div className="card-name">PRIYA PATEL</div>
                            <div className="card-handle">@priya.p</div>
                          </div>
                        </div>
                        <div className="card-code-display">ZXCV-BNML-5678</div>
                        <div className="card-footer">
                          <div className="card-badge">
                            <svg width="48" height="48" viewBox="0 0 48 48">
                              <circle cx="24" cy="24" r="20" fill="none" stroke="white" strokeWidth="2" />
                              <text x="24" y="32" textAnchor="middle" fontSize="32" fill="white">✦</text>
                            </svg>
                            <div className="badge-text">GOLD</div>
                          </div>
                          <div className="card-qr">
                            <svg width="48" height="48" viewBox="0 0 48 48">
                              <rect width="48" height="48" fill="white"/>
                              <text x="24" y="32" textAnchor="middle" fontSize="24" fill="black">QR</text>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3: Features */}
              <div className="slide slide-3">
                <div className="slide-content">
                  <div className="slide-text">
                    <h2 className="slide-title">Digital<br />Identity<br />Simplified</h2>
                    <p className="slide-description">One card to share your portfolio, contact info, and professional presence instantly.</p>
                    <div className="play-button" onClick={nextSlide}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5v14l11-7z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <div className="slide-visual">
                    <div className="card-showcase">
                      <div className="showcase-card showcase-card-style-3">
                        <div className="card-header">
                          <div className="card-logo">
                            <img src={logo} alt="Company Logo" className="card-logo-img" />
                          </div>
                          <div className="card-info">
                            <div className="card-name">DEV MEHRA</div>
                            <div className="card-handle">@dev.mehra</div>
                          </div>
                        </div>
                        <div className="card-code-display">QWER-TYUI-1234</div>
                        <div className="card-footer">
                          <div className="card-badge">
                            <svg width="48" height="48" viewBox="0 0 48 48">
                              <circle cx="24" cy="24" r="20" fill="none" stroke="white" strokeWidth="2" />
                              <text x="24" y="32" textAnchor="middle" fontSize="32" fill="white">✦</text>
                            </svg>
                            <div className="badge-text">PLATINUM</div>
                          </div>
                          <div className="card-qr">
                            <svg width="48" height="48" viewBox="0 0 48 48">
                              <rect width="48" height="48" fill="white"/>
                              <text x="24" y="32" textAnchor="middle" fontSize="24" fill="black">QR</text>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 4: Get Started */}
              <div className="slide slide-4">
                <div className="slide-content">
                  <div className="slide-text">
                    <h2 className="slide-title">Ready to<br />get<br />started?</h2>
                    <p className="slide-description">Create your virtual card in minutes and start sharing your professional identity.</p>
                    <button className="cta-button">Get Your Card</button>
                  </div>
                  <div className="slide-visual">
                    <div className="card-showcase">
                      <div className="showcase-card showcase-card-style-4">
                        <div className="card-header">
                          <div className="card-logo">
                            <img src={logo} alt="Company Logo" className="card-logo-img" />
                          </div>
                          <div className="card-info">
                            <div className="card-name">YOUR NAME</div>
                            <div className="card-handle">@your.handle</div>
                          </div>
                        </div>
                        <div className="card-code-display">XXXX-XXXX-XXXX</div>
                        <div className="card-footer">
                          <div className="card-badge">
                            <svg width="48" height="48" viewBox="0 0 48 48">
                              <circle cx="24" cy="24" r="20" fill="none" stroke="white" strokeWidth="2" />
                              <text x="24" y="32" textAnchor="middle" fontSize="32" fill="white">✦</text>
                            </svg>
                            <div className="badge-text">START</div>
                          </div>
                          <div className="card-qr">
                            <svg width="48" height="48" viewBox="0 0 48 48">
                              <rect width="48" height="48" fill="white"/>
                              <text x="24" y="32" textAnchor="middle" fontSize="24" fill="black">QR</text>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Navigation Controls */}
            <div className="slide-navigation">
              <button className={`nav-button back-button ${currentSlide === 0 ? 'hidden' : ''}`} onClick={prevSlide}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back
              </button>
              
              <div className="pagination-indicators">
                {[0, 1, 2, 3].map((index) => (
                  <div 
                    key={index}
                    className={`indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>

              <button className={`nav-button next-button ${currentSlide === 3 ? 'hidden' : ''}`} onClick={nextSlide}>
                Next
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Card Detail Section */}
        {selectedCard !== null && (
          <div id="card-details" className="card-detail-section">
            <div className="detail-container">
              <h2>Card Details</h2>
              <div className="card-detail-layout">
                <div className="detail-card-container">
                  <div className={`detail-card card-style-${selectedCard + 1}`}>
                    <div className="card-header">
                      <div className="card-logo">
                        <img src={logo} alt="Company Logo" className="card-logo-img" />
                      </div>
                      <div className="card-info">
                        <div className="card-name">{mockCards[selectedCard].name}</div>
                        <div className="card-handle">{mockCards[selectedCard].handle}</div>
                      </div>
                    </div>
                    <div className="card-code">{mockCards[selectedCard].code}</div>
                    <div className="card-footer">
                      <div className="card-badge">
                        <svg width="48" height="48" viewBox="0 0 48 48">
                          <circle cx="24" cy="24" r="20" fill="none" stroke="white" strokeWidth="2" />
                          <text x="24" y="32" textAnchor="middle" fontSize="32" fill="white">✦</text>
                        </svg>
                        <div className="card-badge-label">Silver Member</div>
                      </div>
                      <div className="card-qr">
                        <svg width="48" height="48" viewBox="0 0 48 48">
                          <rect width="48" height="48" fill="white"/>
                          <text x="24" y="32" textAnchor="middle" fontSize="24" fill="black">QR</text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="close-detail-btn" onClick={closeDetailView}>
                Close Details
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;