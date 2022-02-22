const deepFreeze = object => {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
};
const pricesTable = deepFreeze({
  dates: [
    {start: "2022-01-03", end: "2022-03-31"}, {start: "2022-04-01", end: "2022-05-31"},
    {start: "2022-06-01", end: "2022-06-30"}, {start: "2022-07-01", end: "2022-07-15"},
    {start: "2022-07-16", end: "2022-07-31"}, {start: "2022-08-01", end: "2022-08-26"},
    {start: "2022-08-27", end: "2022-09-02"}, {start: "2022-09-03", end: "2022-09-09"},
    {start: "2022-09-10", end: "2022-09-16"}, {start: "2022-09-17", end: "2022-09-30"},
    {start: "2022-10-01", end: "2022-10-31"}, {start: "2022-11-01", end: "2022-12-29"},
    {start: "2022-12-30", end: "2023-01-01"}
  ],
  prices: {
    "T0": [35, 40, 55, 70, 85, 100, 85, 70, 60, 55, 40, 35, 110],
    "T0+1": [40, 45, 60, 75, 90, 105, 90, 75, 70, 60, 45, 40, 115],
    "T1": [45, 50, 65, 85, 100, 115, 100, 85, 80, 65, 50, 45, 125],
    "T1s": [50, 55, 75, 90, 105, 125, 105, 90, 85, 75, 55, 50, 135],
    "T1+1": [55, 60, 85, 105, 120, 140, 120, 105, 100, 85, 60, 55, 150],
    "T2": [60, 65, 95, 115, 130, 150, 130, 115, 110, 95, 65, 60, 160]
  }
});

const selectionChange = () => {
  const typeSelect = document.getElementById("type-select");
  const pricesTableElement = document.getElementById("prices-table");
  const selectedId = typeSelect.selectedOptions[0].id;
  const prices = pricesTable.prices[selectedId];
  for(let i = 0; i < prices.length; i++) {
    pricesTableElement.rows[i + 1].cells[1].innerHTML = prices[i] + "€";
  }
  calcDateRangePrice();
};
let slideIndex = 0;
const changeSlide = id => {
  const slide = document.getElementById("slide");
  const buttons = document.getElementById("slide-buttons");
  const slides = ["/pics/4-403/1181.jpg", "/pics/4-403/1182.jpg", "/pics/4-403/1183.jpg", "/pics/4-403/1187.jpg", "/pics/4-403/1196.jpg", "/pics/4-403/1200.jpg", "/pics/4-403/1333.jpg", "/pics/4-403/1338.jpg", "/pics/4-403/1342.jpg", "/pics/4-403/1344.jpg", "/pics/4-403/1345.jpg", "/pics/4-403/1348.jpg", "/pics/4-403/1352.jpg", "/pics/4-403/1357.jpg"];
  const prevSlideIndex = slideIndex;
  if(id === -1) {
    slideIndex = (slideIndex + 1) % slides.length;
  } else if(id === -2) {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  } else {
    slideIndex = id;
  }
  slide.src = slides[slideIndex];
  buttons.children[prevSlideIndex].className = "slide-n";
  buttons.children[slideIndex].className = "slide-n-a";
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
    const prices = pricesTable.prices[selectedId];
    const dates = pricesTable.dates;
    let totalPrice = 0, numberNights = 0;
    for(let date = inDate, d = inDatePicker.valueAsDate;
      date < outDate;
      d.setDate(d.getDate() + 1), date = d.toISOString().slice(0, 10)
    ) {
      for(let i = 0; i < dates.length; i++) {
        if(date >= dates[i].start && date <= dates[i].end) {
          totalPrice += prices[i];
          break;
        }
      }
      numberNights++;
    }
    priceCalcResult.innerHTML = `Preço por ${numberNights} noite(s): ${totalPrice}€`;
  } else if(inDatePicker.value === "") {
    inDatePicker.value = outDatePicker.value;
  } else if(outDatePicker.value === "") {
    outDatePicker.value = inDatePicker.value;
  }
};
