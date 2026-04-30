# notes-extension

A lightweight, visually pleasing web extension for quick note-taking. Designed with a focus on minimalism and ease of use, PastelNotes organizes your thoughts into clean, color-coded cards.

<img width="268" height="346" alt="Screenshot 2026-05-01 002638" src="https://github.com/user-attachments/assets/b09c667e-3cb5-4279-8b27-d7d761348535" />

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
