import React, { useState } from "react";
import "../styles/ChatWidget.scss";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hola, ¿en qué puedo ayudarte?" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage = { sender: "user", text: inputValue };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputValue("");

      // Respuesta automática simulada
      setTimeout(() => {
        let botResponse = "No entendí tu pregunta.";
        if (inputValue.includes("hola")) botResponse = "¡Hola! ¿Cómo puedo ayudarte?";
        if (inputValue.includes("precio")) botResponse = "Nuestros precios dependen del producto. ¿Cuál te interesa?";
        const botMessage = { sender: "bot", text: botResponse };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }, 1000);
    }
  };

  return (
    <div className="chat-widget">
      {/* Esfera de chat */}
      {!isOpen && (
        <div className="chat-bubble" onClick={toggleChat}>
          💬
        </div>
      )}

      {/* Ventana del chat */}
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header" onClick={toggleChat}>
            <span>Chat de Ayuda</span>
            <button className="close-button">✕</button>
          </div>
          <div className="chat-body">
            <div className="messages">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
          </div>
          <div className="chat-input">
              <input
                type="text"
                placeholder="Escribe tu mensaje..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button onClick={handleSendMessage}>Enviar</button>
            </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
