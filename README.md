# 🎯 Number Guessing Game

A simple interactive number guessing game built with **vanilla JavaScript** and **HTML**.  
The game prompts the user to guess a randomly generated number within a user-defined range, offering feedback and tracking the number of attempts.

---

## 🧠 Project Overview

- Prompts the user to enter a maximum number (defines the guessing range).
- Randomly generates a target number between 1 and the user’s input.
- Asks the user to guess until they:
  - Guess correctly ✅
  - Choose to quit by entering `'q'` ❌
- Provides feedback ("Too high", "Too low") after each guess.
- Displays number of attempts upon success.

---

## 🔧 How It Works

1. User inputs the maximum number.
2. Game randomly selects a number between 1 and that maximum.
3. The user is prompted to guess the number until correct or quitting.
4. The number of attempts is shown via `alert()` and `console.log()`.

---

## 💻 Technologies Used

| Technology | Purpose                       |
|------------|-------------------------------|
| HTML5      | Loads and links the JS script |
| JavaScript | Game logic and interactivity  |

---

## 📁 File Structure

```

number-guessing-game/
├── index.html    # Minimal HTML structure
├── app.js        # Core game logic
└── README.md     # Project documentation

```

---

## 🚀 How to Run

1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Use the prompt windows to interact with the game.
4. (Optional) Open your browser’s **console** to view debug logs.

---

## ✨ What You'll Learn

- `prompt()`, `alert()`, and `console.log()` for user I/O  
- Input validation using `parseInt()` and conditionals  
- Looping logic with `while` and `break`  
- Random number generation using `Math.random()` and `Math.floor()`  

---

## 💡 Future Enhancements

- Build a **UI-based version** using input fields and buttons  
- Add **difficulty levels** or countdown timers  
- Track **high scores** using `localStorage`  
- Add a **restart option** after game ends

---

## 🙋‍♂️ Author

**Prabhdev Khanijaon**  
Junior Full Stack Developer | Passionate about clean logic and interactive web projects

---

## ✅ Why This Project Matters

This game is a classic exercise to strengthen control flow, user interaction, and basic JavaScript logic — all core to becoming a strong front-end or full stack developer.

---

Feel free to fork, star ⭐, or build upon it!
