var _a, _b;
var friends = [];
var regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;
function agregarAmigo() {
    var inputElement = document.getElementById("amigo");
    var listaElement = document.getElementById("listaAmigos");
    if (!inputElement || !listaElement) {
        console.error("Elemento no encontrado en el DOM.");
        return;
    }
    var inputText = inputElement.value.trim();
    //validar con regex
    if (!regex.test(inputText)) {
        alert("Por favor, ingresa un nombre válido (solo letras y al menos 2 caracteres).");
        return;
    }
    if (inputText === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    friends.push(inputText);
    inputElement.value = "";
    actualizarListaAmigos();
}
function actualizarListaAmigos() {
    var listaElement = document.getElementById("listaAmigos");
    if (!listaElement)
        return;
    listaElement.innerHTML = "";
    friends.forEach(function (amigo) {
        var li = document.createElement("li");
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}
(_a = document.getElementById("amigo")) === null || _a === void 0 ? void 0 : _a.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});
//Sort names
function sortearAmigo(amigos) {
    var _a;
    if (amigos.length <= 1) {
        alert("Debe agregar almenos dos nombres o mas");
        return;
    }
    var indexAleatorio = Math.floor(Math.random() * friends.length);
    var amigosSorteados = friends[indexAleatorio];
    //renderizar amigo sorteado seleccionado
    var li = document.createElement("li");
    li.textContent = amigosSorteados;
    (_a = document.getElementById("listaAmigos")) === null || _a === void 0 ? void 0 : _a.append(li);
}
(_b = document.querySelector(".button-draw")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { return sortearAmigo(friends); });
