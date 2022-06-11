const isEN = document.URL.includes("/en/");
const descriptions = isEN ? {
  "T0": ".",
  "T0+1": ".",
  "T1": ".",
  "T1s": ".",
  "T1+1": ".",
  "T2": "."
} : {
  "T0": "Sala comum com duas camas, kitchenette e casa de banho completa, capacidade para 2 pessoas.",
  "T0+1": "Sala comum com dois sofás mais uma cama de casal, kittchenette e casa de banho completa, mais um quarto pequeno com uma cama single capacidade total para 3 pessoas.",
  "T1": "Sala com sofá cama para duas pessoas, um quarto, kitchenette e casa de banho completa. Máximo 4 pessoas.",
  "T1s": "T1 superior com um terraço grande que rodeia todo o apartamento e com sol todo o dia.",
  "T1+1": "Sala com sofá cama para duas pessoas, um quarto com cama de casal e mais outro quarto com duas camas individuais ambos com terraço, cozinha e casa de banho completa. Máximo 6 pessoas.",
  "T2": "Sala com sofá cama para duas pessoas, um quarto com cama de casal com terraço e janela e mais outro quarto interior sem janela nem terraço mas ventilado, kitcnenette e casa de banho completa. Máximo 5 pessoas."
};
const pricesTable = {
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
};
const slidesTable = {
  "T0": {id: 13037, slides: ["/pics/4-403/1181.med.jpg", "/pics/4-403/1182.med.jpg", "/pics/4-403/1183.med.jpg", "/pics/4-403/1187.med.jpg", "/pics/4-403/1196.med.jpg", "/pics/4-403/1200.med.jpg", "/pics/4-403/1333.med.jpg", "/pics/4-403/1338.med.jpg", "/pics/4-403/1342.med.jpg", "/pics/4-403/1344.med.jpg", "/pics/4-403/1345.med.jpg", "/pics/4-403/1348.med.jpg", "/pics/4-403/1352.med.jpg", "/pics/4-403/1357.med.jpg"]},
  "T0+1": {id: 49298, slides: ["/pics/6-102/1152.med.jpg", "/pics/6-102/1153.med.jpg", "/pics/6-102/1154.med.jpg", "/pics/6-102/1161.med.jpg", "/pics/6-102/1163.med.jpg", "/pics/6-102/1188.med.jpg", "/pics/6-102/1190.med.jpg", "/pics/6-102/1274.med.jpg", "/pics/6-102/1292.med.jpg", "/pics/6-102/1294.med.jpg", "/pics/6-102/1363.med.jpg", "/pics/6-102/1366.med.jpg", "/pics/6-102/1368.med.jpg", "/pics/6-102/1374.med.jpg"]},
  "T1": {id: 22535, slides: ["/pics/4-105/1093.med.jpg", "/pics/4-105/1094.med.jpg", "/pics/4-105/1096.med.jpg", "/pics/4-105/1097.med.jpg", "/pics/4-105/1102.med.jpg", "/pics/4-105/1103.med.jpg", "/pics/4-105/1104.med.jpg", "/pics/4-105/1105.med.jpg", "/pics/4-105/1106.med.jpg", "/pics/4-105/1107.med.jpg", "/pics/4-105/1109.med.jpg", "/pics/4-105/1110.med.jpg", "/pics/4-105/1112.med.jpg"]},
  "T1s": {id: 22517, slides: ["/pics/4-305/0821.med.jpg", "/pics/4-305/0826.med.jpg", "/pics/4-305/0827.med.jpg", "/pics/4-305/0828.med.jpg", "/pics/4-305/0829.med.jpg", "/pics/4-305/0834.med.jpg", "/pics/4-305/0835.med.jpg", "/pics/4-305/0838.med.jpg", "/pics/4-305/0842.med.jpg", "/pics/4-305/0920.med.jpg", "/pics/4-305/0936.med.jpg"]},
  "T1+1": {id: 55772, slides: ["/pics/4-201/0715.med.jpg", "/pics/4-201/0717.med.jpg", "/pics/4-201/0718.med.jpg", "/pics/4-201/0722.med.jpg", "/pics/4-201/0723.med.jpg", "/pics/4-201/0728.med.jpg", "/pics/4-201/0729.med.jpg", "/pics/4-201/0730.med.jpg", "/pics/4-201/0732.med.jpg", "/pics/4-201/0733.med.jpg", "/pics/4-201/0739.med.jpg", "/pics/4-201/0743.med.jpg", "/pics/4-201/0746.med.jpg", "/pics/4-201/0749.med.jpg", "/pics/4-201/0754.med.jpg", "/pics/4-201/0757.med.jpg", "/pics/4-201/1348.med.jpg"]},
  "T2": {id: 22536, slides: ["/pics/4-106/0669.med.jpg", "/pics/4-106/0675.med.jpg", "/pics/4-106/0678.med.jpg", "/pics/4-106/0682.med.jpg", "/pics/4-106/0683.med.jpg", "/pics/4-106/0686.med.jpg", "/pics/4-106/0687.med.jpg", "/pics/4-106/0688.med.jpg", "/pics/4-106/0690.med.jpg", "/pics/4-106/0693.med.jpg", "/pics/4-106/0695.med.jpg", "/pics/4-106/0697.med.jpg", "/pics/4-106/0699.med.jpg", "/pics/4-106/0702.med.jpg", "/pics/4-106/0703.med.jpg", "/pics/4-106/0704.med.jpg", "/pics/4-106/0705.med.jpg", "/pics/4-106/0708.med.jpg"]}
};

const typeSelect = document.getElementById("type-select");
const slideButtons = document.getElementById("slide-buttons");
const selectionChange = () => {
  const tooltip = document.getElementById("type-select-tooltip");
  const pricesTableElement = document.getElementById("prices-table");
  const slideCaption = document.getElementById("slide-caption");
  const selectedId = typeSelect.selectedOptions[0].id;
  const prices = pricesTable.prices[selectedId];
  const buttons = slideButtons.children;
  tooltip.innerHTML = descriptions[selectedId];
  changeSlide(0);
  for(let i = 1; i < buttons.length; i++) {
    if(i < slidesTable[selectedId].slides.length) {
      buttons[i].classList.remove("sb-hidden");
      buttons[i].hidden = false;
    } else {
      buttons[i].classList.add("sb-hidden");
      buttons[i].hidden = true;
    }
  }
  if(!isEN) {
    slideCaption.innerHTML = "Alojamento Local: " + slidesTable[selectedId].id;
  }
  for(let i = 0; i < prices.length; i++) {
    pricesTableElement.rows[i + 1].cells[1].innerHTML = prices[i] + "€";
  }
  calcDateRangePrice();
};
let slideIndex = 0;
const changeSlide = id => {
  const slide = document.getElementById("slide");
  const selectedId = typeSelect.selectedOptions[0].id;
  const slides = slidesTable[selectedId].slides;
  const prevSlideIndex = slideIndex;
  if(id === -1) {
    slideIndex = (slideIndex + 1) % slides.length;
  } else if(id === -2) {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  } else {
    slideIndex = id;
  }
  slide.src = slides[slideIndex];
  slideButtons.children[prevSlideIndex].classList.remove("sb-displayed");
  slideButtons.children[slideIndex].classList.add("sb-displayed");
};
const calcDateRangePrice = () => {
  const inDatePicker = document.getElementById("check-in-date-picker");
  const outDatePicker = document.getElementById("check-out-date-picker");
  if(inDatePicker.value !== "" && outDatePicker.value !== "") {
    const priceCalcResult = document.getElementById("price-calc-result");
    const selectedId = typeSelect.selectedOptions[0].id;
    let inDate = inDatePicker.value;
    let outDate = outDatePicker.value;
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
    priceCalcResult.innerHTML = isEN ? `Price for ${numberNights} night(s): ${totalPrice}€` : `Preço por ${numberNights} noite(s): ${totalPrice}€`;
  } else if(inDatePicker.value === "") {
    inDatePicker.value = outDatePicker.value;
  } else if(outDatePicker.value === "") {
    outDatePicker.value = inDatePicker.value;
  }
  inDatePicker.max = outDatePicker.value;
  outDatePicker.min = inDatePicker.value;
};
