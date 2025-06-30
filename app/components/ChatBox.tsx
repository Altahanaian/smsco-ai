'use client';
import { useState } from 'react';

export default function ChatBox() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  const isArabic =
    typeof window !== 'undefined' &&
    window?.navigator?.language?.startsWith('ar');

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', content: input }]);
    setLoading(true);
    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const reply =
        data.choices?.[0]?.message?.content ||
        '❗ لم يتمكن الذكاء الاصطناعي من الرد.';
      setMessages([
        ...messages,
        { role: 'user', content: input },
        { role: 'assistant', content: reply },
      ]);
    } catch (err) {
      setMessages([
        ...messages,
        { role: 'user', content: input },
        {
          role: 'assistant',
          content: '❌ حدث خطأ أثناء الاتصال بالذكاء الاصطناعي.',
        },
      ]);
    }
    setInput('');
    setLoading(false);
  };

  return (
    <div
      style={{ direction: isArabic ? 'rtl' : 'ltr' }}
      className="max-w-xl mx-auto p-4 border rounded shadow bg-white"
    >
      <h2 className="text-xl font-bold mb-2">
        {isArabic ? 'مساعد سمسكو الذكي' : 'SMSCO AI Assistant'}
      </h2>
      <div className="h-60 overflow-y-auto border p-2 mb-2 rounded">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-1 ${
              msg.role === 'user'
                ? 'text-right font-semibold'
                : 'text-left text-gray-700'
            }`}
          >
            <span>{msg.content}</span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-1 border p-2 rounded-l"
          placeholder={isArabic ? 'اكتب رسالتك...' : 'Type your message...'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 rounded-r"
          disabled={loading}
        >
          {loading
            ? isArabic
              ? '...انتظر'
              : '...Loading'
            : isArabic
            ? 'إرسال'
            : 'Send'}
        </button>
      </div>
    </div>
  );
}
