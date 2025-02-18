// import { createServer} from 'node:http'

// const server = createServer((request, response) => {
    // console.log('Requisição recebida!'); // Log para verificar se o servidor está funcionando
    // response.write('Server Online! Hello, Word!'); // Envia uma resposta ao cliente
    // response.end(); // Finaliza a resposta
// });

// server.listen(3333)

import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

    // POST http://localhost:3333/videos
    // PUT http://localhost:3333/videos/3

    // Route Parameter

const database = new DatabaseMemory()

// Request Body





server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body
    
    
    database.create({
        title,
        description,
        duration,
    })


    return reply.status(201).send()

})

server.get('/videos', (request) => {
    const search = request.query.search

    const videos = database.list(search)

    return videos
})

server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body

    database.update(videoId, {
        title,
        description,
        duration,

    })

    return reply.status(204).send()

})

server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id

    database.delete(videoId)

    return reply.status(204).send()
})


server.listen({
    port: 3333,
})
