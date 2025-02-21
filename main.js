let texto = document.getElementsByTagName("h1")[0];
let hora = document.getElementsByTagName("h1")[1];
let body = document.getElementById("altera");


  const agora = new Date();
  day = agora.getHours()


  if (day >= 1 && day < 12) {
    body.classList.add("dia");
    texto.innerText = "BOM DIA";
  } else if (day >= 12 && day < 18) {
    body.classList.add("tarde");
    texto.innerText = "BOA TARDE";
  } else if (day >= 18 && day < 24) {
    body.classList.add("noite");
    texto.innerText = "BOA NOITE";
  }


