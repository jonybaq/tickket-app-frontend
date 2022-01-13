
import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

export const useSocket=(serverPath)=>{
    const socket = useMemo(()=>io(serverPath,{transports:['websocket']}),[serverPath]);
    const [online, setOnline] = useState(false);
    useEffect(() => {
        socket.on('connect',()=>{
          console.log('conectado');
          setOnline(true);
        });
        socket.on('disconnect',()=>{
          console.log(`desconectado`);
          setOnline(false);
        });
      }, [socket]);
    return {socket,online}

}