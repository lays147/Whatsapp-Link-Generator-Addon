document.getElementById("form").addEventListener("submit", listener);
// document.getElementById("result").style.display = "none";

var clipboard = new ClipboardJS(".copyBtn");

function listener(e) {
  e.preventDefault();
  let number = document.getElementById("phoneNumber").value;
  let cleanNumber = number.replace(/\D+/g, "");
  let formatedUrl = `https://api.whatsapp.com/send?phone=55${cleanNumber}`;

  document.getElementById("result").style.display = "block";
  document.getElementById("url").value = document.getElementById(
    "result",
  ).style.display = formatedUrl;

  document.getElementById("goUrl").href = formatedUrl;
}
