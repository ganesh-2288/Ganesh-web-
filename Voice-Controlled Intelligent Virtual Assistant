<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Premium Grammar AI</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  
  <style>
    :root {
      --primary: #6366f1;
      --secondary: #a855f7;
      --glass: rgba(255, 255, 255, 0.08);
      --glass-border: rgba(255, 255, 255, 0.15);
      --text-main: #ffffff;
      --text-dim: rgba(255, 255, 255, 0.6);
    }

    * {
      box-sizing: border-box;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    body {
      background-color: #0f172a; 
      font-family: 'Plus Jakarta Sans', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      color: var(--text-main);
      overflow: hidden; 
    }

   
    .blob {
      position: absolute;
      width: 400px;
      height: 400px;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      filter: blur(80px);
      border-radius: 50%;
      z-index: -1;
      opacity: 0.5;
      animation: move 20s infinite alternate;
    }

    .blob-2 {
      background: #3b82f6;
      width: 300px;
      height: 300px;
      right: 10%;
      top: 10%;
      animation-delay: -5s;
    }

    @keyframes move {
      from { transform: translate(-20%, -20%) rotate(0deg); }
      to { transform: translate(20%, 20%) rotate(360deg); }
    }

    .container {
      width: 95%;
      max-width: 480px;
      padding: 3rem;
      border-radius: 32px;
      background: var(--glass);
      backdrop-filter: blur(25px);
      -webkit-backdrop-filter: blur(25px);
      border: 1px solid var(--glass-border);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      position: relative;
    }

    h2 {
      margin-top: 0;
      font-size: 1.75rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      background: linear-gradient(to right, #fff, #94a3b8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    textarea {
      width: 100%;
      padding: 1.25rem;
      border: 1px solid var(--glass-border);
      border-radius: 20px;
      background: rgba(0, 0, 0, 0.2);
      font-family: inherit;
      resize: none;
      outline: none;
      color: white;
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }

    textarea:focus {
      border-color: var(--primary);
      background: rgba(0, 0, 0, 0.3);
      box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
    }

    .button-group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 2rem;
    }

    button {
      padding: 14px;
      border: 1px solid var(--glass-border);
      border-radius: 16px;
      background: var(--glass);
      cursor: pointer;
      font-weight: 600;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }

    button:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
    }

    .btn-check {
      background: var(--primary);
      border: none;
    }

    .btn-check:hover {
      background: #4f46e5;
      box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.4);
    }

    .result-area {
      padding: 1.25rem;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px dashed var(--glass-border);
      text-align: left;
    }

    .result-label {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--primary);
      margin-bottom: 8px;
      display: block;
    }

    #result {
      margin: 0;
      line-height: 1.6;
      color: var(--text-dim);
    }
  </style>
</head>
<body>

  <div class="blob"></div>
  <div class="blob blob-2"></div>

  <div class="container">
    <h2><i class="fas fa-wand-magic-sparkles" style="color: var(--primary)"></i> AI Grammar Check</h2>

    <textarea id="textInput" rows="4" cols="50" oninput="checkGrammar()" placeholder="Speak or type..."></textarea>

    <div class="button-group">
      <button onclick="startListening()">
        <i class="fas fa-microphone"></i> Voice
      </button>
      <button class="btn-check" onclick="checkGrammar()">
        Check Text
      </button>
    </div>

    <div class="result-area">
      <span class="result-label">Polished Output</span>
      <p id="result" style="margin-top:20px; font-size:18px;">Your corrected text will appear here...</p>
        <hr style="margin:15px 0; border-color:rgba(255,255,255,0.1);">

        <span class="result-label">Corrected Sentence</span>
        <p id="correctedText" style="color:#4ade80; font-weight:600;"></p>
    </div>
    <p id="score" style="font-weight:bold; margin-top:10px;"></p>
  </div>

  <script>
    // Logic remains functional and same as previous
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onresult = function(event) {
      const transcript = event.results[event.results.length - 1][0].transcript;
      document.getElementById("textInput").value += " " + transcript;
      checkGrammar(); 
    };

    function startListening() {
      recognition.start();
    }

    async function checkGrammar() {
  const text = document.getElementById("textInput").value;
  if (!text) return;

  const response = await fetch("http://localhost:5000/check-grammar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  const data = await response.json();

  let highlightedText = text;

  data.matches.reverse().forEach(match => {
    const start = match.offset;
    const end = start + match.length;

    highlightedText =
      highlightedText.substring(0, start) +
      `<span style="color:red;font-weight:bold;">` +
      highlightedText.substring(start, end) +
      `</span>` +
      highlightedText.substring(end);
  });

  document.getElementById("result").innerHTML = highlightedText;
  document.getElementById("correctedText").innerText = data.correctedText;

  // Speaking Score
  const wordCount = text.trim().split(/\s+/).length;
  const mistakes = data.matches.length;

  let score = 100;
  if (wordCount > 0) {
    score = Math.max(0, ((wordCount - mistakes) / wordCount) * 100);
  }

  document.getElementById("score").innerText =
    "Speaking Score: " + score.toFixed(0) + "%";
}
  </script>

</body>
</html>
