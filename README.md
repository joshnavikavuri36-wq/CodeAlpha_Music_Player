# 🧮 Smart Calculator

A modern, fast, responsive, and user-friendly calculator built using **HTML, CSS, and JavaScript**.

This project provides basic arithmetic operations along with calculation history, keyboard support, dark/light mode, responsive design, and an easy-to-use interface.

---

## 📌 Project Overview

The **Smart Calculator** is a web-based calculator designed to perform everyday mathematical calculations quickly and easily.

It provides a clean user interface with a display screen and interactive buttons for performing calculations.

The calculator supports:

* Addition
* Subtraction
* Multiplication
* Division
* Percentage
* Decimal calculations
* Calculation history
* Clear and delete functions
* Keyboard input
* Dark/Light mode
* Responsive design

---

## ✨ Features

### ➕ Basic Arithmetic Operations

The calculator supports all required arithmetic operations:

* `+` Addition
* `−` Subtraction
* `×` Multiplication
* `÷` Division

### 📜 Calculation History

The calculator automatically stores completed calculations.

Example:

```text
25 + 10 = 35
100 ÷ 4 = 25
50 × 2 = 100
```

The history section allows users to:

* View previous calculations
* Click a previous calculation to reuse its result
* Delete individual history entries
* Clear all calculation history

The history is stored using **Local Storage**, so previous calculations remain available even after refreshing or reopening the browser.

### ⌨️ Keyboard Support

The calculator supports keyboard input.

| Keyboard Key | Function       |
| ------------ | -------------- |
| `0–9`        | Numbers        |
| `+`          | Addition       |
| `-`          | Subtraction    |
| `*`          | Multiplication |
| `/`          | Division       |
| `.`          | Decimal        |
| `Enter`      | Calculate      |
| `Backspace`  | Delete         |
| `Esc`        | Clear          |
| `%`          | Percentage     |

### 🌓 Dark and Light Mode

A theme button allows users to switch between:

* Light mode
* Dark mode

### 📱 Responsive Design

The calculator works on:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile phones
* 📲 Tablets

The interface automatically adjusts to different screen sizes.

### ⚡ Fast Performance

The project uses only:

* HTML
* CSS
* JavaScript

No external frameworks or libraries are required.

This keeps the application lightweight and fast.

### ♿ User Friendly and Accessible

The calculator includes:

* Clear buttons
* Large touch-friendly controls
* Keyboard support
* Accessible button labels
* Responsive layout
* High readability
* Reduced-motion support

---

## 🛠️ Technologies Used

### HTML5

Used to create the structure of the calculator.

### CSS3

Used for:

* Responsive design
* Layout
* Colors
* Animations
* Hover effects
* Dark mode
* Mobile compatibility

### JavaScript

Used for:

* Calculator operations
* User input handling
* Real-time display
* Calculation history
* Local Storage
* Keyboard support
* Error handling

---

## 📂 Project Structure

```text
Calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure of the calculator, including:

* Display screen
* Number buttons
* Operator buttons
* History section
* Theme button

### `style.css`

Contains all visual styling, including:

* Calculator layout
* Responsive design
* Button styles
* Animations
* Dark mode
* History section

### `script.js`

Contains the calculator functionality, including:

* Arithmetic calculations
* Input handling
* History management
* Local Storage
* Keyboard support
* Percentage calculations
* Error handling

---

## 🚀 How to Run the Project

### Step 1: Download or Clone the Repository

Clone the project using:

```bash
git clone https://github.com/your-username/calculator.git
```

Or download the project as a ZIP file.

### Step 2: Open the Project

Open the project folder in **Visual Studio Code** or any code editor.

### Step 3: Run the Calculator

Open:

```text
index.html
```

in your web browser.

You can also use the **Live Server** extension in Visual Studio Code.

---

## 🧮 Example Calculations

### Addition

```text
25 + 15 = 40
```

### Subtraction

```text
50 - 20 = 30
```

### Multiplication

```text
12 × 5 = 60
```

### Division

```text
100 ÷ 4 = 25
```

### Percentage

```text
500 → % → 5
```

### Decimal Calculation

```text
12.5 + 7.5 = 20
```

---

## ⚠️ Error Handling

The calculator handles invalid division operations.

For example:

```text
10 ÷ 0
```

The calculator displays:

```text
Error
```

and shows:

```text
Cannot divide by zero
```

---

## 💾 Local Storage

Calculation history is stored in the browser using:

```javascript
localStorage
```

This means users don't need:

* Database
* Backend server
* Login system
* Internet connection

for storing their calculator history locally.

---

## 🎨 User Interface

The interface includes:

* Modern calculator design
* Rounded buttons
* Smooth animations
* Responsive display
* History panel
* Theme switcher
* Touch-friendly controls

---

## 📱 Responsive Compatibility

The calculator is designed to work across different screen sizes.

### Desktop

```text
┌───────────────────────────┐
│       Calculator          │
│                           │
│              1250         │
│                           │
│  AC  ⌫  %  ÷              │
│  7   8   9  ×             │
│  4   5   6  −             │
│  1   2   3  +             │
│  0   0   .  =             │
│                           │
│ Calculation History       │
└───────────────────────────┘
```

### Mobile

The calculator automatically adjusts its size to fit smaller screens.

---

## 🔮 Future Improvements

The project can be extended with additional features such as:

* Scientific calculator mode
* Square root
* Power functions
* Trigonometric functions
* Calculation history search
* Copy result button
* Sound effects
* More themes
* Currency conversion
* Unit conversion
* PWA/mobile app support

---

## 🎯 Project Objective

The main objective of this project is to develop a simple and interactive calculator using **HTML, CSS, and JavaScript** while implementing:

* User interface design
* Event handling
* JavaScript calculations
* Responsive web design
* Local Storage
* Keyboard interaction
* User-friendly functionality

---

## 📚 Learning Outcomes

Through this project, the following concepts are practiced:

* HTML semantic structure
* CSS Grid
* CSS responsive design
* CSS animations
* JavaScript DOM manipulation
* JavaScript event handling
* Functions
* Conditional statements
* Arithmetic operators
* Local Storage
* Keyboard events
* Error handling

---

## 👩‍💻 Author

**K. Joshnavi**

B.Tech – Computer Science and Engineering (AI & Machine Learning)

---

## 📄 License

This project is created for **educational and internship/project purposes**.

You are free to modify and improve the project for your learning and development.

---

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.

**Thank you for checking out the Smart Calculator! 🧮**
