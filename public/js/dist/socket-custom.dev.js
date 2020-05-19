"use strict";

var socket = io(); //ESCUHAR INFORMACION

socket.on('connect', function () {
  console.log('Conectado al servidor');
});
socket.on('disconnect', function () {
  console.log('Perdimos conexion con el servidr');
});
socket.on('enviarMensajeCliente', function (respuesta) {
  console.log('Servidor', respuesta);
}); //Enviar informacion

socket.emit('enviarMensajeServidor', {
  usuario: 'walter',
  mensaje: 'Hola mundo'
}, function (res) {
  console.log('respuesta servidor', res);
});