const textInput = document.getElementById('textInput');
const wordCountDisplay = document.getElementById('wordCount');
const charCountDisplay = document.getElementById('charCount');
const sentenceCountDisplay = document.getElementById('sentenceCount');
const whiteSpaceCountDisplay = document.getElementById('whiteSpaceCount');
const readingTimeDisplay = document.getElementById('readingTime');

// Update all statistics when text changes
textInput.addEventListener('input', updateStatistics);

function updateStatistics() {
    const text = textInput.value.trim();

    // Word count
    const words = text.split(/\s+/).filter(word => word.length > 0);
    wordCountDisplay.textContent = words.length;

    // Character count (including spaces)
    charCountDisplay.textContent = textInput.value.length;

    // Sentence count (approximation: split by ., !, or ?)
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    sentenceCountDisplay.textContent = sentences.length;

    // White space count
    const whiteSpaces = textInput.value.match(/\s/g) || [];
    whiteSpaceCountDisplay.textContent = whiteSpaces.length;

    // Estimated reading time (approx 200 words per minute -> 3.3 words per second)
    const readingTime = Math.ceil(words.length / 3.3);
    readingTimeDisplay.textContent = readingTime;
}

// Clear all text
function clearAll() {
    textInput.value = '';
    updateStatistics();  // Reset counts
}

// Copy text to clipboard
function copyText() {
    textInput.select();
    document.execCommand('copy');
    alert('Text copied to clipboard');
}

// Convert text to uppercase
function toUpperCase() {
    textInput.value = textInput.value.toUpperCase();
    updateStatistics();  // Update counts after transformation
}

// Convert text to lowercase
function toLowerCase() {
    textInput.value = textInput.value.toLowerCase();
    updateStatistics();  // Update counts after transformation
}

// Remove white spaces from text
function removeWhiteSpaces() {
    textInput.value = textInput.value.replace(/\s+/g, '');
    updateStatistics();  // Update counts after transformation
}
