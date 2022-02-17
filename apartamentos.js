const notifySelectionChange = () => {
  const typeSelect = document.getElementById("type-select");
  const pricesTable = document.getElementById("prices-table");
  const selectedId = typeSelect.selectedOptions[0].id;
  let prices;
  switch (selectedId) {
    case "T0+1": prices = [40, 45, 60, 75, 90, 105, 90, 75, 70, 60, 45, 40, 115]; break;
    case "T1": prices = [45, 50, 65, 85, 100, 115, 100, 85, 80, 65, 50, 45, 125]; break;
    case "T1s": prices = [50, 55, 75, 90, 105, 125, 105, 90, 85, 75, 55, 50, 135]; break;
    case "T1+1": prices = [55, 60, 85, 105, 120, 140, 120, 105, 100, 85, 60, 55, 150]; break;
    case "T2": prices = [60, 65, 95, 115, 130, 150, 130, 115, 110, 95, 65, 60, 160]; break;
    default: prices = [35, 40, 55, 70, 85, 100, 85, 70, 60, 55, 40, 35, 110];
  }
  for(let i = 0; i < prices.length; i++) {
    pricesTable.rows[i + 1].cells[1].innerHTML = prices[i] + "€";
  }
};
