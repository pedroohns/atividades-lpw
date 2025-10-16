// mascara para o telefone
function formatarTelefone(valor) {
    valor = valor.replace(/\D/g, "");
    if (valor.length > 10) {
      valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else {
      valor = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    }
    return valor;
  }
  
  // mascara para o CPF
  function formatarCPF(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return valor;
  }
  
  // aplicaçao das mascaras enqanto usuario digita
  let telefoneInput = document.querySelector("#telefone");
  let cpfInput = document.querySelector("#cpf");
  let mensagem = document.querySelector("#mensagem");
  
  telefoneInput.addEventListener("input", (e) => {
    e.target.value = formatarTelefone(e.target.value);
  });
  
  cpfInput.addEventListener("input", (e) => {
    e.target.value = formatarCPF(e.target.value);
  });
  
  // validaçao do formulario
  document.querySelector("#formCadastro").addEventListener("submit", (e) => {
    e.preventDefault();
  
    let nome = document.querySelector("#nome").value.trim();
    let email = document.querySelector("#email").value.trim();
    let telefone = telefoneInput.value.trim();
    let cpf = cpfInput.value.trim();
    let dataNascimento = document.querySelector("#dataNascimento").value;
  
    // nome
    if (nome.length < 3) {
      mensagem.textContent = "O nome deve ter pelo menos 3 caracteres.";
      mensagem.style.color = "red";
      return;
    }
  
    // email
    if (!email.includes("@")) {
      mensagem.textContent = "O email deve conter '@'.";
      mensagem.style.color = "red";
      return;
    }
  
    // telefone
    if (telefone.length < 14) {
      mensagem.textContent = "Digite um telefone válido.";
      mensagem.style.color = "red";
      return;
    }
  
    // CPF
    if (cpf.length !== 14) {
      mensagem.textContent = "Digite um CPF válido.";
      mensagem.style.color = "red";
      return;
    }
  
    // data de nascimento
    if (!dataNascimento) {
      mensagem.textContent = "Por favor, selecione sua data de nascimento.";
      mensagem.style.color = "red";
      return;
    }
  
    let hoje = new Date();
    let nascimento = new Date(dataNascimento);
  
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    let mes = hoje.getMonth() - nascimento.getMonth();
  
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
  
    if (idade < 18) {
      mensagem.textContent = "Você precisa ter pelo menos 18 anos.";
      mensagem.style.color = "red";
      return;
    }
  
    // mensagem que aparece se estiver tudo certo
    mensagem.textContent = "Cadastro concluido com sucesso!";
    mensagem.style.color = "green";
  });
  
  
  