document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('noteInput');
    const list = document.getElementById('notesList');
    let notes = [];

    // Load existing notes
    chrome.storage.local.get(['notes'], (result) => {
        if (result.notes) {
            notes = result.notes;
            renderNotes();
        }
    });

    // Save on Enter
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value.trim()) {
            notes.push(input.value.trim());
            saveNotes();
            input.value = '';
        }
    });

    function saveNotes() {
        chrome.storage.local.set({ notes: notes }, () => {
            renderNotes();
            scrollToBottom();
        });
    }

    function deleteNote(index) {
        notes.splice(index, 1);
        saveNotes();
    }

    function startEdit(index, noteElement, originalText) {
        noteElement.innerHTML = `
            <input type="text" class="editing-input" id="edit-${index}" value="${originalText}">
        `;
        const editInput = document.getElementById(`edit-${index}`);
        editInput.focus();

        const finishEdit = () => {
            const newText = editInput.value.trim();
            if (newText) {
                notes[index] = newText;
                saveNotes();
            } else {
                renderNotes(); // Cancel if empty
            }
        };

        editInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') finishEdit(); });
        editInput.addEventListener('blur', finishEdit);
    }

    function renderNotes() {
    list.innerHTML = '';
    notes.forEach((text, index) => {
        const div = document.createElement('div');
        div.className = `note color-${index % 3}`;

        // Split title and body
        let contentHTML = '';
        const separatorIndex = text.indexOf(':');
        if (separatorIndex !== -1 && separatorIndex < 40) {
            const title = text.substring(0, separatorIndex);
            const body = text.substring(separatorIndex + 1);
            contentHTML = `<div class="note-title">${title.trim()}</div><div>${body.trim()}</div>`;
        } else {
            contentHTML = `<div>${text}</div>`;
        }

        // Hover action buttons
        const actionsHTML = `
            <div class="note-actions">
                <button class="action-btn edit-btn" data-index="${index}" title="Edit">
                    <svg class="action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                </button>
                <button class="action-btn delete-btn" data-index="${index}" title="Delete">
                    <svg class="action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                </button>
            </div>
        `;

        div.innerHTML = contentHTML + actionsHTML;
        list.appendChild(div);

        // Attach button events
        div.querySelector('.delete-btn').onclick = () => deleteNote(index);
        div.querySelector('.edit-btn').onclick = () => startEdit(index, div, notes[index]);
    });
}


    function scrollToBottom() {
        list.scrollTop = list.scrollHeight;
    }
});