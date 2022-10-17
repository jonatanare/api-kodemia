/**
 * ! Punto de inicio de la aplicación - entrypoint
 * ? Conectar a la base de datos
 * ? levantar el server
 */

import dbConnect from "./src/libs/db.js";
import {server} from './src/server.js'

dbConnect()
    .then(() => {
        console.log('Database connected :D');
        
        server.listen(8080, () => {
            console.log('Server listening on port 8080');
        })
    })
    .catch((error) => console.log('Error: ', error))