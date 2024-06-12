const areaCeilingElement = document.getElementById("area-ceiling");
const areaWallsElement = document.getElementById("area-walls");
const totalAreaElement = document.getElementById("total-area");
const input1Element = document.getElementById("input1");
const input2Element = document.getElementById("input2");
const input3Element = document.getElementById("input3");
const submitBtn = document.getElementById("submit");

function calculateArea(length, width, height) {
  const areaCeiling = length * width;
  const areaWalls = 2 * (length * height) + 2 * (width * height);
  const totalArea = 2 * areaCeiling + areaWalls;
  return {
    areaCeiling,
    areaWalls,
    totalArea,
  };
}

submitBtn.onclick = function () {
  const length = Number(input1Element.value);
  const width = Number(input2Element.value);
  const height = Number(input3Element.value);

  const { areaCeiling, areaWalls, totalArea } = calculateArea(
    length,
    width,
    height
  );
  areaCeilingElement.textContent = areaCeiling.toFixed(2) + " m²";
  areaWallsElement.textContent = areaWalls.toFixed(2) + " m²";
  totalAreaElement.textContent = totalArea.toFixed(2) + " m²";
};
