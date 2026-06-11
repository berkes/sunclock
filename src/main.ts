let debugEnabled = false;
let debugInputValue: string = "";

function listenForInteraction(): void {
  const clockEl = document.getElementById("clock");
  if (clockEl === null) throw new Error(`#clock not found`);
  clockEl.addEventListener("click", () => {
    toggleVisibility("date");
  });

  const debugForm = document.getElementById("debug-form") as HTMLFormElement;
  if (debugForm === null) throw new Error(`#debug-form not found`);
  const debugToggle = debugForm.querySelector("#debug-toggle") as HTMLInputElement;
  if (debugToggle === null) throw new Error(`#debug-toggle not found`);
  const debugInput = debugForm.querySelector("#debug-input") as HTMLInputElement;
  if (debugInput === null) throw new Error(`#debug-input not found`);

  debugInputValue = debugInput.value;

  debugToggle.addEventListener("change", (e) => {
    debugEnabled = (e.target as HTMLInputElement).checked;
  });
  debugInput.addEventListener("input", (e) => {
    debugInputValue = (e.target as HTMLInputElement).value;
  });
}

function toggleVisibility(id: string): void {
  const el = document.getElementById(id);
  if (el === null) throw new Error(`#${id} not found`);
  el.style.display = el.style.display === "none" ? "block" : "none";
}

function setText(id: string, text: string): void {
  const el = document.getElementById(id);
  if (el === null) throw new Error(`#${id} not found`);
  el.textContent = text;
}

function setHandAngle(id: string, degrees: number): void {
  const el = document.getElementById(id);
  if (el === null) throw new Error(`#${id} not found`);
  el.setAttribute("transform", `rotate(${degrees}, 100, 100)`);
}

function tick(): void {
  const now = debugEnabled ? new Date(debugInputValue) : new Date();
  const h = now.getHours() % 12;
  const m = now.getMinutes();
  const s = now.getSeconds();

  const weekday = now.toLocaleDateString(undefined, { weekday: "short" });
  const day = now.getDate();

  setHandAngle("hand-hour", h * 30 + m * 0.5);
  setHandAngle("hand-minute", m * 6 + s * 0.1);
  setHandAngle("hand-second", s * 6);

  setText("date", `${weekday} ${day}`);
}

document.addEventListener("DOMContentLoaded", () => {
  tick();
  setInterval(tick, 1000);

  listenForInteraction();
});
