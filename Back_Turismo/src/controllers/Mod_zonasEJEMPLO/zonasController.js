const db = require("../../models/sigfviDBModelo").promise();

const obtenerZonas = async (req, res) => {
    try {
        const [result] = await db.query(`
            SELECT Id_zona, Nombre_zona, Estado_zona, Empleado_asignado, Cantidad_rutas, Email
            FROM datos;
        `);
        res.json(result);
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json({ error: 'Error al obtener zonas.' });
    }
};



const obtenerZonaPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.query('SELECT * FROM datos WHERE Id_zona = ?', [id]);
        res.json(result[0] || {});
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json({ error: 'Error al obtener la zona.' });
    }
};



const crearZona = async (req, res) => {
    const { Id_zona, Nombre_zona, Estado_zona, Empleado_asignado, Cantidad_rutas, Email } = req.body;

    try {
        const createQuery = "INSERT INTO datos(Id_zona, Nombre_zona, Estado_zona, Empleado_asignado, Cantidad_rutas, Email) VALUES (?, ?, ?, ?, ?, ?)";
        const [result] = await db.query(createQuery, [Id_zona, Nombre_zona, Estado_zona, Empleado_asignado, Cantidad_rutas, Email]);

        res.json({ message: 'Zona creada correctamente', id: result.insertId });
    } catch (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ error: 'Error al crear la zona.' });
    }
};



const actualizarZona = async (req, res) => {
    try {
        const { id } = req.params;
        const { Nombre_zona, Estado_zona, Empleado_asignado, Cantidad_rutas, Email } = req.body;

        const updateQuery = "UPDATE datos SET Nombre_zona = ?, Estado_zona = ?, Empleado_asignado = ?, Cantidad_rutas = ?, Email = ? WHERE Id_zona = ?";
        await db.query(updateQuery, [Nombre_zona, Estado_zona, Empleado_asignado, Cantidad_rutas, Email, id]);

        res.json({ message: 'Zona actualizada correctamente' });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json({ error: 'Error al actualizar la zona.' });
    }
};


const cambioEstadoZona = async (req, res) => {
    const { id } = req.params;
    const { state } = req.body;

    try {
        const estado = `UPDATE datos SET Estado_zona = ? WHERE Id_zona = ?;`;
        await db.query(estado, [state, id]);
        res.json({ message: "Estado cambiado" });
    } catch (error) {
        console.error('Estado no cambiado', error);
        res.status(500).json({ error: 'Estado no cambiado' });
    }
};


const eliminarZona = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query('DELETE FROM Registro_Proveedor WHERE ID_Registro_Proveedor_PK = ?', [id]);
        res.json({ message: 'Proveedor eliminado correctamente' });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json({ error: 'Error al eliminar el proveedor.' });
    }
};

// const verificarTelefonoExistente = async (req, res) => {
//     try {
//         const { telefono } = req.body;
//         const query = 'SELECT Telefono_Contacto FROM Registro_Proveedor WHERE Telefono_Contacto = ? LIMIT 1';
//         const [rows] = await db.query(query, [telefono]);

//         if (rows.length > 0) {
//             return res.status(200).json({ exists: true, message: 'El número de teléfono ya existe.' });
//         }

//         return res.status(200).json({ exists: false, message: 'El número de teléfono está disponible.' });
//     } catch (error) {
//         console.error('Error al verificar el número de teléfono:', error);
//         return res.status(500).json({ error: 'Error interno del servidor.' });
//     }
// };

module.exports = {
    obtenerZonas,
    obtenerZonaPorId,
    crearZona,
    actualizarZona,
    eliminarZona,
    cambioEstadoZona,
    // verificarTelefonoExistente
};
