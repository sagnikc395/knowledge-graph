import Fastify from 'fastify';


const fastify = Fastify({
    logger: true,
});

fastify.get("/", (_req, res) => {
    res.send({
        hello: 'world'
    })
});

fastify.listen({ port: 3000 }, (err, _address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
})