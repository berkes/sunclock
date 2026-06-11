const clock = document.getElementById("clock") as SVGSVGElement | null;

if (clock === null) {
  throw new Error("Could not find #clock element");
}

console.log("Sun Clock initialised", clock);
