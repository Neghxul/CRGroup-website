import React, { useState } from "react";
import "../styles/QuoteRequestForm.scss";

const QuoteRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    part: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!formData.name || !formData.email || !formData.phone || !formData.part) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    console.log("Datos enviados:", formData);
    setSubmitted(true);

    // Aquí podrías enviar los datos a una API o correo
  };

  return (
    <div className="form-container">
      {!submitted ? (
        <form className="quote-form" onSubmit={handleSubmit}>
          <h2>Solicitud de Cotización</h2>
          <div className="form-group">
            <label htmlFor="name">Nombre *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Escribe tu nombre"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Compañía</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nombre de la compañía"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Teléfono *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Número telefónico"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="part">Parte Solicitada *</label>
            <textarea
              id="part"
              name="part"
              value={formData.part}
              onChange={handleChange}
              placeholder="Describe la parte o el servicio que necesitas"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Enviar Solicitud
          </button>
        </form>
      ) : (
        <div className="thank-you-message">
          <h2>¡Gracias por tu solicitud!</h2>
          <p>Nos pondremos en contacto contigo pronto.</p>
        </div>
      )}
    </div>
  );
};

export default QuoteRequestForm;
