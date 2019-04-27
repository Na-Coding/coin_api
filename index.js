var app = require('express')()
var bodyParser = require('body-parser')
var http = require('http').Server(app)
var io = require('socket.io')(http)

const server = app
const port = 3013;

// app.get('/', function (req, res) {
//     res.sendfile('index.html')
// })

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
    extended: true
}))

io.on('connect', function (socket) {
    // Client ทำการเชื่อมต่อ
    console.log('user Connected');

    // Client ตัดการเชื่อมต่อ
    socket.on('disconnect', function () {
        console.log('user Disconnect');
    })
    // ส่งข้อมูลไปยัง Client ทุกตัวที่เขื่อมต่อแบบ Realtime
    socket.on('sent-message', function (message) {
        io.sockets.emit('new-message', message)
    })
})

http.listen(port, function (err, result) {
    console.log('running in port http://localhost:' + port);
}) 
