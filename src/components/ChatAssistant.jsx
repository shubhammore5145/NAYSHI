import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import styles from './ChatAssistant.module.css';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm NAYSHI AI. How can I help you with your next technology project?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMsg = input.trim();
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { text: "Thanks for reaching out! A specialist will be with you shortly. For immediate assistance, feel free to use the WhatsApp button or start a project via our Contact page.", sender: 'ai' }
      ]);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.header}>
            <div className={styles.titleArea}>
              <div className={styles.aiAvatar}>AI</div>
              <div>
                <h3>NAYSHI AI</h3>
                <span>Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
              <X size={18} />
            </button>
          </div>
          
          <div className={styles.messagesArea}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`${styles.message} ${styles[msg.sender]}`}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSend} className={styles.inputArea}>
            <input 
              type="text" 
              placeholder="Ask about our services..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      <button 
        className={styles.toggleBtn} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle NAYSHI AI Assistant"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default ChatAssistant;
