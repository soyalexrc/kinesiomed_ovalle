'use client';
import {useEffect, useRef, useState} from "react";
import './message-animation.css';
import { useSearchParams } from "next/navigation";

export default function Chat() {
    const [chatOpen, setChatOpen] = useState(false)
    const [bubbleHover, setBubbleHover] = useState(false)
    const [messages, setMessages] = useState<{ from: 'user' | 'bot'; text: string }[]>([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [sessionId, setSessionId] = useState<string | null>(null)
    const messagesEndRef = useRef<HTMLDivElement | null>(null)
      // Use the useSearchParams hook to get URL parameters
    const searchParams = useSearchParams();
    const showExperimental = searchParams.get('experimental') === 'true';
    

    useEffect(() => {
        const chat_session_id = localStorage.getItem('km_chat_session_id');
    
        if (chat_session_id) {
            setSessionId(chat_session_id);
            console.log('Chat session restored:', chat_session_id);
        } 

        return () => {
            console.log('Chat component unmounted');
        }
    }, [])

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages, chatOpen])

    function parseChatMessage(raw: string): {
  text: string;
  options?: string[];
} {
  // Match JSON object inside the message
  const jsonMatch = raw.match(/({[\s\S]*})/);

  if (!jsonMatch) {
    // No JSON found — return plain text
    return { text: raw.trim() };
  }

  const jsonText = jsonMatch[1];
  const messageText = raw.replace(jsonText, '').trim();

  try {
    const parsed = JSON.parse(jsonText);
    if (
      parsed.type === 'servicio' &&
      Array.isArray(parsed.options) &&
      parsed.options.every((opt: any) => typeof opt === 'string')
    ) {
      return {
        text: messageText,
        options: parsed.options,
      };
    } else {
      // JSON is not in expected format
      return { text: raw.trim() };
    }
  } catch (err) {
    // JSON parsing failed
    return { text: raw.trim() };
  }
}


    const handleSend = async (e?: React.FormEvent) => {
        if (e) e.preventDefault()
        if (!input.trim() || loading) return

        const userMessage = input.trim()
        setMessages((msgs) => [...msgs, { from: 'user', text: userMessage }])
        setInput('')
        setLoading(true)

        // Simulate bot response based on user input
        const payload = {
            message: userMessage,
            sessionId
        }

        const raw = await fetch('https://test-bot-ai.alexcarvajal2404.workers.dev/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        const data = await raw.json()
        setLoading(false)
        if (data.error) {
            console.error('Error from bot:', data.error);
            setMessages((msgs) => [...msgs, { from: 'bot', text: 'Lo siento, ocurrió un error al procesar tu mensaje.' }]);
            return;
        }
        const botMessage = data.response || 'Lo siento, no pude entender tu mensaje.'
        setMessages((msgs) => [...msgs, { from: 'bot', text: parseChatMessage(botMessage).text }])
        setSessionId(data.sessionId || null);
        if (data.sessionId) {
            localStorage.setItem('km_chat_session_id', data.sessionId);
            console.log('New session ID saved:', data.sessionId);
        }
        console.log('Bot response:', botMessage);
    }

    if (!showExperimental) return null;

    return (
        <>
            {/* Floating Chat Bubble */}
            <div
                className={`fixed bottom-24 right-5 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-lg cursor-pointer transition-all duration-300 bg-blue-600 hover:bg-blue-700 ${bubbleHover ? 'scale-110' : ''}`}
                onMouseEnter={() => setBubbleHover(true)}
                onMouseLeave={() => setBubbleHover(false)}
                onClick={() => setChatOpen(true)}
                title="Open chat"
            >
                <span className="text-white text-3xl">💬</span>
            </div>

            {/* Chat Interface */}
            {chatOpen && (
                <div className="fixed bottom-28 right-8 z-50 w-96 h-[480px] bg-white rounded-lg shadow-2xl flex flex-col border border-gray-200 animate-fade-in">
                    <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-blue-600 text-white rounded-t-lg">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🤖</span>
                            <div>
                                <h3 className="font-bold text-sm">Asistente KinesioMed</h3>
                                <p className="text-xs text-blue-100">En linea</p>
                            </div>
                        </div>
                        <button
                            className="text-white hover:bg-blue-700 hover:text-white p-1.5 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                            onClick={() => setChatOpen(false)}
                            aria-label="Close chat"
                        >
                            ×
                        </button>
                    </div>
                    <div style={{ padding: '.5rem' }} className="flex-1 p-4 overflow-y-auto text-gray-700 space-y-3 bg-gray-50">
                        {messages.length === 0 && !loading && (
                            <div className="flex flex-col items-center justify-center h-full gap-3">
                                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                                    <span className="text-3xl">👋</span>
                                </div>
                                <p className="text-center text-gray-500">En kinesiomed, estamos comprometidos con tu bienestar.</p>
                                <p className="text-center text-gray-400 text-sm">En breve te atenderemos...</p>
                            </div>
                        )}
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'} message-animation`}>
                                {msg.from === 'bot' && (
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 flex-shrink-0">
                                        <span className="text-sm">🤖</span>
                                    </div>
                                )}
                                <div style={{ padding: '.5rem .7rem', margin: msg.from === 'user' ? '0 .5rem .8rem 0' : '0 0 .8rem .5rem' }} className={`rounded-xl max-w-[75%] text-left ${msg.from === 'user' ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200 text-gray-800 '} shadow-sm`}>
                                    {msg.text}
                                </div>
                                {msg.from === 'user' && (
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center ml-2 text-white flex-shrink-0">
                                        <span className="text-sm">👤</span>
                                    </div>
                                )}
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start message-animation">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 flex-shrink-0">
                                    <span className="text-sm">🤖</span>
                                </div>
                                <div className="px-4 py-3 rounded-2xl bg-white border border-gray-200 shadow-sm">
                                    <div className="flex items-center h-5">
                                        <span className="typing-dot"></span>
                                        <span className="typing-dot"></span>
                                        <span className="typing-dot"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <form className="p-3 border-t border-gray-200 flex gap-2 bg-white rounded-b-lg" onSubmit={handleSend}>
                        <input
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700"
                            type="text"
                            placeholder="Escribe un mensaje..."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            disabled={loading}
                            autoFocus
                        />
                        <button
                            type="submit"
                            className={`p-3 w-[50px] h-[50px] flex justify-center items-center rounded-full transition-all ${loading || !input.trim() ? 'bg-gray-200 text-gray-400' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                            disabled={loading || !input.trim()}
                            aria-label="Send message"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}
