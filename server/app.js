const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http, { cors: { origin: "*" } });

var position = {
    x: 200,
    y: 200,
    z: 'hello'
}

Socketio.on("connection", socket => {
    socket.emit("position", position)
    socket.on("move", data => {
        position.x += 5;
        position.z = '안녕!'
        Socketio.emit("position", position);
        console.log("move right")
    })
})


Http.listen(3300, () => {
    console.log("Listening at 3300...")
})