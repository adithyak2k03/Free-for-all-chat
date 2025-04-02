import { useState, useEffect } from "react";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";
import UsernameModal from "./components/UsernameModal";

const App = () => {
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (username) {
      const ws = new WebSocket("ws://localhost:8000/ws");
      setSocket(ws);

      return () => ws.close();
    }
  }, [username]);

  return (
    <div className="chat-app">
      {!username ? (
        <UsernameModal setUsername={setUsername} />
      ) : (
        <>
          <ChatWindow socket={socket} username={username} />
          <MessageInput socket={socket} username={username} />
        </>
      )}
    </div>
  );
};

export default App;
