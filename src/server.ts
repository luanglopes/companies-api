import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

const app = express()

app.use(cors())
app.use(helmet())

app.get('/health', (request, response) => {
    return response.json({ status: 'Running' })
})

app.listen(3000, () => {
    console.log(`🚀 Server started on port 3000`)
})
