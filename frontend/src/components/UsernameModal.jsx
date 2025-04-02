import { useState } from "react";

const UsernameModal = ({ setUsername }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) setUsername(input);
  };

  return (
    <div className="modal">
      <div className="modal-box">
        <h2>Enter your username</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter username..."
        />
        <button onClick={handleSubmit}>Join Chat</button>
      </div>
    </div>
  );
};

export default UsernameModal;
