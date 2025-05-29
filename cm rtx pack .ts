// popup-prank.js
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// File to track if the popup has already been shown
const flagFile = path.join(__dirname, '.popup_shown_flag');

if (fs.existsSync(flagFile)) {
  // Popup already shown; exit
  return;
}

// Create the flag so it only shows once
fs.writeFileSync(flagFile, 'Popup has been shown');

// Show the popup using a native alert depending on platform
if (process.platform === 'win32') {
  exec('mshta "javascript:alert(\'You smell funny\');close()"');
} else if (process.platform === 'darwin') {
  exec(`osascript -e 'display alert "You smell funny"'`);
} else if (process.platform === 'linux') {
  exec(`zenity --info --text="You smell funny"`);
}


