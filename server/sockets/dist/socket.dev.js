"use strict";

var _require = require('../server'),
    io = _require.io; //para saber cuando un usuario se conecta al server


io.on('connection', function (client) {
  console.log('Uusario conectado');
  client.emit('enviarMensajeCliente', {
    usuario: 'admin',
    message: 'Bienvenido a esta aplicacion'
  });
  client.on('disconnect', function () {
    console.log('Uusario desconectado');
  }); //escuchar el cleinte

  client.on('enviarMensajeServidor', function (data, callback) {
    console.log(data);
    client.broadcast.emit('enviarMensajeCliente', data);
    /* if (message.usuario) {
            callback({
             res: 'TODO SALIO BIEN'
         });
           } else {
            callback({
             res: 'TODO SALIO MAL!!!!'
         });
     }*/
  });
});