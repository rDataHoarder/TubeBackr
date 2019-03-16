/**
 * by: dunklesToast
 * created on: 10/23/18
 */

const fastify = require('fastify')();
const ydl = require('./youtube-dl');

fastify.register(require('fastify-cors'));

fastify.post('/load', async (request, reply) => {
    if (request.query.url) {
        console.log('Got URL: '.green + request.query.url.blue);
        reply.status(200).send();
        ydl(request.query.url);
    } else {
        reply.status(400).send();
    }
});

fastify.get('/v', async (request, reply) => {
    reply.send({
        version: require('../package').version,
        neededV: 1
    });
});

try {
    fastify.listen('0.0.0.0', 9999);
    console.log('WebServer started!'.green);
} catch (e) {
    console.log('Unable to start Fastify WebServer'.red);
    throw e;
}
