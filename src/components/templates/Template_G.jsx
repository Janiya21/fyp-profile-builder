import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, Code, Cpu, Wifi, Lock, Unlock, Eye, Zap, Globe, Server, Database } from 'lucide-react';

export default function TemplateG(props) {
  const [matrixRain, setMatrixRain] = useState([]);
  const [glitchText, setGlitchText] = useState('ALEX_CIPHER');
  const canvasRef = useRef(null);

  // Hacker profile data
  const hackerData = {
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    codename: "ALEX_CIPHER",
    realName: "Alexander Chen",
    title: "Senior Cybersecurity Specialist",
    specialization: "Penetration Testing & Red Team Operations",
    location: "Unknown Location",
    status: "ONLINE",
    clearanceLevel: "CLASSIFIED",
    email: "alex.cipher@protonmail.com",
    phone: "+1 (555) ENCRYPTED",
    bio: "Elite cybersecurity specialist with 8+ years of experience in offensive security operations. Expert in penetration testing, red team exercises, and advanced persistent threat simulation. Dedicated to protecting digital infrastructure through ethical hacking methodologies.",
    skills: [
      { name: "Penetration Testing", level: 95, icon: "🔓" },
      { name: "Network Security", level: 92, icon: "🌐" },
      { name: "Reverse Engineering", level: 88, icon: "🔍" },
      { name: "Social Engineering", level: 85, icon: "🎭" },
      { name: "Cryptography", level: 90, icon: "🔐" },
      { name: "Malware Analysis", level: 87, icon: "🦠" }
    ],
    tools: [
      "Kali Linux", "Metasploit", "Burp Suite", "Wireshark", "Nmap", 
      "John the Ripper", "Aircrack-ng", "OWASP ZAP", "Cobalt Strike", "Ghidra"
    ],
    achievements: [
      { title: "CVE Discoveries", count: "12", icon: "🏆" },
      { title: "Bug Bounties", count: "$50K+", icon: "💰" },
      { title: "CTF Wins", count: "25", icon: "🚩" },
      { title: "Zero Days", count: "5", icon: "⚡" }
    ],
    experience: [
      {
        role: "Senior Red Team Lead",
        company: "CyberDefense Corp",
        period: "2021-Present",
        description: "Leading advanced persistent threat simulations and coordinating red team operations against Fortune 500 companies.",
        exploits: ["Compromised 15+ enterprise networks", "Discovered critical infrastructure vulnerabilities", "Trained 20+ junior pentesters"]
      },
      {
        role: "Penetration Tester",
        company: "SecureAudit LLC", 
        period: "2018-2021",
        description: "Conducted comprehensive security assessments for web applications, networks, and mobile platforms.",
        exploits: ["Performed 200+ penetration tests", "Identified 500+ security vulnerabilities", "Achieved 98% client satisfaction rate"]
      }
    ],
    certifications: [
      { name: "OSCP", fullName: "Offensive Security Certified Professional", year: "2019" },
      { name: "CISSP", fullName: "Certified Information Systems Security Professional", year: "2020" },
      { name: "CEH", fullName: "Certified Ethical Hacker", year: "2018" },
      { name: "GPEN", fullName: "GIAC Penetration Tester", year: "2021" }
    ]
  };

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff41';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  // Glitch text effect
  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const originalText = "ALEX_CIPHER";
    
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.9) {
        let glitched = "";
        for (let i = 0; i < originalText.length; i++) {
          if (Math.random() > 0.8) {
            glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
          } else {
            glitched += originalText[i];
          }
        }
        setGlitchText(glitched);
        
        setTimeout(() => setGlitchText(originalText), 100);
      }
    }, 200);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 overflow-hidden relative">
      {/* Matrix Rain Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Scanlines Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-10" style={{ zIndex: 2 }}>
        <div className="h-full w-full bg-gradient-to-b from-transparent via-green-500 to-transparent animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        
        {/* Header Terminal */}
        <div className="bg-gray-900/90 border border-green-500/30 rounded-lg mb-8 backdrop-blur-sm">
          <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-green-500/30">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <span className="ml-4 text-green-400 font-mono text-sm">root@darknet:~$ whoami</span>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* 3D Profile Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-green-500/20 rounded-lg blur-xl group-hover:bg-green-500/40 transition-all duration-300 animate-pulse"></div>
                <div className="relative perspective-1000">
                  <div className="w-40 h-40 transform hover:rotateY-12 hover:rotateX-6 transition-transform duration-500 hover:scale-110">
                    <img
                      src={hackerData.photoUrl}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-lg border-2 border-green-500/50 shadow-2xl shadow-green-500/20"
                      style={{
                        filter: 'grayscale(70%) contrast(120%) brightness(90%)',
                        boxShadow: '0 0 30px rgba(0, 255, 65, 0.3)'
                      }}
                    />
                    {/* Holographic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-cyan-500/20 rounded-lg animate-pulse"></div>
                  </div>
                </div>
                
                {/* Status Indicator */}
                <div className="absolute -bottom-2 -right-2 bg-gray-900 border border-green-500 rounded-full px-3 py-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                    <span className="text-xs font-mono">{hackerData.status}</span>
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 space-y-4">
                <div>
                  <h1 className="text-4xl lg:text-6xl font-mono font-bold text-green-400 mb-2 tracking-wider">
                    {glitchText}
                  </h1>
                  <p className="text-xl text-gray-300 font-mono">[{hackerData.realName}]</p>
                  <p className="text-lg text-cyan-400">{hackerData.title}</p>
                  <p className="text-md text-gray-400">{hackerData.specialization}</p>
                </div>

                {/* System Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-red-500" />
                    <span>LOCATION: {hackerData.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-yellow-500" />
                    <span>CLEARANCE: {hackerData.clearanceLevel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-green-500" />
                    <span>CONTACT: {hackerData.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-blue-500" />
                    <span>SECURE_LINE: {hackerData.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="bg-gray-900/90 border border-green-500/30 rounded-lg mb-8 backdrop-blur-sm">
          <div className="bg-gray-800 px-4 py-2 border-b border-green-500/30">
            <span className="text-green-400 font-mono text-sm">$ cat profile.txt</span>
          </div>
          <div className="p-6">
            <p className="text-gray-300 leading-relaxed font-mono text-sm">
              {hackerData.bio}
            </p>
          </div>
        </div>

        {/* Skills & Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Skills */}
          <div className="bg-gray-900/90 border border-green-500/30 rounded-lg backdrop-blur-sm">
            <div className="bg-gray-800 px-4 py-2 border-b border-green-500/30">
              <span className="text-green-400 font-mono text-sm">$ ls -la skills/</span>
            </div>
            <div className="p-6 space-y-4">
              {hackerData.skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-400 font-mono text-sm flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-green-400 font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out animate-pulse"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gray-900/90 border border-green-500/30 rounded-lg backdrop-blur-sm">
            <div className="bg-gray-800 px-4 py-2 border-b border-green-500/30">
              <span className="text-green-400 font-mono text-sm">$ cat achievements.log</span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {hackerData.achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-green-500/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2 group-hover:animate-bounce">{achievement.icon}</div>
                      <div className="text-2xl font-mono font-bold text-green-400 mb-1">{achievement.count}</div>
                      <div className="text-xs text-gray-400 font-mono">{achievement.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tools Arsenal */}
        <div className="bg-gray-900/90 border border-green-500/30 rounded-lg mb-8 backdrop-blur-sm">
          <div className="bg-gray-800 px-4 py-2 border-b border-green-500/30">
            <span className="text-green-400 font-mono text-sm">$ find /usr/bin -name "*hack*" -type f</span>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {hackerData.tools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 border border-gray-700 rounded px-3 py-2 text-center hover:border-green-500/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group"
                >
                  <span className="text-cyan-400 font-mono text-sm group-hover:text-green-400">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="bg-gray-900/90 border border-green-500/30 rounded-lg mb-8 backdrop-blur-sm">
          <div className="bg-gray-800 px-4 py-2 border-b border-green-500/30">
            <span className="text-green-400 font-mono text-sm">$ history | grep -E "(hack|exploit|pentest)"</span>
          </div>
          <div className="p-6 space-y-6">
            {hackerData.experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-green-500/30 pl-6 hover:border-green-500 transition-colors duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                  <h3 className="text-xl font-mono text-green-400">{exp.role}</h3>
                  <span className="text-cyan-400 font-mono text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-300 font-mono text-sm mb-2">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-3">{exp.description}</p>
                <div className="space-y-1">
                  {exp.exploits.map((exploit, exploitIndex) => (
                    <div key={exploitIndex} className="flex items-start gap-2">
                      <Zap className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm font-mono">{exploit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-900/90 border border-green-500/30 rounded-lg backdrop-blur-sm">
          <div className="bg-gray-800 px-4 py-2 border-b border-green-500/30">
            <span className="text-green-400 font-mono text-sm">$ ls -la certificates/</span>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hackerData.certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-green-500/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-green-400 font-mono font-bold text-lg">{cert.name}</h4>
                      <p className="text-gray-300 text-sm">{cert.fullName}</p>
                      <p className="text-cyan-400 font-mono text-sm">Obtained: {cert.year}</p>
                    </div>
                    <Shield className="w-8 h-8 text-yellow-500 group-hover:animate-spin" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <div className="inline-flex items-center gap-3 bg-gray-900/90 border border-green-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
            <Terminal className="w-5 h-5 text-green-400 animate-pulse" />
            <span className="text-green-400 font-mono text-sm">CONNECTION_SECURE • ENCRYPTION_ACTIVE</span>
            <Lock className="w-5 h-5 text-green-400 animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        .animate-glitch {
          animation: glitch 0.3s infinite;
        }
      `}</style>
    </div>
  );
}