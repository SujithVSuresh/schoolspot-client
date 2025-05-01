export interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
  }
  
  export interface Conversation {
    id: string;
    title: string;
    lastMessage: string;
    lastUpdated: Date;
    messages: Message[];
  }



  import { useState, useRef, useEffect } from 'react';


const Chat = () => {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: '1',
      title: 'Getting started',
      lastMessage: 'Hello! How can I help you today?',
      lastUpdated: new Date(),
      messages: [
        {
          id: 1,
          text: 'Hello! How can I help you today?',
          sender: 'bot',
          timestamp: new Date(),
        },
      ],
    },
  ]);
  
  const [activeConversation, setActiveConversation] = useState<string>('1');
  const [inputValue, setInputValue] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getActiveConversation = () => {
    return conversations.find(c => c.id === activeConversation) || conversations[0];
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const updatedConversations = conversations.map(conv => {
      if (conv.id === activeConversation) {
        const newUserMessage: Message = {
          id: conv.messages.length + 1,
          text: inputValue,
          sender: 'user',
          timestamp: new Date(),
        };
        
        const updatedMessages = [...conv.messages, newUserMessage];
        
        return {
          ...conv,
          messages: updatedMessages,
          lastMessage: inputValue,
          lastUpdated: new Date(),
        };
      }
      return conv;
    });

    setConversations(updatedConversations);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: getActiveConversation().messages.length + 2,
        text: `I received: "${inputValue}". This is a simulated response.`,
        sender: 'bot',
        timestamp: new Date(),
      };

      setConversations(prev => prev.map(conv => {
        if (conv.id === activeConversation) {
          return {
            ...conv,
            messages: [...conv.messages, botResponse],
            lastMessage: botResponse.text,
            lastUpdated: new Date(),
          };
        }
        return conv;
      }));
    }, 1000);
  };

  const handleNewConversation = () => {
    const newId = (conversations.length + 1).toString();
    const newConversation: Conversation = {
      id: newId,
      title: `Conversation ${newId}`,
      lastMessage: '',
      lastUpdated: new Date(),
      messages: [],
    };
    
    setConversations([...conversations, newConversation]);
    setActiveConversation(newId);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversations, activeConversation]);

  return (
    <div className="flex h-screen mt-5 bg-gray-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} bg-gray-800 text-white transition-all duration-300 overflow-hidden`}>
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Conversations</h2>
          <button
            onClick={handleNewConversation}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            New Chat
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-120px)]">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setActiveConversation(conv.id)}
              className={`p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700 ${
                activeConversation === conv.id ? 'bg-gray-700' : ''
              }`}
            >
              <h3 className="font-medium truncate">{conv.title}</h3>
              <p className="text-sm text-gray-400 truncate">{conv.lastMessage}</p>
              <p className="text-xs text-gray-500">
                {conv.lastUpdated.toLocaleTimeString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Header with sidebar toggle */}
        <div className="bg-blue-600 text-white p-4 shadow-md flex items-center">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="mr-4 p-1 rounded hover:bg-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* <h1 className="text-xl font-bold">Chat App</h1> */}
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {getActiveConversation().messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white rounded-br-none'
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                }`}
              >
                <div>{message.text}</div>
                <div className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-gray-300 p-4 bg-white">
          <div className="flex space-x-2">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={1}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;