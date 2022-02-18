const selectionChange = () => {
  const typeSelect = document.getElementById("type-select");
  const pricesTable = document.getElementById("prices-table");
  const selectedId = typeSelect.selectedOptions[0].id;
  const prices = getPricesOf(selectedId).prices;
  for(let i = 0; i < prices.length; i++) {
    pricesTable.rows[i + 1].cells[1].innerHTML = prices[i] + "€";
  }
  calcDateRangePrice();
};
const calcDateRangePrice = () => {
  const inDatePicker = document.getElementById("check-in-date-picker");
  const outDatePicker = document.getElementById("check-out-date-picker");
  if(inDatePicker.value !== "" && outDatePicker.value !== "") {
    const typeSelect = document.getElementById("type-select");
    const priceCalcResult = document.getElementById("price-calc-result");
    const selectedId = typeSelect.selectedOptions[0].id;
    let inDate = inDatePicker.value;
    let outDate = outDatePicker.value;
    if(inDate > outDate) {
      [inDate, outDate] = [outDate, inDate];
      [inDatePicker.value, outDatePicker.value] = [outDatePicker.value, inDatePicker.value];
    }
    const pricesObj = getPricesOf(selectedId);
    let totalPrice = 0, numberNights = 0;
    for(let date = inDate, d = inDatePicker.valueAsDate;
      date <= outDate;
      d.setDate(d.getDate() + 1), date = d.toISOString().slice(0, 10)
    ) {
      for(let i = 0; i < pricesObj.dates.length; i++) {
        if(date >= pricesObj.dates[i][0] && date <= pricesObj.dates[i][1]) {
          totalPrice += pricesObj.prices[i];
          break;
        }
      }
      numberNights++;
    }
    priceCalcResult.innerHTML = `Preço por ${numberNights} noite(s): ${totalPrice}€`;
  }
};
const getPricesOf = optionId => {
  let prices;
  switch (optionId) {
    case "T0+1": prices = [40, 45, 60, 75, 90, 105, 90, 75, 70, 60, 45, 40, 115]; break;
    case "T1": prices = [45, 50, 65, 85, 100, 115, 100, 85, 80, 65, 50, 45, 125]; break;
    case "T1s": prices = [50, 55, 75, 90, 105, 125, 105, 90, 85, 75, 55, 50, 135]; break;
    case "T1+1": prices = [55, 60, 85, 105, 120, 140, 120, 105, 100, 85, 60, 55, 150]; break;
    case "T2": prices = [60, 65, 95, 115, 130, 150, 130, 115, 110, 95, 65, 60, 160]; break;
    default: prices = [35, 40, 55, 70, 85, 100, 85, 70, 60, 55, 40, 35, 110];
  }
  return {
    dates: [
      ["2022-01-03", "2022-03-31"], ["2022-04-01", "2022-05-31"], ["2022-06-01", "2022-06-30"],
      ["2022-07-01", "2022-07-15"], ["2022-07-16", "2022-07-31"], ["2022-08-01", "2022-08-26"],
      ["2022-08-27", "2022-09-02"], ["2022-09-03", "2022-09-09"], ["2022-09-10", "2022-09-16"],
      ["2022-09-17", "2022-09-30"], ["2022-10-01", "2022-10-31"], ["2022-11-01", "2022-12-29"], ["2022-12-30", "2023-01-01"]
    ],
    prices: prices
  };
};
