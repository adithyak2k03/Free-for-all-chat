import { useEffect, useState } from "react";

const ChatWindow = ({ socket, username }) => {
  const [messages, setMessages] = useState([]);
  const [userColors, setUserColors] = useState({});

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      const rawMessage = event.data;
      console.log("Raw Received Message:", rawMessage); // Debugging: Ensure full message is logged

      // Find the first occurrence of ": " to separate sender from message
      const separatorIndex = rawMessage.indexOf(": ");
      if (separatorIndex === -1) {
        console.warn("Invalid message format:", rawMessage);
        return; // Skip malformed messages
      }

      const sender = rawMessage.substring(0, separatorIndex); // Sender name
      const text = rawMessage.substring(separatorIndex + 2); // Message text

      console.log("Extracted Sender:", sender);
      console.log("Extracted Message:", text);

      setMessages((prev) => [...prev, { sender, text }]);

      setUserColors((prevColors) => {
        if (!prevColors[sender]) {
          return { ...prevColors, [sender]: getRandomColor() };
        }
        return prevColors;
      });
    };

    return () => {
      socket.onmessage = null;
    };
  }, [socket]);

  const getRandomColor = () => {
    const colors = [
      "#e6194b",
      "#3cb44b",
      "#ffe119",
      "#4363d8",
      "#f58231",
      "#911eb4",
      "#42d4f4",
      "#f032e6",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const [copiedMessageIndex, setCopiedMessageIndex] = useState(null);
  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedMessageIndex(index);
      setTimeout(() => setCopiedMessageIndex(null), 1000); // Reset after 1 sec
    });
  };

  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message ${msg.sender === username ? "sent" : "received"}`}
        >
          <strong style={{ color: userColors[msg.sender] || "black" }}>
            {msg.sender}:
          </strong>{" "}
          <pre className="message-text">{msg.text}</pre>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(msg.text, index)}
          >
            {copiedMessageIndex === index ? "✔ Copied!" : "📋 Copy"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
