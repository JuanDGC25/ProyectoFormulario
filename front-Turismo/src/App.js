
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';
import './App.css';
import { jsPDF } from "jspdf";


function Factura() {
  const [idCliente, setIdCliente] = useState('');
  const [nombreCliente, setNombreCliente] = useState('');
  const [correoCliente, setCorreoCliente] = useState('');
  const [telefonoCliente, setTelefonoCliente] = useState('');
  const [direccionCliente, setDireccionCliente] = useState('');
  const [destino, setDestino] = useState('');
  const [duracion, setDuracion] = useState('');
  const [presupuesto, setPresupuesto] = useState('');
  const [alojamiento, setAlojamiento] = useState('');
  const [actividades, setActividades] = useState('');
  const [preferenciasAdicionales, setPreferenciasAdicionales] = useState('');

  useEffect(() => {
    // Simulación de llamada a la API
    const clienteData = {
      ClienteID: '123',
      Nombre: 'Nombre del Cliente',
      Correo: 'Correo Electrónico del Cliente',
      Telefono: 'Teléfono Cliente',
      Direccion: 'Dirección del Cliente',
    };
    const viajeData = {
      Destino: '¿A qué lugar te gustaría viajar?',
      Duracion: '¿Cuánto tiempo planeas estar de viaje?',
      Presupuesto: '¿Cuál es tu presupuesto aproximado para este viaje?',
      Alojamiento: '¿Qué tipo de alojamiento prefieres?',
      Actividades: '¿Qué actividades te gustaría realizar durante tu viaje?',
      PreferenciasAdicionales: 'Preferencias Adicionales',
    };

    setIdCliente(clienteData.ClienteID);
    setNombreCliente(clienteData.Nombre);
    setCorreoCliente(clienteData.Correo);
    setTelefonoCliente(clienteData.Telefono);
    setDireccionCliente(clienteData.Direccion);
    setDestino(viajeData.Destino);
    setDuracion(viajeData.Duracion);
    setPresupuesto(viajeData.Presupuesto);
    setAlojamiento(viajeData.Alojamiento);
    setActividades(viajeData.Actividades);
    setPreferenciasAdicionales(viajeData.PreferenciasAdicionales);
  }, []);

  const renderAdditionalQuestions = () => {
    switch (actividades) {
      case 'aventura':
        return (
          <>
            <label htmlFor="aventuraTipo">¿Qué tipo de actividades de aventura te interesan más?</label>
            <br />
            <select
              name="aventuraTipo"
              id="aventuraTipo"
              value={preferenciasAdicionales}
              onChange={(e) => setPreferenciasAdicionales(e.target.value)}
            >
              <option value="" disabled>
                Seleccione una opción
              </option>
              <option value="senderismo">Senderismo</option>
              <option value="esqui">Esquí</option>
              <option value="surf">Surf</option>
              <option value="buceo">Buceo</option>
            </select>
            <br />
            <br />
          </>
        );
      case 'cultural':
        return (
          <>
            <label htmlFor="culturalTipo">¿Qué tipo de lugares culturales te gustaría visitar?</label>
            <br />
            <select
              name="culturalTipo"
              id="culturalTipo"
              value={preferenciasAdicionales}
              onChange={(e) => setPreferenciasAdicionales(e.target.value)}
            >
              <option value="" disabled>
                Seleccione una opción
              </option>
              <option value="museos">Museos</option>
              <option value="historicos">Sitios históricos</option>
              <option value="galerias">Galerías de arte</option>
              <option value="eventos">Eventos culturales locales</option>
            </select>
            <br />
            <br />
          </>
        );
      case 'relax':
        return (
          <>
            <label htmlFor="playaTipo">¿Prefieres una playa tranquila o una concurrida?</label>
            <br />
            <select
              name="playaTipo"
              id="playaTipo"
              value={preferenciasAdicionales}
              onChange={(e) => setPreferenciasAdicionales(e.target.value)}
            >
              <option value="" disabled>
                Seleccione una opción
              </option>
              <option value="tranquila">Playa tranquila</option>
              <option value="concurrida">Playa concurrida</option>
            </select>
            <br />
            <br />
          </>
        );
      case 'gastronomia':
        return (
          <>
            <label htmlFor="cocinaTipo">¿Qué tipo de cocina te interesa más?</label>
            <br />
            <select
              name="cocinaTipo"
              id="cocinaTipo"
              value={preferenciasAdicionales}
              onChange={(e) => setPreferenciasAdicionales(e.target.value)}
            >
              <option value="" disabled>
                Seleccione una opción
              </option>
              <option value="local">Local/tradicional</option>
              <option value="internacional">Internacional</option>
              <option value="vegetariana">Vegetariana/vegana</option>
              <option value="alta">Alta cocina</option>
            </select>
            <br />
            <br />
          </>
        );
      default:
        return null;
    }
  };

  const generateDocument = async () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: 'Factura', bold: true, size: 24 }),
              ],
            }),
            new Paragraph({ text: `Numero Id: ${idCliente}` }),
            new Paragraph({ text: `Nombre Cliente: ${nombreCliente}` }),
            new Paragraph({ text: `Correo Electrónico: ${correoCliente}` }),
            new Paragraph({ text: `Teléfono: ${telefonoCliente}` }),
            new Paragraph({ text: `Dirección: ${direccionCliente}` }),
            new Paragraph({ text: `Destino Deseado: ${destino}` }),
            new Paragraph({ text: `Duración del Viaje: ${duracion}` }),
            new Paragraph({ text: `Presupuesto: ${presupuesto}` }),
            new Paragraph({ text: `Preferencias de Alojamiento: ${alojamiento}` }),
            new Paragraph({ text: `Actividades de Interés: ${actividades}` }),
            new Paragraph({ text: `Preferencias Adicionales: ${preferenciasAdicionales}` }),
            new Paragraph({ text: 'Descripción del Viaje:', heading: HeadingLevel.HEADING_1 }),
            new Paragraph({
              text: `Estimado/a ${nombreCliente},\n\n
              Nos complace informarle sobre su próximo viaje a ${destino}. 
              Este viaje tiene una duración de ${duracion}, 
              durante el cual disfrutará de ${actividades} y se alojará en un ${alojamiento}.
              Con un presupuesto de ${presupuesto}, 
              hemos preparado una experiencia única que incluye ${preferenciasAdicionales}.
              Esperamos que tenga un viaje inolvidable lleno de aventuras y recuerdos inolvidables.
              \n\n¡Buen viaje!\n\n
              Atentamente,\n
              Su Agencia de Viajes`
            }),
          ],
        },
      ],
    });
  
    const blob = await Packer.toBlob(doc);
    saveAs(blob, 'Factura.docx');
  };
  
  
  
  
  

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Factura", 20, 20);
    doc.text(`Numero Id: ${idCliente}`, 20, 30);
    doc.text(`Nombre Cliente: ${nombreCliente}`, 20, 40);
    doc.text(`Correo Electrónico: ${correoCliente}`, 20, 50);
    doc.text(`Teléfono: ${telefonoCliente}`, 20, 60);
    doc.text(`Dirección: ${direccionCliente}`, 20, 70);
    doc.text(`Destino Deseado: ${destino}`, 20, 80);
    doc.text(`Duración del Viaje: ${duracion}`, 20, 90);
    doc.text(`Presupuesto: ${presupuesto}`, 20, 100);
    doc.text(`Preferencias de Alojamiento: ${alojamiento}`, 20, 110);
    doc.text(`Actividades de Interés: ${actividades}`, 20, 120);
    doc.text(`Preferencias Adicionales: ${preferenciasAdicionales}`, 20, 130);
    doc.text("Descripción del Viaje:", 20, 140);
    doc.text(`Estimado/a ${nombreCliente},\n\n
      Nos complace informarle sobre su próximo viaje a ${destino}. 
      Este viaje tiene una duración de ${duracion}, 
      durante el cual disfrutará de ${actividades} y se alojará en un ${alojamiento}.
      Con un presupuesto de ${presupuesto}, 
      hemos preparado una experiencia única que incluye ${preferenciasAdicionales}.
      Esperamos que tenga un viaje inolvidable lleno de aventuras y recuerdos inolvidables.
      \n\n¡Buen viaje!\n\n
      Atentamente,\n
      Su Agencia de Viajes`, 20, 150);
    doc.save("Factura.pdf");
  };
  
  return (
    <div className="container">
      <h2>Factura</h2>
      <div className="factura-info">
        <label htmlFor="idCliente">Numero Id</label>
        <br />
        <input
          type="text"
          name="idCliente"
          id="idCliente"
          placeholder="idCliente"
          value={idCliente}
          onChange={(e) => setIdCliente(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="nombreCliente">Nombre Cliente</label>
        <br />
        <input
          type="text"
          name="nombreCliente"
          id="nombreCliente"
          placeholder="Nombre"
          value={nombreCliente}
          onChange={(e) => setNombreCliente(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="correoCliente">Correo Electrónico</label>
        <br />
        <input
          type="email"
          name="correoCliente"
          id="correoCliente"
          placeholder="Correo Electrónico"
          value={correoCliente}
          onChange={(e) => setCorreoCliente(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="telefonoCliente">Teléfono</label>
        <br />
        <input
          type="text"
          name="telefonoCliente"
          id="telefonoCliente"
          placeholder="Teléfono"
          value={telefonoCliente}
          onChange={(e) => setTelefonoCliente(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="direccionCliente">Dirección</label>
        <br />
        <input
          type="text"
          name="direccionCliente"
          id="direccionCliente"
          placeholder="Dirección"
          value={direccionCliente}
          onChange={(e) => setDireccionCliente(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="destino">Destino Deseado</label>
        <br />
        <input
          type="text"
          name="destino"
          id="destino"
          placeholder="Destino Deseado"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="duracion">Duración del Viaje</label>
        <br />
        <input
          type="text"
          name="duracion"
          id="duracion"
          placeholder="Duración del Viaje"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="presupuesto">Presupuesto</label>
        <br />
        <select
          name="presupuesto"
          id="presupuesto"
          value={presupuesto}
          onChange={(e) => setPresupuesto(e.target.value)}
        >
          <option value="" disabled selected>
            Presupuesto
          </option>
          <option value="bajo">Menos de $500.000</option>
          <option value="medio">Entre $500.000 y $1.000.000</option>
          <option value="alto">Más de $1.000.000</option>
        </select>
        <br />
        <br />
        <label htmlFor="alojamiento">Preferencias de Alojamiento</label>
        <br />
        <select
          name="alojamiento"
          id="alojamiento"
          placeholder="Preferencias de Alojamiento"
          value={alojamiento}
          onChange={(e) => setAlojamiento(e.target.value)}
        >
          <option value="" disabled selected>
            Preferencias de Alojamiento
          </option>
          <option value="hotel">Hotel</option>
          <option value="hostal">Hostal</option>
          <option value="apartamento">Apartamento</option>
          <option value="casa">Casa</option>
          <option value="camping">Camping</option>
        </select>

        <br />
        <br />
        <label htmlFor="actividades">Actividades de Interés</label>
        <br />
        <select
          name="actividades"
          id="actividades"
          value={actividades}
          onChange={(e) => setActividades(e.target.value)}
        >
          <option value="" disabled selected>
            Actividades de Interés
          </option>
          <option value="cultural">Turismo Cultural</option>
          <option value="aventura">Aventura/Deportes al aire libre</option>
          <option value="relax"> Relax/Playa</option>
          <option value="gastronomia">Gastronomía</option>
        </select>

        <br />
        <br />
        {renderAdditionalQuestions()}
      </div>

      <div className="productos">
        <button onClick={generateDocument}>Guardar como Word</button>
        <button onClick={generatePDF}>Guardar como PDF</button>
      </div>
    </div>
  );
}

export default Factura;