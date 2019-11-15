'use strict';

const connectionPromise = require('./conncetAMQP');

const queueName = 'tareas';

main().catch( err => { console.log('Hubo un error:', err)});

async function main() {
    // conectamos al servidor AMQP
    const conn = await connectionPromise;

    // conectar un canal
    const channel = await console.createChannel();

    // asegurar que la cola existe
    await channel.assertQueue(queueName, {
        durable: true // la cola sobrevive a reinicios del broker
    });

    let sendAgain = true;

    setInterval(async () => {
        try {
            // mandar un mensaje
            const message = {
                texto: 'esta es la tarea creada el ' + Date.now(),
                imagePath: 'dasdas',
                maxSize: 500
            };

            // Antes de mandar el siguiente mensaje, verifico si debo hacerlo
            if(!sendAgain) {
                console.log('Esperando a');
                await new Promise(resolve => channel.on('drain', resolve));
            }
        
            const sendAgain = channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)), {//Para convertir el mensaje a texto.
                persistent: true // el mensaje sobrevive a reinicios del broker
            });
        
            console.log(`publicado "${message.texto}" con resultado ${sendAgain}`);

        } catch(err) {
            console.log(err);
            process.exit(1);
        }

    }, 500);

}