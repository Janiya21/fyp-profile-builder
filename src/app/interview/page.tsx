// app/interview/page.tsx
'use client';
import { motion } from 'framer-motion';
import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Three.js components to avoid SSR issues
// const Scene = dynamic(() => import('@/components/Scene'), { 
//   ssr: false,
//   loading: () => (
//     <div className="h-64 flex items-center justify-center">
//       <div className="w-32 h-32 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
//     </div>
//   )
// });

export default function InterviewPractice() {
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to your AI interview practice! This feature is coming soon.", sender: 'ai' },
  ]);

  const handleSendMessage = () => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: Date.now(), text: "I'm still under development, but soon I'll help you practice technical interviews!", sender: 'ai' }
      ]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* 3D Header with Suspense */}
      {/* <div className="h-64 relative overflow-hidden">
        <Suspense fallback={
          <div className="h-full flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
          </div>
        }>
          <Scene />
        </Suspense>
      </div> */}

      <motion.div 
        className="bg-yellow-500/20 border-l-4 border-yellow-500 text-yellow-200 p-4 mx-4 mb-8 rounded-r-lg"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
          <span className="font-medium">Feature Under Construction</span>
        </div>
        <p className="mt-1 text-sm">We're building an advanced interview practice with AI integration</p>
      </motion.div>

      {/* Preview Chat Interface */}
      <motion.div 
        className="max-w-3xl mx-4 md:mx-auto bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="p-4 border-b border-gray-700 flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-sm font-mono">interview-simulator.js</span>
        </div>
        
        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              className={`flex ${message.sender === 'ai' ? 'justify-start' : 'justify-end'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className={`max-w-xs md:max-w-md rounded-lg p-3 ${message.sender === 'ai' ? 'bg-gray-700' : 'bg-purple-600'}`}>
                {message.text}
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="bg-gray-700 rounded-lg p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Input Area */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Ask me interview questions..."
              className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              disabled
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSendMessage}
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-lg disabled:opacity-50"
              disabled
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </motion.button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Coming soon: Integration with DeepSeek/ChatGPT for realistic interview simulations
          </p>
        </div>
      </motion.div>

      {/* Feature Preview Cards */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 pb-16">
        {[
          {
            title: "Technical Interviews",
            desc: "Practice coding challenges with AI evaluation",
            icon: "💻",
            color: "from-blue-500 to-blue-600"
          },
          {
            title: "Behavioral Questions",
            desc: "Get feedback on STAR method responses",
            icon: "🧠",
            color: "from-purple-500 to-purple-600"
          },
          {
            title: "Real-time Feedback",
            desc: "Instant analysis of your answers",
            icon: "⚡",
            color: "from-amber-500 to-amber-600"
          }
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-r ${feature.color} opacity-20`}></div>
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}