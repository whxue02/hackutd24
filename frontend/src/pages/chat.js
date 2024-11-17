import Navbar from "../components/navbar"
import { useState } from "react";

const Chat = () => {
    const [messages, setMessages] = useState([]); 
    const [input, setInput] = useState(""); 
    const [isLoading, setIsLoading] = useState(false);

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    }

    const sendMessage = async () => {
        if (!input.trim()) return;
        const userMessage = { sender: "user", text: input };
        setMessages([...messages, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            //call  request
        } catch (error) {
            console.error("Error communicating with chatbot:", error);
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "Sorry, I couldn't process your message." },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <div className="backgroundgrey">
            <Navbar/>
            <div className="chatbot-container">
                <div className="chatbot-header">ChatBot: Ask me Anything!</div>
                <div className="chatbot-messages">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`chatbot-message ${
                                message.sender === "user" ? "user" : "bot"
                            }`}
                        >
                            {message.text}
                        </div>
                    ))}
                    {isLoading && <div className="chatbot-message bot">Typing...</div>}
                </div>
                <div className="chatbot-input-container">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="chatbot-input"
                    />
                    <button onClick={sendMessage} className="chatbot-send-button">
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Chat