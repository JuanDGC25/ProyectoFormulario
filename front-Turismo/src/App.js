import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

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
  const [productos, setProductos] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Simulación de llamada a la API
    const clienteData = {
      ClienteID: '123',
      Nombre: 'Nombre del Cliente',
      Correo: 'Correo Electrónico del Cliente',
      Telefono: 'Teléfono Cliente',
      Direccion: 'Dirección del Cliente'
    };
    const viajeData = {
      Destino: '¿A qué lugar te gustaría viajar?',
      Duracion: '¿Cuánto tiempo planeas estar de viaje?',
      Presupuesto: '¿Cuál es tu presupuesto aproximado para este viaje?',
      Alojamiento: '¿Qué tipo de alojamiento prefieres?',
      Actividades: '¿Qué actividades te gustaría realizar durante tu viaje?',
      PreferenciasAdicionales: 'Preferencias Adicionales'
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

  const generarFactura = () => {
    var total = 0;
    productos.forEach((producto) => {
      total += producto.precio * producto.cantidad;
    });
    setTotalAmount(total.toFixed(2));
  };

  const handleAgregarProducto = () => {
    const nombreProducto = prompt('Ingrese Nombre del Producto');
    if (nombreProducto === '*') return;

    const precio = parseFloat(prompt('Ingrese Precio'));
    const cantidad = parseInt(prompt('Ingrese Cantidad'));
    const subtotal = precio * cantidad;

    const nuevoProducto = {
      nombre: nombreProducto,
      precio: precio,
      cantidad: cantidad,
      subtotal: subtotal,
    };

    setProductos([...productos, nuevoProducto]);
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
        <input
          type="text"
          name="presupuesto"
          id="presupuesto"
          placeholder="Presupuesto"
          value={presupuesto}
          onChange={(e) => setPresupuesto(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="alojamiento">Preferencias de Alojamiento</label>
        <br />
        <select
          type="text"
          name="alojamiento"
          id="alojamiento"
          placeholder="Preferencias de Alojamiento"
          value={alojamiento}
          onChange={(e) => setAlojamiento(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="actividades">Actividades de Interés</label>
        <br />
        <input
          type="text"
          name="actividades"
          id="actividades"
          placeholder="Actividades de Interés"
          value={actividades}
          onChange={(e) => setActividades(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="preferenciasAdicionales">Preferencias Adicionales</label>
        <br />
        <input
          type="text"
          name="preferenciasAdicionales"
          id="preferenciasAdicionales"
          placeholder="Preferencias Adicionales"
          value={preferenciasAdicionales}
          onChange={(e) => setPreferenciasAdicionales(e.target.value)}
        />
        <br />
        <br />
        {/* Agregar campos adicionales basados en las preferencias */}
      </div>
      <div className="productos">
        <input
          type="button"
          name="Continuar"
          onClick={generarFactura}
          value="Continuar"
        />
        <input
          type="button"
          onClick={handleAgregarProducto}
          value="Agregar Producto"
        />
      </div>
      <table className="factura">
        <thead>
          <tr>
            <th>Nombre Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.subtotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <p>Total: $<span>{totalAmount}</span></p>
      </div>
      <div className="productos">
        <input type="button" onClick={() => window.print()} value="Imprimir Factura" />
      </div>
    </div>
  );
}

export default Factura;
