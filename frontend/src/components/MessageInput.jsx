import { useState } from "react";

const MessageInput = ({ socket, username }) => {
  const [message, setMessage] = useState("");

  // const sendMessage = () => {
  //   if (message.trim() && socket) {
  //     socket.send(`${username}: ${message}`);
  //     setMessage("");
  //   }
  // };

  const sendMessage = () => {
    if (!message.trim()) return;

    socket.send(`${username}: ${message}`);
    setMessage(""); // Clear input after sending
  };

  return (
    <div className="message-input">
      {/* <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      /> */}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="chat-input"
        rows="3" // Allows multi-line input
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default MessageInput;
