AI Grammar Check Web Application
Overview

The AI Grammar Check Web Application is a web-based tool that helps users improve their English writing and speaking by detecting grammar mistakes and providing corrected sentences in real time.

The application allows users to type text or speak through voice input, analyzes the content using an AI-powered grammar checking backend, highlights errors, and displays the corrected version along with a speaking accuracy score.

This project is designed to help students, professionals, and language learners enhance their communication skills.

Features

Real-time Grammar Checking

Detects grammatical mistakes in user input.

Voice Input Support

Users can speak using their microphone, and the system converts speech to text automatically.

Error Highlighting

Incorrect words or phrases are highlighted in red for easy identification.

Corrected Sentence Output

Displays a polished version of the input text.

Speaking Score

Calculates a score based on the number of mistakes relative to total words.

Modern UI Design

Glassmorphism style interface with animated gradient backgrounds.

Technologies Used
Frontend

HTML5

CSS3

JavaScript

Web Speech API

Font Awesome Icons

Google Fonts

Backend

Python

Flask

LanguageTool API (Grammar Checking)

Project Structure
AI-Grammar-Check
│
├── index.html        # Main frontend interface
├── README.md         # Project documentation
├── backend
│     ├── app.py      # Flask server
│     └── requirements.txt
How It Works

The user enters text or uses the voice input feature.

The text is sent to the Flask backend API.

The backend processes the text using a grammar checking library.

The API returns:

Grammar mistakes

Corrected sentence

The frontend highlights the errors and displays the corrected output along with a speaking score.

Installation and Setup
1. Clone the Repository
git clone https://github.com/yourusername/ai-grammar-check.git
2. Navigate to the Project Folder
cd ai-grammar-check
3. Install Dependencies
pip install flask language-tool-python
4. Run the Backend Server
python app.py

The backend will run on:

http://localhost:5000
5. Open the Frontend

Open the index.html file in your browser.

API Endpoint
POST /check-grammar

Request:

{
"text": "I is going to school"
}

Response:

{
"matches": [...],
"correctedText": "I am going to school"
}
Example Usage

Input:

I is going to market yesterday

Output:

I went to the market yesterday

Speaking Score:

80%
Future Improvements

AI-powered sentence suggestions

Pronunciation analysis

Multi-language support

Grammar explanation for mistakes

Mobile responsive optimization

Author

Akhila Shetty

BTech Student | AI & Web Development Enthusiast

If you want, I can also give you a better README that looks like a professional GitHub project (with badges, screenshots, and demo section) which will impress recruiters and help in your final year project viva.
