const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http, { cors: { origin: "*" } });

// let flowMessage = '직업 배분중 잠시만 기다려주세요'
let playerJob = []

console.log('직업배분 시작')
const candidates = Array(10).fill().map((v, i) => v = i)
while(candidates.length > 0) {
    let num = Math.floor(Math.random() * candidates.length);
    let leftNum = candidates.splice(num, 1)[0]
    playerJob.push(leftNum)  
}
console.log(playerJob)
for (let i = 0; i < 10; i++) {
    if(playerJob[i] == 0 | playerJob[i] == 1) {
        playerJob[i] = '마피아'
    } else if (playerJob[i] == 2) {
        playerJob[i] = '경찰'
    } else if (playerJob[i] == 3) {
        playerJob[i] = '의사'
    } else {
        playerJob[i] = '시민'
    }
}

console.log(playerJob)
// let position = {
//     x: 200,
//     y: 200,
//     z: 'hello',
// }
// console.log(position)

Socketio.on("connection", socket => {
    socket.emit("playerJob", playerJob)
})


// Socketio.on("connection", socket => {
//     socket.emit("position", position)
//     socket.on("move", data => {
//         position.x += 5;
//         position.z = '안녕!'
//         Socketio.emit("position", position);
//         console.log("move right")
//     })
// })

Http.listen(3300, () => {
    console.log("Listening at 3300...")
})