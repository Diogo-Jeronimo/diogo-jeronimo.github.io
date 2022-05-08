const updateCoordinates = () => {
  const cardinalsH = document.getElementById("coordinates-explicit-cardinals");
  const formatH = document.getElementById("coordinates-format");
  const textH = document.getElementById("coordinates-text");

  const latSign = cardinalsH.checked ? "N " : "";
  const lonSing = cardinalsH.checked ? "O " : "-";
  switch (formatH.selectedOptions[0].value) {
    case "DD": textH.innerHTML = `${latSign}37.0921, ${lonSing}8.1913`; break;
    case "DMS": textH.innerHTML = `${latSign}37° 5' 31.6'', ${lonSing}8° 11' 28.7''`;
  }
};
