import { io, Socket } from "socket.io-client";

export const announcementSocket: Socket = io("http://localhost:3000/announcement", {
    autoConnect: false
})

export const chatSocket: Socket = io("http://localhost:3000/chat", {
  autoConnect: false
})

export const notificationSocket: Socket = io("http://localhost:3000/notification", {
  autoConnect: false
})

const socket: Socket = io("http://localhost:3000", {
  autoConnect: false, 
});

export default socket;
