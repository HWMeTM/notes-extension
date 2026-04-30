# notes-extension

A lightweight, visually pleasing web extension for quick note-taking. Designed with a focus on minimalism and ease of use, PastelNotes organizes your thoughts into clean, color-coded cards.

![Design Preview]<img width="381" height="490" alt="Screenshot 2026-05-01 000014" src="https://github.com/user-attachments/assets/76f99c24-9794-4a7d-b7e8-d2c629d62e05" />
*UI inspired by the sleek, rounded aesthetic of modern productivity tools.*

## ✨ Features

*   **Quick Entry:** Add notes instantly via the footer input.
*   **Inline Updates:** Edit your notes directly on the card; changes save automatically when you click away.
*   **Local Storage:** Your data stays on your machine. No account or cloud sync required.
*   **Aesthetic UI:** 
    *   Auto-cycling pastel headers (Purple, Green, Peach).
    *   Custom-styled lime green delete buttons.
    *   Clean, rounded-corner design optimized for the extension popup.

## 🛠️ Tech Stack

*   **HTML5**
*   **CSS3** (Custom Properties / Flexbox)
*   **Vanilla JavaScript** (No frameworks required)
*   **Storage API:** `localStorage`

## 🚀 Installation

Since this is a web extension, you can load it into your browser manually:

1.  **Download/Clone** this repository to your local machine.
2.  Open your browser and navigate to the Extensions page:
    *   **Chrome:** `chrome://extensions`
    *   **Edge:** `edge://extensions`
3.  Enable **"Developer mode"** (usually a toggle in the top right).
4.  Click **"Load unpacked"** and select the folder containing these files.
5.  Pin **notes-extension** to your toolbar for easy access!

## 📂 Project Structure
```text
├── manifest.json    # Extension configuration
├── popup.html       # Main UI structure
├── popup.css        # Styling and layout
└── popup.js         # Logic and storage handling
└── icon.png         # note icon
