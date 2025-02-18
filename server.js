// import { createServer} from 'node:http'

// const server = createServer((request, response) => {
    // console.log('Requisição recebida!'); // Log para verificar se o servidor está funcionando
    // response.write('Server Online! Hello, Word!'); // Envia uma resposta ao cliente
    // response.end(); // Finaliza a resposta
// });

// server.listen(3333)

import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
    return 'Hello Word!'
})

server.get('/hello', () => {
    return 'Hello Vitor!'
})

server.get('/node', () => {
    return 'Hello Node!'
})





server.listen({
    port: 3333,
})
