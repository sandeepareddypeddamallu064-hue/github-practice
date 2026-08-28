import { useState } from "react";
import "./App.css";

function App() {
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      id: "admin",
      icon: "🏛️",
      title: "ADMIN",
      subtitle: "CENTRAL COMMAND",
      description:
        "Complete maritime intelligence and system management",
    },
    {
      id: "authority",
      icon: "⚓",
      title: "AUTHORITY",
      subtitle: "REGIONAL OPERATIONS",
      description:
        "Monitor regional incidents, vessels and oil spills",
    },
    {
      id: "captain",
      icon: "🚢",
      title: "CAPTAIN",
      subtitle: "VESSEL COMMAND",
      description:
        "Monitor and manage your assigned vessel",
    },
  ];

  return (
    <div className="portal">

      {/* ================= HEADER ================= */}
      <header className="header">

        <div className="government">

          {/* Government Logo */}
          <div className="gov-logo">
            <div className="logo-circle">
              🌊
            </div>
          </div>

          <div className="gov-text">
            <h2>GOVERNMENT OF INDIA</h2>
            <p>Maritime Safety & Environmental Monitoring</p>
          </div>

        </div>

        {/* OceanSentinel Branding */}
        <div className="brand">
          <h1>OCEANSENTINEL</h1>
          <span>AI-POWERED MARITIME INTELLIGENCE</span>
        </div>

      </header>


      {/* ================= MAIN ================= */}
      <main className="main">

        {/* System Status */}
        <div className="status">
          <span className="status-dot"></span>
          AI SYSTEM OPERATIONAL
        </div>


        {/* ================= HERO ================= */}
        <section className="hero">

          <p className="eyebrow">
            INDIAN OCEAN REGION
          </p>

          <h1>
            MARITIME
            <br />
            <span>INTELLIGENCE & RESPONSE</span>
          </h1>

          <p className="hero-text">
            AI-powered satellite intelligence for oil spill detection,
            vessel monitoring and maritime environmental protection.
          </p>

        </section>


        <div className="divider"></div>


        {/* ================= ACCESS PORTALS ================= */}
        <section className="access">

          <p className="section-label">
            SECURE ACCESS
          </p>

          <h2>
            SELECT YOUR COMMAND PORTAL
          </h2>

          <p className="section-description">
            Choose your authorized role to continue
          </p>


          <div className="role-container">

            {roles.map((role) => (

              <div
                key={role.id}
                className={`role-card ${
                  selectedRole === role.id ? "selected" : ""
                }`}
                onClick={() => setSelectedRole(role.id)}
              >

                {/* Card Top */}
                <div className="card-top">

                  <div className="role-icon">
                    {role.icon}
                  </div>

                  <div className="live-indicator">
                    <span></span>
                    SECURE
                  </div>

                </div>


                {/* Role */}
                <h3>
                  {role.title}
                </h3>

                <h4>
                  {role.subtitle}
                </h4>

                <p>
                  {role.description}
                </p>


                {/* Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedRole(role.id);
                  }}
                >
                  ENTER PORTAL
                  <span>→</span>
                </button>

              </div>

            ))}

          </div>

        </section>


        {/* ================= SECURITY ================= */}
        <div className="security">

          <div className="security-icon">
            🔒
          </div>

          <div>
            <strong>
              AUTHORIZED ACCESS ONLY
            </strong>

            <p>
              This portal is restricted to authorized maritime
              management personnel.
            </p>
          </div>

        </div>

      </main>


      {/* ================= FOOTER ================= */}
      <footer>

        <span>
          © 2026 OceanSentinel
        </span>

        <span>
          Maritime Intelligence & Environmental Monitoring
        </span>

        <span>
          SIH 2026 • Prototype
        </span>

      </footer>

    </div>
  );
}

export default App;