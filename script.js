let tarefas = [];
let contadorTarefa = 1;

function adicionarTarefa() {
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();

    if (tarefa === "") {
        document.getElementById("mensagem").textContent = "Preencha o campo por favor!";
        return;
    }

    tarefas.push(tarefa);
    document.getElementById("mensagem").textContent = "Tarefa adicionada com sucesso!";
    inputTarefa.value = "";
    renderizarTarefas();
}

function renderizarTarefas() {
    let listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = ""; 

    tarefas.forEach((tarefa, index) => {
        let novaTarefa = document.createElement("li");

        const textoSpan = document.createElement("span");
        textoSpan.textContent = tarefa;
        novaTarefa.appendChild(textoSpan);

        const botaoEditar = document.createElement("button");
        botaoEditar.className = "botaoEditar";

        const emoji = document.createElement("span");
        emoji.textContent = "✏️";
        emoji.className = "emojiLapis";

        const textoEditar = document.createElement("span");
        textoEditar.className = "textoEditar";

        botaoEditar.appendChild(emoji);
        botaoEditar.appendChild(textoEditar);

        const botaoX = document.createElement("button");
        botaoX.textContent = "×";
        botaoX.className = "botaoX";
        botaoX.onclick = function () {
            tarefas.splice(index, 1); // Remove do array
            renderizarTarefas(); // Re-renderiza após remoção
            document.getElementById("mensagem").textContent = "Tarefa removida com sucesso!";
        };

        novaTarefa.appendChild(botaoEditar);
        novaTarefa.appendChild(botaoX);

        novaTarefa.id = "tarefa-" + contadorTarefa;
        contadorTarefa++;

        listaTarefas.appendChild(novaTarefa);
        mostrarTarefaPorIndice();
    });
}

function renderizarTarefas() {
    let listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";
    
    tarefas.forEach((tarefa, index) => {
        let novaTarefa = document.createElement("li");

        const textoSpan = document.createElement("span");
        textoSpan.textContent = tarefa;
        novaTarefa.appendChild(textoSpan);

        const botaoEditar = document.createElement("button");
        botaoEditar.className = "botaoEditar";

        const emoji = document.createElement("span");
        emoji.textContent = "✏️";
        emoji.className = "emojiLapis";

        const textoEditar = document.createElement("span");
        textoEditar.className = "textoEditar";

        botaoEditar.appendChild(emoji);
        botaoEditar.appendChild(textoEditar);

        const botaoX = document.createElement("button");
        botaoX.textContent = "×";
        botaoX.className = "botaoX";
        
        botaoX.onclick = function () {
            tarefas.splice(index, 1); 
            renderizarTarefas(); 
            document.getElementById("mensagem").textContent = "Tarefa removida com sucesso!";
        };

        novaTarefa.appendChild(botaoEditar);
        novaTarefa.appendChild(botaoX);

        novaTarefa.id = "tarefa-" + contadorTarefa;
        contadorTarefa++;

        listaTarefas.appendChild(novaTarefa);

        // Passando o índice corretamente para a função mostrarTarefaPorIndice
        mostrarTarefaPorIndice(index); 
    });
}

function mostrarTarefaPorIndice(indice) {
    if (indice >= 0 && indice < tarefas.length) {
        console.log("Tarefa encontrada:", tarefas[indice]);
    } else {
        console.log("Índice inválido");
    }
}
