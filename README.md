# 🧪 Selenium Product Search Test

This project is a simple automated browser test using Selenium WebDriver with JavaScript. It simulates a user searching for a product on the [Evershop demo website](https://demo.evershop.io/), selecting a random size and color, and interacting with the product page.

---

## 🔍 What the Script Does

- Opens the Chrome browser
- Goes to [demo.evershop.io](https://demo.evershop.io/)
- Searches for **"Nike air zoom pegasus 35"**
- Randomly selects:
  - A size (`M` or `L`)
  - A color (`Red`, `Black`, `Blue`, or `Green`)
- Clicks on the product and simulates user interaction

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)
- [Selenium WebDriver](https://www.selenium.dev/)
- [Chai](https://www.chaijs.com/) (for assertions – currently included but not actively used)

---

## ⚙️ Setup Instructions

### 1. Prerequisites

- Install [Node.js](https://nodejs.org/)
- Install [Google Chrome](https://www.google.com/chrome/)
- ChromeDriver (should match your Chrome version)

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
npm install selenium-webdriver chai

### 3. Run the Script

node test.js
