const { io } = require('../server');


//para saber cuando un usuario se conecta al server
io.on('connection', (client) => {

    console.log('Uusario conectado');

    client.emit('enviarMensajeCliente', {
        usuario: 'admin',
        message: 'Bienvenido a esta aplicacion'
    })

    client.on('disconnect', () => {
        console.log('Uusario desconectado');
    })

    //escuchar el cleinte
    client.on('enviarMensajeServidor', (data, callback) => {

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

    })

})


