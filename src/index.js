import { Server } from "socket.io";

const io = new Server(3000);

io.on("connection",(socket) =>{
    // 发生一个消息给客户端
    socket.emit("hello","world");

    // 从客户端接受一个消息
    socket.on("howdy",(arg) => {
        console.log(arg);
    });
});
