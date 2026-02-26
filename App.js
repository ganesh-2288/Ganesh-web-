import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  // 🎤 Speech Recognition
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setText(spokenText);
    };
  };

  // 📘 Send to backend
  const analyzeText = async () => {
    if (!text.trim()) {
      setResult("Please speak or enter a sentence.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/analyze", {
        text: text,
      });

      setResult(response.data.corrected);
    } catch (error) {
      setResult("Server error. Please check backend.");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🎤 Smart Grammar Assistant</h1>

        <textarea
          placeholder="Speak or type your sentence..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={startListening}>Start Speaking</button>

        <button onClick={analyzeText}>Correct Sentence</button>

        {result && (
          <div className="result">
            <h3>Corrected Sentence:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
