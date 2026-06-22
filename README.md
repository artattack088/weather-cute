# Cute weather web animation 

## Description

Weather-Cute is a simple beginner-level project built using HTML and JavaScript. It displays different weather conditions using emojis instead of complex animations. The project focuses on basic interactivity and DOM manipulation.

---

## Features

* Three buttons to switch between different weather types
* Emoji-based visual representation
* Lightweight and easy to understand
* Simple structure for beginners

---

## Tech Stack

* HTML
* JavaScript (CSS handled inside JavaScript)
* Docker

---

## Project Structure

```
weather-cute/
│── index.html
│── script.js
│── Dockerfile
```

---

## Run Locally

1. Open the project folder
2. Double-click `index.html`
   or open it using a browser like Chrome

---

## Run with Docker

### Step 1: Open terminal / PowerShell

```
cd path/to/weather-cute
```

### Step 2: Build Docker image

```
docker build -t weather-cute .
```

### Step 3: Run container

```
docker run -p 8080:80 weather-cute
```

### Step 4: Open in browser

```
http://localhost:8080
```

---

## Customization

You can modify the emojis, update the JavaScript logic, or extend the project with additional features.

---

## Learning Outcomes

* Basic DOM manipulation
* Handling UI interactions
* Running a front-end project with Docker

---

## License

This project is for learning purposes.
