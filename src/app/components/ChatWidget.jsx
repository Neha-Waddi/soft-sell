"use client"
import { useState } from 'react';

const responses = {
  'how do i sell my license?': 'You can sell your license by uploading details on our platform, and we’ll get you a quote instantly!',
  'what types of software can i sell?': 'We accept OS, productivity suites, and many business applications.',
};

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    const lower = input.toLowerCase();
    const reply = responses[lower] || 'Sorry, I am not sure how to help with that.';
    setMessages([...messages, { text: input, fromUser: true }, { text: reply, fromUser: false }]);
    setInput('');
  };

  return (
    <div className="fixed bottom-5 right-5 w-72 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-cyan-600 text-white p-3 font-bold">SoftSell Assistant</div>
      <div className="p-3 h-60 overflow-y-auto space-y-2 text-sm">
        {messages.map((m, i) => (
          <div key={i} className={m.fromUser ? 'text-right text-cyan-600' : 'text-left text-gray-700'}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex border-t">
        <input
          className="flex-1 p-2 text-sm"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-cyan-600 text-white px-4" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
