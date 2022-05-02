// llamamos el modulo http 
const http=require ('http');
// establecemos la url o IP de buestro servidor 
const hostname = '192.168.0.7';
// establecemos el puerto de escucha
const port = 3000;

//creamos una instancia HTTP con un reques y un response

const server= http.createServer((req, res) => {
// el servidor respondera con un codigo 200
res.statusCode=200;
//el servidor respondera con un texto plano 
res.setHeader('Content-Type', 'text/plain');
//el servidor respondera el mensaje hola mundo 
res.end('hola Mundo\n');

});

server.listen(port, hostname, () => {
    console.log(`el servidor se esta ejecuntando en http://${hostname}:${port}/`);
});