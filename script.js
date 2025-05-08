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
        textoSpan.className = "task-text";
        novaTarefa.appendChild(textoSpan);

        const botaoEditar = document.createElement("button");
        botaoEditar.className = "botaoEditar";
        botaoEditar.onclick = function () {
            EditarTarefa(index, novaTarefa);
        };

        const emoji = document.createElement("span");
        emoji.textContent = "✏️";
        emoji.className = "emojiLapis";

        botaoEditar.appendChild(emoji);

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

function EditarTarefa(index, elementoTarefa) {
    const span = elementoTarefa.querySelector(".task-text");
    const botaoEditar = elementoTarefa.querySelector(".botaoEditar");
    const emoji = botaoEditar.querySelector(".emojiLapis");

    // Se já estiver em modo de edição
    if (elementoTarefa.querySelector("input")) {
        const input = elementoTarefa.querySelector("input");
        const novoTexto = input.value.trim();

        if (novoTexto !== "") {
            tarefas[index] = novoTexto;

            const novoSpan = document.createElement("span");
            novoSpan.textContent = novoTexto;
            novoSpan.className = "task-text";

            elementoTarefa.replaceChild(novoSpan, input);
            emoji.textContent = "✏️";

            document.getElementById("mensagem").textContent = "Tarefa editada com sucesso!";
        }
    } else {
        const input = document.createElement("input");
        input.type = "text";
        input.value = tarefas[index];

        elementoTarefa.replaceChild(input, span);
        emoji.textContent = "💾"; // mudar para ícone de salvar
    }
}
