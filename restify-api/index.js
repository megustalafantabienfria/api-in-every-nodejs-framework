const restify = require('restify');

const server = restify.createServer({
  name: 'restify-api',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(process.env.PORT || 8080, () => {
  console.log('%s listenting at %s', server.name, server.url);
});