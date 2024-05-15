-- Tabla Cliente
INSERT INTO Cliente (ClienteID, Nombre, CorreoElectronico, Telefono, Direccion)
VALUES ('101', 'Juan Pérez', 'juan@example.com', '123456789', 'Calle Principal 123'),
       ('102', 'María Rodríguez', 'maria@example.com', '987654321', 'Avenida Central 456');

-- Tabla Viaje
INSERT INTO Viaje (ClienteID, Destino, Duracion, Presupuesto, Alojamiento, Actividades, PreferenciasAdicionales)
VALUES ('101', 'París', 'Una semana', '$1000 - $2000', 'Hotel', 'Turismo cultural', 'Museos, Sitios históricos'),
       ('102', 'Tokio', 'Dos semanas', 'Más de $2000', 'Hotel', 'Turismo cultural', 'Museos, Eventos culturales locales'),
       ('103', 'Bali', 'Una semana', '$1000 - $2000', 'Airbnb/Alquiler vacacional', 'Relax/Playa', 'Playa concurrida'),
       ('101', 'Montañas Rocosas', 'Una semana', '$1000 - $2000', 'Camping', 'Aventura/Deportes al aire libre', 'Senderismo, Escalada');
