import React from 'react';
import LegalLayout from '../components/LegalLayout';

const Disclaimer = () => {
  return (
    <LegalLayout 
      title="Disclaimer" 
      subtitle="General informational and reference purposes regarding property, investments, and projects."
      lastUpdated="November 3, 2026"
    >
      <div className="legal-intro-box">
        The information provided on the official website of <strong>NIU GEN INDIA INFRAS</strong> is intended for general informational and reference purposes. We make reasonable efforts to ensure that the information published on our website is accurate and up to date. However, certain information may change depending on project developments, approvals, market conditions, and other circumstances.
      </div>

      {/* 1. Property Information */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">01</span>
          <h2 className="legal-section-title">Property Information</h2>
        </div>
        <p className="legal-text-p">
          All property descriptions, land details, project specifications, layouts, dimensions, amenities, and other information are provided for general reference.
        </p>
        <p className="legal-text-p">
          Customers are advised to independently verify the relevant property details before making any purchase or investment decision.
        </p>
      </div>

      {/* 2. Images & Illustrations */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">02</span>
          <h2 className="legal-section-title">Images &amp; Illustrations</h2>
        </div>
        <p className="legal-text-p">
          Photographs, architectural designs, 3D visualizations, sample layouts, and illustrative images displayed on the website may be used for presentation and promotional purposes.
        </p>
        <p className="legal-text-p">
          Actual project appearance, specifications, materials, and facilities may differ from the visual representations.
        </p>
      </div>

      {/* 3. Pricing & Availability */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">03</span>
          <h2 className="legal-section-title">Pricing &amp; Availability</h2>
        </div>
        <p className="legal-text-p">
          Property prices, offers, payment schedules, and availability may change without prior notice.
        </p>
        <p className="legal-text-p">
          Customers should contact our authorized representatives to obtain the latest confirmed information.
        </p>
      </div>

      {/* 4. Legal Approvals & Documentation */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">04</span>
          <h2 className="legal-section-title">Legal Approvals &amp; Documentation</h2>
        </div>
        <p className="legal-text-p">
          All project approvals, registrations, ownership documents, and statutory permissions are subject to the applicable requirements of the relevant authorities.
        </p>
        <p className="legal-text-p">
          No approval or registration should be considered available unless it has been obtained and verified for the particular project.
        </p>
        <p className="legal-text-p">
          Customers should verify all relevant legal documents before entering into any transaction.
        </p>
      </div>

      {/* 5. Investment Disclaimer */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">05</span>
          <h2 className="legal-section-title">Investment Disclaimer</h2>
        </div>
        <p className="legal-text-p">
          Any information relating to property investment, development opportunities, or future value is provided for general informational purposes only.
        </p>
        <p className="legal-text-p">
          NIU GEN INDIA INFRAS does not guarantee property appreciation, rental income, resale value, or investment returns.
        </p>
        <p className="legal-text-p">
          Customers should conduct their own due diligence and seek independent professional advice where necessary.
        </p>
      </div>

      {/* 6. External Links */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">06</span>
          <h2 className="legal-section-title">External Links</h2>
        </div>
        <p className="legal-text-p">
          Our website may contain links to third-party websites and external resources. We are not responsible for the accuracy, content, security, or privacy practices of such external platforms.
        </p>
      </div>

      {/* 7. Limitation of Responsibility */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">07</span>
          <h2 className="legal-section-title">Limitation of Responsibility</h2>
        </div>
        <p className="legal-text-p">
          To the extent permitted by applicable law, NIU GEN INDIA INFRAS shall not be responsible for losses resulting from reliance on outdated or incomplete website information.
        </p>
        <p className="legal-text-p">
          Nothing in this disclaimer excludes any liability that cannot legally be excluded.
        </p>
      </div>

      {/* 8. Updates to This Disclaimer */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">08</span>
          <h2 className="legal-section-title">Updates to This Disclaimer</h2>
        </div>
        <p className="legal-text-p">
          We reserve the right to modify or update this Disclaimer whenever necessary. Changes will be published on this page.
        </p>
      </div>

      {/* 9. Contact Information */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">09</span>
          <h2 className="legal-section-title">Contact Information</h2>
        </div>
        <p className="legal-text-p">
          For clarification regarding any information published on our website, please contact:
        </p>
        <div style={{ marginTop: '16px', background: '#FBF8F3', padding: '16px 20px', borderRadius: '10px', border: '1px solid #EFE4D6' }}>
          <strong style={{ color: '#381A0B', fontSize: '15px', display: 'block', marginBottom: '6px' }}>NIU GEN INDIA INFRAS</strong>
          <p style={{ margin: '4px 0', fontSize: '13.5px', color: '#55473E' }}>
            Phone: <a href="tel:+919688866000" style={{ color: '#8C4416', fontWeight: '700' }}>+91 96888 66000</a>
          </p>
          <p style={{ margin: '4px 0', fontSize: '13.5px', color: '#55473E' }}>
            Email: <a href="mailto:niugeninfra2.0@gmail.com" style={{ color: '#8C4416', fontWeight: '700' }}>niugeninfra2.0@gmail.com</a>
          </p>
        </div>
      </div>

    </LegalLayout>
  );
};

export default Disclaimer;

