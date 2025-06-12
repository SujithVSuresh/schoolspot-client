import { io, Socket } from "socket.io-client";
const envData = import.meta.env;

export const announcementSocket: Socket = io(`${envData.VITE_SOCKET_URL}/announcement`, {
    autoConnect: false
})

export const chatSocket: Socket = io(`${envData.VITE_SOCKET_URL}/chat`, {
  autoConnect: false
})

export const notificationSocket: Socket = io(`${envData.VITE_SOCKET_URL}/notification`, {
  autoConnect: false
})

const socket: Socket = io(envData.VITE_SOCKET_URL, {
  autoConnect: false, 
});

export default socket;
