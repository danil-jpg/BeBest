const express = require('express')
const cors = require('cors')
const events = require('events')
// импорты всякого важного и полезного

const emitter = new events.EventEmitter()
// эта дичь нужна,для оповещения всех учасников процесса далее


const PORT = 5000;

const app = express()

app.use(cors())
app.use(express.json())

app.get('/get-messages', (req, res) => {
	emitter.once('newMessage', (message) => { res.json(message) })
	//одноразово оповещает всех учасников и отправляет сообщение в формате json
})

app.post('/new-messages', ((req, res) => {
	const message = req.body;
	emitter.emit('newMessage', message)
	res.statusCode = 200
}))

app.listen(PORT, () => console.log(`server has been started on ${PORT} port`))