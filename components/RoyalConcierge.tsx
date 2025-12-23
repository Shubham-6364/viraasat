
import React, { useState, useRef, useEffect } from 'react';
import { getConciergeResponse } from '../services/gemini';
import { Message } from '../types';

const RoyalConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welcome to Viraasat Gems & Jewels. I am the Royal Concierge. How may I assist you with our Jaipur heritage collection today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getConciergeResponse(userMsg, history);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 gold-bg rounded-full shadow-[0_10px_40px_rgba(191,149,63,0.5)] flex items-center justify-center group hover:scale-110 transition-all duration-300"
      >
        {isOpen ? (
          <span className="text-[#011612] text-2xl">✕</span>
        ) : (
          <svg className="w-8 h-8 text-[#011612]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[550px] bg-[#02231c] border border-[#bf953f] shadow-2xl rounded-sm flex flex-col animate-fadeIn">
          {/* Header */}
          <div className="p-6 border-b border-[#bf953f]/30 bg-[#011612]">
            <h3 className="font-serif text-[#bf953f] text-xl">Royal Concierge</h3>
            <p className="text-[10px] uppercase tracking-widest text-white/50">At your service</p>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-sm font-light leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-[#bf953f] text-[#011612] rounded-tl-xl rounded-bl-xl rounded-br-xl' 
                  : 'bg-[#011612] text-white/90 border border-[#bf953f]/20 rounded-tr-xl rounded-br-xl rounded-bl-xl'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#011612] p-4 rounded-xl border border-[#bf953f]/20">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-[#bf953f] rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-[#bf953f] rounded-full animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-[#bf953f] rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#bf953f]/30 bg-[#011612]">
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about a design or booking..."
                className="flex-1 bg-transparent border-none text-white text-sm focus:ring-0 placeholder:text-white/20"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="text-[#bf953f] hover:scale-110 transition-transform disabled:opacity-50"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoyalConcierge;
