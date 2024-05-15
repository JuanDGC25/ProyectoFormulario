CREATE DATABASE Planeacion_viaje;
-- DROP DATABASE Planeacion_viaje;
USE Planeacion_viaje;

CREATE TABLE Cliente (
    ClienteID VARCHAR(20) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    CorreoElectronico VARCHAR(100) NOT NULL,
    Telefono VARCHAR(20),
    Direccion VARCHAR(200)
);

CREATE TABLE Viaje (
    ViajeID INT AUTO_INCREMENT PRIMARY KEY,
    ClienteID VARCHAR(20),
    Destino VARCHAR(100),
    Duracion VARCHAR(50),
    Presupuesto VARCHAR(50),
    Alojamiento VARCHAR(50),
    Actividades VARCHAR(100),
    PreferenciasAdicionales VARCHAR(100),
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID)
);
