import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "crud_clientes",      // Base de datos
    "root",               // Usuario
    "pitufin246",                   // Contraseña
    {
        host: "localhost",
        dialect: "mysql",
        logging:false

    }
);

const conectar = async () => {

    try{

        await sequelize.authenticate();

        console.log("Conexión a MySQL exitosa");

        await sequelize.sync();

        console.log("Tablas sincronizadas");

    }
    catch(error){

        console.error("Error al conectar:", error);

    }

}

export { sequelize, conectar };