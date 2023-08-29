const WebSocket = require('ws')

const wss = new WebSocket.Server({
	port: 8084
})

wss.on('connection', (ws) => {
	// console.log(ws)
	console.log('Client has connected')

	ws.on('message', data => {
		console.log(`Client has sent us: ${data}`)
		// ws.send('Server has sent another data');
	})



	ws.on('close', () => { console.log('CLient has disconected') })
})