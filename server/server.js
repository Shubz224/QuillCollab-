const io = require("socket.io")(
    3001,{
        cors:{
            origin :"http://localhost:3000",
            method :["GET","POST"],
        },
    }
)
 addEventListener
io.on("connection",socket =>{
    console.log("connected");
})