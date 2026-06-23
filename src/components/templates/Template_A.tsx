"use client";

import React from "react";

export default function TemplateA(props: any) {
  return (
    <div className="pdf-container">
      <div className="pdf-page">
        {/* Header Section */}
        <div className="header-section">
          <div className="header-content">
            <div className="header-left">
              <div className="name-title">
                <h1 className="main-name">{props.name}</h1>
                <div className="name-underline"></div>
              </div>
              <p className="occupation">{props.occupation}</p>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon location-icon">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="contact-text">{props.address}</span>
              </div>

              <div className="contact-item">
                <div className="contact-icon phone-icon">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="contact-text">{props.telephoneNo}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* About Section */}
          <section className="section about-section">
            <div className="section-header">
              <h2 className="section-title">About Me</h2>
              <div className="section-line"></div>
            </div>
            <div className="about-content">
              <div className="accent-line"></div>
              <p className="about-text">{props.description}</p>
            </div>
          </section>

          {/* Experience Section */}
          <section className="section experience-section">
            <div className="section-header">
              <h2 className="section-title">Experience</h2>
              <div className="section-line"></div>
            </div>

            <div className="experience-list">
              {props.experience?.map((exp: any, index: number) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <div className="experience-left">
                      <h3 className="experience-title">{exp.title}</h3>
                      <div className="experience-company">
                        <div className="company-dot"></div>
                        <p className="company-name">{exp.company}</p>
                      </div>
                    </div>
                    <div className="experience-years">
                      <span className="years-text">{exp.years}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="footer-section">
          <div className="footer-divider">
            <div className="divider-line"></div>
            <div className="divider-dot"></div>
            <div className="divider-line"></div>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} {props.name}. <span className="footer-highlight">All rights reserved.</span>
          </p>
          <div className="footer-badge">
            <span className="badge-text">✨ Crafted with passion</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* PDF Container - A4 optimized */
        .pdf-container {
          width: 210mm;
          min-height: 297mm;
          margin: 0 auto;
          background: linear-gradient(135deg, #f5f7fa 0%, #e3f2fd 100%);
          padding: 10mm;
          box-sizing: border-box;
        }

        .pdf-page {
          background: white;
          width: 100%;
          min-height: 277mm;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        /* Header Section */
        .header-section {
          background: linear-gradient(135deg, #1e293b 0%, #7e22ce 50%, #3730a3 100%);
          padding: 25mm 20mm;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .header-content {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 15mm;
        }

        .header-left {
          flex: 1;
        }

        .name-title {
          margin-bottom: 8mm;
        }

        .main-name {
          font-size: 38pt;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
          background: linear-gradient(to right, #ffffff, #e9d5ff, #bfdbfe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .name-underline {
          width: 24mm;
          height: 1mm;
          background: linear-gradient(to right, #a78bfa, #60a5fa);
          border-radius: 2mm;
          margin-top: 2mm;
        }

        .occupation {
          font-size: 16pt;
          color: #e9d5ff;
          margin: 0;
          font-weight: 500;
        }

        /* Contact Info */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 4mm;
          min-width: 60mm;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 3mm;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 3mm 4mm;
          border-radius: 3mm;
        }

        .contact-icon {
          padding: 2mm;
          border-radius: 2mm;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .location-icon {
          background: rgba(168, 85, 247, 0.3);
        }

        .phone-icon {
          background: rgba(59, 130, 246, 0.3);
        }

        .icon {
          width: 5mm;
          height: 5mm;
          color: #e9d5ff;
        }

        .contact-text {
          color: #e9d5ff;
          font-size: 11pt;
          font-weight: 500;
        }

        /* Main Content */
        .main-content {
          padding: 15mm 20mm;
        }

        .section {
          margin-bottom: 12mm;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 4mm;
          margin-bottom: 6mm;
        }

        .section-title {
          font-size: 24pt;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
          white-space: nowrap;
        }

        .section-line {
          flex: 1;
          height: 0.3mm;
          background: linear-gradient(to right, #a78bfa, transparent);
        }

        /* About Section */
        .about-content {
          position: relative;
          padding-left: 6mm;
        }

        .accent-line {
          position: absolute;
          left: 0;
          top: 0;
          width: 1mm;
          height: 100%;
          background: linear-gradient(to bottom, #a78bfa, #60a5fa);
          border-radius: 1mm;
          opacity: 0.5;
        }

        .about-text {
          font-size: 12pt;
          line-height: 1.8;
          color: #334155;
          margin: 0;
        }

        /* Experience Section */
        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 5mm;
        }

        .experience-item {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border: 0.3mm solid #e2e8f0;
          border-radius: 4mm;
          padding: 5mm 6mm;
          box-shadow: 0 1mm 4mm rgba(0, 0, 0, 0.05);
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 5mm;
        }

        .experience-left {
          flex: 1;
        }

        .experience-title {
          font-size: 14pt;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 2mm 0;
        }

        .experience-company {
          display: flex;
          align-items: center;
          gap: 2mm;
        }

        .company-dot {
          width: 2mm;
          height: 2mm;
          background: linear-gradient(to right, #6366f1, #8b5cf6);
          border-radius: 50%;
        }

        .company-name {
          font-size: 12pt;
          color: #475569;
          font-weight: 500;
          margin: 0;
        }

        .experience-years {
          background: linear-gradient(to right, #eef2ff, #f3e8ff);
          padding: 2mm 4mm;
          border-radius: 2mm;
          white-space: nowrap;
        }

        .years-text {
          font-size: 10pt;
          color: #6366f1;
          font-weight: 600;
        }

        /* Footer Section */
        .footer-section {
          background: linear-gradient(to right, #1e293b, #334155, #1e293b);
          padding: 8mm 20mm;
          text-align: center;
          border-top: 0.3mm solid rgba(226, 232, 240, 0.3);
        }

        .footer-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2mm;
          margin-bottom: 4mm;
        }

        .divider-line {
          width: 8mm;
          height: 0.3mm;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5), transparent);
        }

        .divider-dot {
          width: 2mm;
          height: 2mm;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
        }

        .footer-text {
          color: #cbd5e1;
          font-size: 10pt;
          margin: 0 0 4mm 0;
        }

        .footer-highlight {
          background: linear-gradient(to right, #a78bfa, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 2mm 6mm;
          border-radius: 3mm;
          border: 0.3mm solid rgba(255, 255, 255, 0.2);
        }

        .badge-text {
          color: rgba(255, 255, 255, 0.7);
          font-size: 9pt;
        }

        /* Print-specific styles */
        @media print {
          .pdf-container {
            width: 210mm;
            height: 297mm;
            margin: 0;
            padding: 0;
            background: white;
          }

          .pdf-page {
            box-shadow: none;
          }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
        }

        /* Screen-only styles */
        @media screen {
          .pdf-container {
            margin: 20px auto;
          }
        }
      `}</style>
    </div>
  );
}