import React, { useState } from "react";
import "../styles/ChatBot.scss";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatLog, setChatLog] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [userResponses, setUserResponses] = useState({});

  const questions = [
    "¡Hola! ¿Cómo te llamas?",
    "¿Cuál es el nombre de tu compañía?",
    "¿Cuál es tu correo electrónico?",
    "¿Cuál es tu número de teléfono?",
    "¿Qué parte o servicio necesitas cotizar?",
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleUserResponse = (response) => {
    // Guardar la respuesta del usuario
    setUserResponses({ ...userResponses, [currentStep]: response });

    // Agregar la pregunta y respuesta al chat log
    setChatLog([
      ...chatLog,
      { sender: "bot", message: questions[currentStep] },
      { sender: "user", message: response },
    ]);

    // Ir al siguiente paso o finalizar
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Enviar los datos
      setChatLog((prevLog) => [
        ...prevLog,
        { sender: "bot", message: "¡Gracias! Hemos recibido tu solicitud. Nos pondremos en contacto contigo pronto." },
      ]);
      console.log("Datos del cliente:", userResponses);
    }
  };

  return (
    <div className="chatbot-container">
      {/* Botón para abrir/cerrar el chat */}
      <div className="chat-toggle" onClick={toggleChat}>
        💬
      </div>

      {/* Ventana del chat */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>Asistente Virtual</h4>
            <button onClick={toggleChat} className="close-btn">✖</button>
          </div>

          <div className="chat-body">
            {chatLog.map((entry, index) => (
              <div
                key={index}
                className={`chat-message ${entry.sender === "bot" ? "bot-message" : "user-message"}`}
              >
                {entry.message}
              </div>
            ))}

            {currentStep < questions.length && (
              <div className="chat-input">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const input = e.target.elements.response.value.trim();
                    if (input) {
                      handleUserResponse(input);
                      e.target.reset();
                    }
                  }}
                >
                  <input
                    type="text"
                    name="response"
                    placeholder="Escribe tu respuesta aquí..."
                    autoFocus
                    required
                  />
                  <button type="submit">Enviar</button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
