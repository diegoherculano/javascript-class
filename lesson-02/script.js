function getCep(numCep) {
  return fetch(`https://viacep.com.br/ws/${numCep}/json/`);
}

function fillAddressForm(body) {
  document.querySelector("#rua").value = body.logradouro;
  document.querySelector("#bairro").value = body.bairro;
  document.querySelector("#estado").value = body.uf;
  document.querySelector("#cidade").value = body.localidade;
  document.querySelector("#numero").focus();
}

function resetFormValues() {
  document.querySelector("#rua").value = "";
  document.querySelector("#bairro").value = "";
  document.querySelector("#estado").value = "";
  document.querySelector("#cidade").value = "";
  document.querySelector("#numero").value = "";
  document.querySelector("#errorMsg").className = "error closed";
}

const button = document.querySelector("#cep");

button.addEventListener("focusout", (el) => {
  if (el.target.value.length > 0) {
    document.querySelector("#loadingMsg").className = "";
    resetFormValues();

    getCep(el.target.value)
      .then((res) => {
        res.json().then((body) => {
          fillAddressForm(body);
        });
      })
      .catch((err) => {
        document.querySelector("#errorMsg").className = "error";
      })
      .finally(() => {
        document.querySelector("#loadingMsg").className = "closed";
      });
  }
});
