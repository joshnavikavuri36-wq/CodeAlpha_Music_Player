🎵 Supported Languages

The music player currently includes language filters for:

Telugu
Hindi
English
Tamil
Kannada
Malayalam
Bengali
Marathi
Punjabi

More languages can be added easily.

🚀 How to Run the Project
Step 1: Download the Project

Download or clone this project to your computer.

Step 2: Open the Project

Open the project folder in Visual Studio Code.

Step 3: Check the Music Folder

Make sure the music folder is located in the same folder as index.html.

Example:

Music-Player/
├── index.html
├── style.css
├── script.js
└── music/
Step 4: Run the Website

You can simply open:

index.html

in your browser.

For a better development experience, use the Live Server extension in VS Code.

Using Live Server
Open the project in VS Code.
Install the Live Server extension.
Right-click index.html.
Click Open with Live Server.
The Music Player will open in your browser.
🎧 Adding New Songs

To add a new song, place the MP3 file inside the music folder.

For example:

music/
└── my-song.mp3

Then add the song information to the songs array in script.js.

Example:

{
    id: 13,
    title: "My New Song",
    artist: "Artist Name",
    album: "My Album",
    language: "Telugu",
    src: "music/my-song.mp3"
}

Make sure the filename in script.js exactly matches the filename inside the music folder.

🔎 Search Feature

The search bar allows users to search for songs using:

Song title
Artist name
Album name
Language

For example:

Telugu
Melody
Demo Artist
Morning
🌎 Language Filter

Users can select a language from the language filter buttons.

Example:

All
Telugu
Hindi
English
Tamil
Kannada
Malayalam
Bengali
Marathi
Punjabi

Selecting a language displays only songs belonging to that language.

❤️ Favorites

Users can click the heart button to add a song to Favorites.

Favorites are stored using browser localStorage.

This means the favorite songs remain saved when the page is reopened in the same browser.

⬇️ Download Feature

Each song has a download button.

The player uses the HTML download functionality to allow downloading of local/authorized audio files.

Only use the download feature for audio files that you have permission to download or redistribute.

🔀 Shuffle

The Shuffle button randomly selects another song from the playlist.

Click the Shuffle button to enable or disable shuffle mode.

🔁 Repeat

The Repeat button allows the current song to play again after it finishes.

🔊 Volume Control

The player includes:

Volume slider
Mute button
Unmute button
Volume percentage display
⌨️ Keyboard Controls
Keyboard Key	Function
Space	Play / Pause
→	Next Song
←	Previous Song
↑	Increase Volume
↓	Decrease Volume
🌙 Theme

The website supports two themes:

Dark Mode
Light Mode

The selected theme is saved using localStorage.

📱 Responsive Design

The Music Player is designed to work on:

Desktop
Laptop
Tablet
Mobile

The layout automatically adjusts according to the screen size.

💿 Music Player Interface

The player includes a vinyl-style animated album section.

When a song is playing, the vinyl record rotates automatically.

🎯 Project Objective

The main objective of this project is to create an interactive and responsive music player using front-end web technologies.

The project demonstrates the use of:

HTML structure
CSS styling
CSS animations
JavaScript DOM manipulation
JavaScript events
HTML Audio API
LocalStorage
Responsive web design
🔮 Future Improvements

The project can be improved by adding:

🎤 Lyrics display
📊 Audio visualizer
🎼 Multiple playlists
📤 Music upload feature
📝 Edit song information
🕘 Recently played songs
☁️ Cloud music storage
👤 User accounts
📱 Progressive Web App
🌐 Properly licensed online music streaming
🎧 Playlist management
🔔 Notifications
🔐 Copyright Notice

The Music Player code is designed to work with local audio files.

Users should only add music files that they own or have permission to use.

Do not use copyrighted commercial music recordings without the appropriate permission or license.

👩‍💻 Author

K. Joshnavi

B.Tech – Computer Science and Engineering (AI & ML)

📄 License

This project is created for educational and project demonstration purposes.

The source code may be modified for educational use.

Audio files may have separate licenses or permissions. Always follow the license associated with each audio recording.

⭐ Project Highlights
🎵 Modern Music Player
🔎 Powerful Search
🌎 Multiple Languages
❤️ Favorites
⬇️ Download
🔀 Shuffle
🔁 Repeat
🔊 Volume Control
🌙 Dark/Light Mode
📱 Responsive Design
💿 Animated Vinyl Player
⌨️ Keyboard Controls
