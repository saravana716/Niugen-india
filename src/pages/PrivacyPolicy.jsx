import React from 'react';
import LegalLayout from '../components/LegalLayout';

const PrivacyPolicy = () => {
  return (
    <LegalLayout 
      title="Privacy Policy" 
      subtitle="At NIU GEN INDIA INFRAS, we respect your privacy and are committed to protecting the personal information you share with us."
      lastUpdated="November 3, 2026"
    >
      <div className="legal-intro-box">
        At <strong>NIU GEN INDIA INFRAS</strong>, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, submit an enquiry, or communicate with our team.
      </div>

      {/* 1. Information We Collect */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">01</span>
          <h2 className="legal-section-title">Information We Collect</h2>
        </div>
        <p className="legal-text-p">
          We may collect the following information when you interact with our website:
        </p>
        <ul className="legal-list">
          <li>Full Name</li>
          <li>Mobile Number</li>
          <li>Email Address</li>
          <li>Residential Address or Location</li>
          <li>Property or Project Preferences</li>
          <li>Enquiry Details</li>
          <li>Information submitted through contact forms</li>
          <li>Basic technical and website usage information</li>
        </ul>
        <p className="legal-text-p">
          We collect information that is reasonably necessary for the purposes explained in this policy.
        </p>
      </div>

      {/* 2. How We Use Your Information */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">02</span>
          <h2 className="legal-section-title">How We Use Your Information</h2>
        </div>
        <p className="legal-text-p">Your personal information may be used to:</p>
        <ul className="legal-list">
          <li>Respond to customer enquiries.</li>
          <li>Share property and project information.</li>
          <li>Provide pricing and availability details.</li>
          <li>Arrange property visits and consultations.</li>
          <li>Communicate project updates.</li>
          <li>Provide customer support.</li>
          <li>Improve our website and services.</li>
          <li>Send relevant promotional communications where permitted.</li>
        </ul>
      </div>

      {/* 3. Information Sharing */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">03</span>
          <h2 className="legal-section-title">Information Sharing</h2>
        </div>
        <p className="legal-text-p">
          We respect the confidentiality of your personal information. We do not sell or rent your personal information to third parties.
        </p>
        <p className="legal-text-p">
          However, information may be shared when necessary with:
        </p>
        <ul className="legal-list">
          <li>Authorized employees and representatives.</li>
          <li>Website hosting and technology service providers.</li>
          <li>Communication and customer support providers.</li>
          <li>Professional advisers.</li>
          <li>Government authorities or regulatory bodies when legally required.</li>
        </ul>
        <p className="legal-text-p">
          Such sharing will be subject to applicable legal requirements.
        </p>
      </div>

      {/* 4. Data Security */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">04</span>
          <h2 className="legal-section-title">Data Security</h2>
        </div>
        <p className="legal-text-p">
          We take reasonable technical and organizational measures to protect personal information against unauthorized access, misuse, alteration, disclosure, or loss.
        </p>
        <p className="legal-text-p">
          However, no method of electronic transmission or storage can be guaranteed to be completely secure.
        </p>
      </div>

      {/* 5. Cookies & Website Technologies */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">05</span>
          <h2 className="legal-section-title">Cookies &amp; Website Technologies</h2>
        </div>
        <p className="legal-text-p">Our website may use cookies and similar technologies to:</p>
        <ul className="legal-list">
          <li>Improve website functionality.</li>
          <li>Understand visitor behaviour.</li>
          <li>Analyze website traffic.</li>
          <li>Enhance user experience.</li>
          <li>Support relevant marketing activities where permitted.</li>
        </ul>
        <p className="legal-text-p">
          Users may manage cookies through their browser settings.
        </p>
      </div>

      {/* 6. Third-Party Services */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">06</span>
          <h2 className="legal-section-title">Third-Party Services</h2>
        </div>
        <p className="legal-text-p">Our website may integrate third-party services such as:</p>
        <ul className="legal-list">
          <li>Google Analytics</li>
          <li>Google Maps</li>
          <li>Website hosting services</li>
          <li>Communication tools</li>
          <li>Social media platforms</li>
        </ul>
        <p className="legal-text-p">
          These services may process information according to their respective privacy policies.
        </p>
      </div>

      {/* 7. Data Retention */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">07</span>
          <h2 className="legal-section-title">Data Retention</h2>
        </div>
        <p className="legal-text-p">
          We retain personal information only for as long as reasonably necessary to fulfil the purposes for which it was collected, meet business requirements, or comply with applicable legal obligations.
        </p>
      </div>

      {/* 8. Your Privacy Rights */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">08</span>
          <h2 className="legal-section-title">Your Privacy Rights</h2>
        </div>
        <p className="legal-text-p">Subject to applicable laws, you may request:</p>
        <ul className="legal-list">
          <li>Access to your personal information.</li>
          <li>Correction of inaccurate information.</li>
          <li>Deletion of personal information where legally permissible.</li>
          <li>Withdrawal of consent where processing is based on consent.</li>
          <li>Information about how your personal data is handled.</li>
        </ul>
        <p className="legal-text-p">You may contact us to exercise these rights.</p>
      </div>

      {/* 9. Children's Privacy */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">09</span>
          <h2 className="legal-section-title">Children's Privacy</h2>
        </div>
        <p className="legal-text-p">
          Our website is not intentionally designed to collect personal information from children without appropriate authorization or consent where required by law.
        </p>
      </div>

      {/* 10. Policy Updates */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">10</span>
          <h2 className="legal-section-title">Policy Updates</h2>
        </div>
        <p className="legal-text-p">
          We may update this Privacy Policy from time to time to reflect changes in our business practices, website functionality, or applicable legal requirements. Any updates will be published on this page.
        </p>
      </div>

      {/* 11. Contact Us */}
      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">11</span>
          <h2 className="legal-section-title">Contact Us</h2>
        </div>
        <p className="legal-text-p">
          For questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact:
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
        <p style={{ marginTop: '16px', color: '#7E6E64', fontSize: '13px', fontStyle: 'italic' }}>
          We value your trust and are committed to handling your personal information responsibly.
        </p>
      </div>

    </LegalLayout>
  );
};

export default PrivacyPolicy;

