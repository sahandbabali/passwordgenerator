window.onload = function () {
  document
    .getElementById("buttonrefresh")
    .addEventListener("click", generatePassword);
  generatePassword();
  document.getElementById("buttoncopy").addEventListener("click", function (e) {
    navigator.clipboard.writeText(document.getElementById("passinput").value);
    const toastcopy = document.getElementById("toastcopy");
    const toast = new bootstrap.Toast(toastcopy);
    toast.show();
  });
};

function generatePassword() {
  var length = document.getElementById("passlength").value;
  var charset = "";

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "0123456789";
  var symbols = `~!@#$%^&*()_-+={[}]|\:;"'<,>.?/`;

  if (document.getElementById("lowercasecheck").checked == true) {
    charset += lowercase;
  }
  if (document.getElementById("uppercasecheck").checked == true) {
    charset += uppercase;
  }
  if (document.getElementById("numberscheck").checked == true) {
    charset += number;
  }
  if (document.getElementById("symbolscheck").checked == true) {
    charset += symbols;
  }

  var retVal = "";

  for (var i = 0; i < length; i++) {
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("passinput").value = retVal;
  }
}
