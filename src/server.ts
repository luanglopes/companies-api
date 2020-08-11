import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import 'express-async-errors'

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())

app.get('/health', (request, response) => {
    return response.json({ status: 'Running' })
})

app.listen(3000, () => {
    console.log(`🚀 Server started on port 3000`)
})
