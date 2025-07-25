import './App.css';
import logo from './C1-min.png';

const mockCards = [
  { name: 'Rishav Kumar', handle: '@rishav.kr', code: 'KPRM-EERR-Y73U' },
  { name: 'Aanya Singh', handle: '@aanya.s', code: 'XJQW-PLMN-9Z2K' },
  { name: 'Dev Mehra', handle: '@dev.mehra', code: 'QWER-TYUI-1234' },
  { name: 'Priya Patel', handle: '@priya.p', code: 'ZXCV-BNML-5678' },
  { name: 'Arjun Rao', handle: '@arjun.rao', code: 'ASDF-GHJK-4321' },
];

function App() {
  return (
    <div className="App">
      {/* Header with navigation */}
      <header className="navbar">
        <div className="nav-content">
          <div className="nav-logo">
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
          <h1 className="main-title">Cardiology</h1>
          <p className="subtitle">your own virtual business card</p>
        </div>
        <div className="card-scroll-container">
          {mockCards.map((card, idx) => (
            <div className="card" key={idx}>
              <div className="card-header">
                <div className="card-info">
                  <div className="card-name">{card.name}</div>
                  <div className="card-handle">{card.handle}</div>
                </div>
                <div className="card-logo">
                  <img src={logo} alt="Company Logo" className="card-logo-img" />
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
      </main>
    </div>
  );
}

export default App;