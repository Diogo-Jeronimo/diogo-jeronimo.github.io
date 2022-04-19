const peoplePerType = {
  "T0": 2, "T0+1": 3, "T1": 4, "T1s": 4, "T1+1": 6, "T2": 6
};
const maxNumberOfType = {
  "T0": 1, "T0+1": 2, "T1": 3, "T1s": 1, "T1+1": 2, "T2": 1
};
const formPeopleH = document.getElementById("form-people");
const formTypesH = document.getElementById("form-types");
const formNumberH = document.getElementById("form-number");

const genMessage = () => {
  const formNameH = document.getElementById("form-name");
  const formPhoneH = document.getElementById("form-phone");
  const formTypeH = document.getElementById("form-type1");
  const formCheckInH = document.getElementById("form-check-in");
  const formCheckOutH = document.getElementById("form-check-out");
  const formInfoH = document.getElementById("form-info");

  const message = `Nome: ${formNameH.value};\nTelefone: ${formPhoneH.value};\n` +
    `Tipologia: ${formTypeH.value};\nPessoas: ${formPeopleH.value};\nEntrada: ${formCheckInH.value};\n` +
    `Saída: ${formCheckOutH.value};\nInformações:\n${formInfoH.value}`;
  alert(message);
};
const formNumberChanged = () => {
  for(let i = 0; i < formTypesH.children.length; i++) {
    const item = formTypesH.children[i];
    item.hidden = item.children[0].disabled = i >= formNumberH.value;
  }
  formTypeChanged();
};
const formTypeChanged = () => {
  /*const typeCount = {
    "T0": 0, "T0+1": 0, "T1": 0, "T1s": 0, "T1+1": 0, "T2": 0
  };
  for(const item of formTypesH.children) {
    if(!item.classList.contains("form-type-n-a")) {
      typeCount[item.children[0].value]++;
    }
  }
  console.log(typeCount);
  const maxedTypes = [];
  const availableTypes = [];
  for(const type in typeCount) {
    if(typeCount[type] === maxNumberOfType[type]) {
      maxedTypes.push(type);
    } else {
      availableTypes.push(type);
    }
  }
  console.log(maxedTypes);
  for(const item of formTypesH.children) {
    if(!item.classList.contains("form-type-n-a")) {
      const type = item.children[0];
      for(const maxedType of maxedTypes) {
        if(maxedType !== type.value) {
          for(const option of type) {
            if(option.value === maxedType) {
              option.classList.add("form-type-option-n-a");
              break;
            }
          }
        }
      }
      for(const availableType of availableTypes) {

      }
    }
  }//*/

  let maxPeople = 0;
  for(const item of formTypesH.children) {
    if(!item.hidden) {
      maxPeople += peoplePerType[item.children[0].value];
    }
  }
  for(let i = 0; i < formPeopleH.length; i++) {
    formPeopleH[i].disabled = formPeopleH[i].hidden = i >= maxPeople;
  }
};
