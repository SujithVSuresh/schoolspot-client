import { io, Socket } from "socket.io-client";

export const announcementSocket: Socket = io("http://localhost:3000/announcement", {
    autoConnect: false
})

const socket: Socket = io("http://localhost:3000", {
  autoConnect: false, 
});

export default socket;
