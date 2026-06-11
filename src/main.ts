function setHandAngle(id: string, degrees: number): void {
  const el = document.getElementById(id);
  if (el === null) throw new Error(`#${id} not found`);
  el.setAttribute("transform", `rotate(${degrees}, 100, 100)`);
}

function tick(): void {
  const now = new Date();
  const h = now.getHours() % 12;
  const m = now.getMinutes();
  const s = now.getSeconds();

  setHandAngle("hand-hour",   h * 30 + m * 0.5);
  setHandAngle("hand-minute", m * 6  + s * 0.1);
  setHandAngle("hand-second", s * 6);
}

tick();
setInterval(tick, 1000);
