document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.innerHTML = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      font-family: "Courier New", monospace;
      transition: background 1s ease;
    }

    #scene {
      width: 100%;
      height: 100%;
      position: relative;
    }

    .sun {
      position: absolute;
      top: 40px;
      left: 40px;
      font-size: 90px;
      animation: spin 14s linear infinite;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .cloud {
      position: absolute;
      font-size: 130px;
      opacity: 0.95;
      animation: moveClouds 35s linear infinite;
    }

    .cloud1 { top: 110px; left: -200px; }
    .cloud2 { top: 160px; left: -500px; animation-delay: 8s; }
    .cloud3 { top: 130px; left: -800px; animation-delay: 16s; }

    @keyframes moveClouds {
      from { transform: translateX(0); }
      to { transform: translateX(160vw); }
    }

    #rain span {
      position: absolute;
      font-size: 18px;
      animation: rainFall 1.3s linear infinite;
    }

    @keyframes rainFall {
      from { transform: translateY(-10vh); }
      to { transform: translateY(110vh); }
    }

    #snow span {
      position: absolute;
      font-size: 18px;
      animation: snowFall 4s linear infinite;
    }

    @keyframes snowFall {
      from { transform: translateY(-10vh); }
      to { transform: translateY(110vh); }
    }

    #controls {
      position: fixed;
      bottom: 20px;
      right: 20px;
      display: flex;
      gap: 10px;
    }

    #controls button {
      width: 52px;
      height: 52px;
      font-size: 22px;
      background: #ffeaa7;
      border: 3px solid #2d3436;
      border-radius: 6px;
      cursor: pointer;
      box-shadow: 4px 4px 0 #2d3436;
    }

    #controls button:active {
      transform: translate(3px, 3px);
      box-shadow: 1px 1px 0 #2d3436;
    }
  `;
  document.head.appendChild(style);

  // Default weather
  setWeather("sunny");
});

/* ===============================
   WEATHER LOGIC
================================ */

const rain = document.getElementById("rain");
const snow = document.getElementById("snow");

function clearEffects() {
  rain.innerHTML = "";
  snow.innerHTML = "";
}

function setBackground(top, bottom) {
  document.body.style.background =
    `linear-gradient(180deg, ${top}, ${bottom})`;
}

function setWeather(type) {
  clearEffects();

  if (type === "sunny") {
    setBackground("#87cefa", "#ffeaa7");
  }

  if (type === "rainy") {
    setBackground("#74b9ff", "#a29bfe");

    for (let i = 0; i < 90; i++) {
      const drop = document.createElement("span");
      drop.textContent = "💧";
      drop.style.left = Math.random() * 100 + "vw";
      drop.style.color = "#0984e3";
      drop.style.animationDelay = Math.random() + "s";
      rain.appendChild(drop);
    }
  }

  if (type === "snowy") {
    setBackground("#dfe6e9", "#ffffff");

    for (let i = 0; i < 70; i++) {
      const flake = document.createElement("span");
      flake.textContent = "❄";
      flake.style.left = Math.random() * 100 + "vw";
      flake.style.color = "#74b9ff";
      flake.style.animationDelay = Math.random() * 3 + "s";
      snow.appendChild(flake);
    }
  }
}
