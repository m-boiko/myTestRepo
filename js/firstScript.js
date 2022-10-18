let password = "";

do {
  password = prompt("Введите пароль длиннее 4-х символов", "");
} while (password.length < 5);

console.log("Ввели пароль: ", password);
console.log (password)