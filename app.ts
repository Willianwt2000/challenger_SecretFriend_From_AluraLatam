let friends: string[] = []; 

const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;

function agregarAmigo(): void {
  const inputElement = document.getElementById("amigo") as HTMLInputElement | null;
  const listaElement = document.getElementById("listaAmigos") as HTMLUListElement | null;

  if (!inputElement || !listaElement) {
    console.error("Elemento no encontrado en el DOM.");
    return;
  }

  const inputText: string = inputElement.value.trim(); 

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

function actualizarListaAmigos(): void {
  const listaElement = document.getElementById("listaAmigos") as HTMLUListElement | null;
  if (!listaElement) return;


  listaElement.innerHTML = "";
  

  friends.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaElement.appendChild(li);
  });
}

document.getElementById("amigo")?.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});


//Sort names


function sortearAmigo(amigos:string []): void {
    if (amigos.length <= 1) {
      alert("Debe agregar almenos dos nombres o mas")
      return;
    }

    const indexAleatorio : number = Math.floor(Math.random() * friends.length);
    const amigosSorteados: string = friends[indexAleatorio]

    //renderizar amigo sorteado seleccionado

}

document.querySelector(".button-draw")?.addEventListener("click",() => sortearAmigo(friends))



