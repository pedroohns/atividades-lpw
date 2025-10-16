document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enderecoForm");
  const cep = document.getElementById("cep");
  const logradouro = document.getElementById("logradouro");
  const numero = document.getElementById("numero");
  const uf = document.getElementById("uf");

  //mascara de CEP
  cep.addEventListener("input", () => {
    let value = cep.value.replace(/\D/g, "");
    if (value.length > 5) {
      value = value.replace(/(\d{5})(\d{1,3})/, "$1-$2");
    }
    cep.value = value;
  });

  //UF sempre maiusculo
  uf.addEventListener("input", () => {
    uf.value = uf.value.toUpperCase();
  });

  //validação no envio do formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    //regex CEP: 00000-000
    const cepRegex = /^\d{5}-\d{3}$/;
    if (!cepRegex.test(cep.value)) {
      alert(" ");
      return;
    }

    if (logradouro.value.trim().length < 5) {
      alert("O logradouro deve ter pelo menos 5 caracteres.");
      return;
    }

    if (!/^\d+$/.test(numero.value)) {
      alert("O número deve conter apenas dígitos.");
      return;
    }

    if (!/^[A-Z]{2}$/.test(uf.value)) {
      alert("UF inválido! Use apenas 2 letras maiúsculas.");
      return;
    }

    alert("Endereço cadastrado com sucesso!");
    form.reset();
  });
});
