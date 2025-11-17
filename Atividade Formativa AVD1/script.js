document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enderecoForm");
  const cep = document.getElementById("cep");
  const bairro = document.getElementById("bairro");
  const cidade = document.getElementById("cidade");
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

  //CONSULTA DE CEP VIA API - ATIVIDADE PARA ENTREGAR DIA 24/11 (UTILIZANDO VIACEP)
  cep.addEventListener("blur", () => {
    let cepLimpo = cep.value.replace(/\D/g, "");
    if (cepLimpo.length !== 8) { //tentei fazer de uma forma diferente que fiz no projeto
      alert("CEP invalido! Digite um CEP completo."); //creio que possa aparecer o alert mesmo que nao tenha digitado nada
      return;
    }

    const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;

    fetch(url)
    .then(resposta => resposta.json())
    .then(dados => {
      console.log(dados);

      if (dados.erro) {
        alert("CEP não encontrado. Tente outro CEP.");
        return;
      }

      logradouro.value = dados.logradouro;
      bairro.value = dados.bairro;
      cidade.value = dados.localidade;
      uf.value = dados.uf
    });

  }); //no meu pc, testando varios CEPs nao chegou a dar esse problema do alert aparecer sem fazer nada, mas CREIO, CREIO que isso possa acontecer, vou ver se consigo resolver isso mais tarde (ATUALIZAÇÃO: ACREDITO QUE O PROBLEMA ESTEJA ATRIBUIDO AO FATO DE EU NAO TER DADO NENHUMA FUNÇÃO AO BOTÃO "validarCep" - vou remover o botao e manter apenas o blur normal mesmo, nao acredito que seja necessario - ATUALIZAÇÃO 2: realmente era o botao + blur que tava causando isso, queria colocar o botao por motivos esteticos mesmo, mas como o exercicio nao pede, entao vou remover por completo, de resto, tudo funcionando perfeitamente, inclusive no log do inspecionar do navegador)
});
