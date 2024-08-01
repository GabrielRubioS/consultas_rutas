import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const app = express()
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 10101;


//ruta que recibe un formulario de registro
app.post('/register', function (request: Request, response: Response) {
    let password = request.body.password;
    let email = request.body.email;
    let nombres = request.body.nombres;
    let apellidos = request.body.apellidos;
    let ciudad = request.body.ciudad;
    return response.status(200).json({
        "Status": "ok registrado",
        nombres: nombres, apellidos: apellidos
    });
});


//ruta que recibe un objeto json para registro
app.post('/registerjson', function (request: Request, response: Response) {
    let password = request.body.password;
    let email = request.body.email;
    let nombres = request.body.nombres;
    let apellidos = request.body.apellidos;
    let ciudad = request.body.ciudad;
    return response.status(201).json({
        "Status": "ok registrado con json",
        nombres: nombres, apellidos: apellidos
    });
});

// --------------------------------------------------------------------------------------------------------------------- //
//primera consulta
app.post('/primeraruta/:domicilio', function (request: Request, response: Response) {
    let domicilio = request.params.domicilio;
    let cc = request.query.cc;
    let nombres = request.query.nombres;
    let apellidos = request.query.apellidos;
    return response.status(201).json({
        "Status": "Se registró correctamente el cliente",
        domicilio: domicilio,
        cc: cc, 
        nombres: nombres,
        apellidos: apellidos
    });
});

//segunda consulta
app.post('/segundaruta/:id/:peso', function (request: Request, response: Response) {
    let id = request.params.id;
    let peso = request.params.peso;
    let ancho = request.body.ancho;
    let alto = request.body.alto;
    return response.status(201).json({
        "Status": "Se registró correctamente el cliente",
        id:id,
        peso:peso,
        ancho:ancho,
        alto:alto
    });
});

// tercera consulta
app.delete('/deleteterceraruta', function (request: Request, response: Response) {
    let cc = request.query.cc;
    let motivo=request.body.motivo
    let cabecera = request.header("id")
    return response.status(201).json({
        "Status": "Se borro correctamente el usuario",
        cabecera:cabecera,
        cc:cc,
        motivo:motivo,
    });
});

// cuarta consulta
app.put('/cuartaconsulta', function (request: Request, response: Response) {
    let cc = request.query.cc;
    let apellidos=request.body.apellidos
    let cabecera = request.header("domicilio")
    return response.status(201).json({
        "Status": "Se actualizo correctamente el usuario",
        cabecera:cabecera,
        apellidos:apellidos,
        cc:cc,
    });
});


// Quinta consulta
app.get('/quintaconsulta/:cantidad/:marca', function (request: Request, response: Response) {
    let precio = request.query.precio;
    let cantidad=request.params.cantidad;
    let marca=request.params.marca;
    let cabecera = request.header("domicilio")
    return response.status(201).json({
        "Status": "Se obtuvo correctamente la informacion",
        cabecera:cabecera,
        cantidad:cantidad,
        marca:marca,
        precio:precio,
    });
});

// ----------------------------------------------------------------------------------------------------------------- //






//ruta que recibe parametros de ruta para registro
app.get('/parametros-ruta/:id', function (request: Request, response: Response) {
    let id = request.params.id;
    return response.status(200).json({
        "Status": "ok params",
        id: id
    });
});


//ruta que recibe cabecera
app.get('/cabeceras', function (request: Request, response: Response) {
    let cabecera = request.header("Authorization");
    return response.status(200).json({
        "Status": "ok cabecera",
        cabecera: cabecera
    });
});


app.listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error: any) => {
    throw new Error(error.message);
});
