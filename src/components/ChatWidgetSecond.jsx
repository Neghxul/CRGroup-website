import React, { useState } from 'react';
import '../styles/ChatWidgetSecond.scss';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos
    console.log({ name, email, phone, description });
    alert('Gracias por contactarnos, nos pondremos en contacto contigo pronto.');
  };

  return (
    <div className={`chat-container ${isOpen ? 'open' : ''}`}>
      <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar Chat' : 'Abrir Chat'}
      </button>
      {isOpen && (
        <div className="chat-window">
          <h2>Chat de Ayuda</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Correo:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Teléfono:</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Descripción:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;