const genMessage = () => {
  const formNameH = document.getElementById("form-name");
  const formPhoneH = document.getElementById("form-phone");
  const formTypeH = document.getElementById("form-type");
  const formNumberH = document.getElementById("form-number");
  const formCheckInH = document.getElementById("form-check-in");
  const formCheckOutH = document.getElementById("form-check-out");
  const formInfoH = document.getElementById("form-info");

  const message = `Nome: ${formNameH.value};\nTelefone: ${formPhoneH.value};\n` +
    `Tipologia: ${formTypeH.value};\nPessoas: ${formNumberH.value};\nEntrada: ${formCheckInH.value};\n` +
    `Saída: ${formCheckOutH.value};\nInformações:\n${formInfoH.value}`;
  alert(message);
};
