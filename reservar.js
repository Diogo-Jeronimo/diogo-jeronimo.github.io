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
  const formCheckInH = document.getElementById("form-check-in");
  const formCheckOutH = document.getElementById("form-check-out");
  const formInfoH = document.getElementById("form-info");

  let message = `Nome: ${formNameH.value};\nTelefone: ${formPhoneH.value};\nTipologias: `;
  for(let i = 0; i < formNumberH.value; i++) {
    message += `${formTypesH.children[i].children[0].value},`;
  }
  message = (message += ";\n").replace(",;", ";");
  message += `Pessoas: ${formPeopleH.value};\nEntrada: ${formCheckInH.value};\n` +
    `Saída: ${formCheckOutH.value};\n`;
  if(formInfoH.value !== "") {
    message += `Informações:\n${formInfoH.value}`;
  }
  alert(message);
};
const formNumberChanged = () => {
  for(let i = 0; i < formTypesH.children.length; i++) {
    const item = formTypesH.children[i];
    const type = item.children[0];
    if(i < formNumberH.value) {
      item.hidden = type.disabled = false;
    } else {
      item.hidden = type.disabled = true;
      type[2].selected = true;
    }
  }
  formTypeChanged();
};
const formTypeChanged = () => {
  const typeCounts = {
    "T0": 0, "T0+1": 0, "T1": 0, "T1s": 0, "T1+1": 0, "T2": 0
  };
  for(const item of formTypesH.children) {
    if(!item.hidden) {
      typeCounts[item.children[0].value]++;
    }
  }
  for(const item of formTypesH.children) {
    if(!item.hidden) {
      const type = item.children[0];
      for(const typeCount in typeCounts) {
        if(typeCounts[typeCount] === maxNumberOfType[typeCount]) {
          if(typeCount !== type.value) {
            for(const option of type) {
              if(option.value === typeCount) {
                option.hidden = option.disabled = true;
                break;
              }
            }
          }
        } else {
          for(const option of type) {
            if(option.value === typeCount) {
              option.hidden = option.disabled = false;
              break;
            }
          }
        }
      }
    }
  }

  let maxPeople = 0;
  for(const item of formTypesH.children) {
    if(!item.hidden) {
      maxPeople += peoplePerType[item.children[0].value];
    }
  }
  for(let i = 0; i < formPeopleH.length; i++) {
    if(i < maxPeople) {
      formPeopleH[i].disabled = formPeopleH[i].hidden = false;
    } else {
      formPeopleH[i].disabled = formPeopleH[i].hidden = true;
      if(formPeopleH[i].selected) {
        formPeopleH[0].selected = true;
      }
    }
  }
};
