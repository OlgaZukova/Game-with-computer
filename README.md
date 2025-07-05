A simple browser-based game where the user plays a guessing game against the computer.
![image](https://github.com/user-attachments/assets/b0eda51b-e560-4923-b722-eab69df57071)
How It Works: index.html:
Sets up the form for user input.
Includes SweetAlert2 via CDN.
Links to the JS logic and CSS styles.
index.js:
Reads user guess from the input.
Generates a random number for the computer.
Compares the two and, on match, displays a SweetAlert2 modal with:
Title: "Victory!!!"
Custom image (victory.jpg)
Configured size (imageWidth: 600, imageHeight: 400)
style.css:
Provides responsive design for mobile and desktop.
Styles the input, buttons, headings, and layout.
victory.jpg
Displayed inside the SweetAlert2 popup on a win.
