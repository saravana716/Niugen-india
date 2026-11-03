import React from 'react';
import LegalLayout from '../components/LegalLayout';

const LegalApprovals = () => {
  return (
    <LegalLayout 
      title="Legal Approvals & Documentation" 
      subtitle="Transparency. Trust. Compliance."
      lastUpdated="November 3, 2026"
    >
      <div className="legal-intro-box">
        At <strong>NIU GEN INDIA INFRAS</strong>, we believe that transparency, legal compliance, and customer confidence are essential to every successful property transaction. We are committed to following applicable statutory requirements and maintaining relevant legal documentation for our projects and business operations.
      </div>

      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">01</span>
          <h2 className="legal-section-title">Project Legal Documentation</h2>
        </div>
        <p className="legal-text-p">
          Depending on the nature, location, and applicable regulations of each project, the following documents may be relevant:
        </p>

        <div className="legal-docs-grid">
          {/* Company Documentation */}
          <div className="legal-docs-col">
            <h3 className="legal-docs-col-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#683515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              Company Documentation
            </h3>
            <ul className="legal-list">
              <li>Company Registration Certificate</li>
              <li>GST Registration Certificate</li>
              <li>Other applicable business registrations</li>
            </ul>
          </div>

          {/* Land & Property Documentation */}
          <div className="legal-docs-col">
            <h3 className="legal-docs-col-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#683515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Land &amp; Property Documentation
            </h3>
            <ul className="legal-list">
              <li>Parent Documents</li>
              <li>Sale Deeds and Title Documents</li>
              <li>Encumbrance Certificate (EC)</li>
              <li>Land Ownership Records</li>
              <li>Patta and Chitta, where applicable</li>
              <li>Survey and Land Records</li>
            </ul>
          </div>

          {/* Project Approvals */}
          <div className="legal-docs-col">
            <h3 className="legal-docs-col-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#683515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Project Approvals
            </h3>
            <ul className="legal-list">
              <li>DTCP Approval, where applicable</li>
              <li>CMDA Approval, where applicable</li>
              <li>RERA Registration, where applicable</li>
              <li>Approved Layout Plans</li>
              <li>Building Plan Approval</li>
              <li>Local Authority Permissions</li>
              <li>Environmental Clearances, where applicable</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">02</span>
          <h2 className="legal-section-title">Our Commitment</h2>
        </div>
        <p className="legal-text-p">
          At NIU GEN INDIA INFRAS, we aim to:
        </p>
        <ul className="legal-list">
          <li>Maintain transparency in project-related information.</li>
          <li>Provide relevant documentation for customer verification.</li>
          <li>Follow applicable government regulations.</li>
          <li>Communicate project approval details accurately.</li>
          <li>Assist customers with project-related documentation enquiries.</li>
        </ul>
      </div>

      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">03</span>
          <h2 className="legal-section-title">Important Information</h2>
        </div>
        <p className="legal-text-p">
          Legal approvals and statutory requirements may vary depending on the project, location, and type of development.
        </p>
        <p className="legal-text-p">
          Customers are encouraged to independently verify ownership documents, applicable approvals, project registrations, and other relevant legal records before making any property purchase or investment decision.
        </p>
        <div className="legal-callout-warning">
          <div className="callout-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <div className="callout-text">
            <h5>Verification Notice</h5>
            <p>The availability of any particular approval is project-specific and should not be assumed unless supported by valid documentation provided for that respective site.</p>
          </div>
        </div>
      </div>

      <div className="legal-section-block">
        <div className="legal-section-header">
          <span className="legal-num-badge">04</span>
          <h2 className="legal-section-title">Request Legal Documents</h2>
        </div>
        <p className="legal-text-p">
          For project-specific legal documentation and approval enquiries, please contact our team.
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

export default LegalApprovals;

