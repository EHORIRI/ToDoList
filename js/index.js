const divLista = document.getElementById('lista');
const ul = document.createElement('ul');

divLista.appendChild(ul);

function criarElemento(tipo, conteudo = '') {
    const elemento = document.createElement(tipo);
    elemento.textContent = conteudo;

    return elemento;
}

function registrarTarefa(input){
    const valor = input.value;
    
    if (valor === "")
        return;

    const li = document.createElement('li');
    const spanValor = criarElemento('span', valor);
    const buttonDeletar = criarElemento('button', 'Deletar');
    buttonDeletar.onclick = () => removerItem(li);

    li.appendChild(spanValor);
    li.appendChild(buttonDeletar);
    ul.appendChild(li);
}

function removerItem(item){

    item.remove();
}
