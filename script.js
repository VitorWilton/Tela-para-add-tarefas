let contadorTarefa = 1;

function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!";
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();

    document.getElementById("mensagem").textContent = mensagem;

    let listaTarefas = document.getElementById("listaTarefas");

    if (tarefa === "") {
        document.getElementById("mensagem").textContent = "Preencha o campo por favor!";
        console.log("Campo não preenchido");
    } else {
        let novaTarefa = document.createElement("li");

        // Cria um span para o texto da tarefa
        const textoSpan = document.createElement("span");
        textoSpan.textContent = tarefa;
        novaTarefa.appendChild(textoSpan);

        // Botão editar com emoji e texto separados
        const botaoEditar = document.createElement("button");
        botaoEditar.className = "botaoEditar";

        const emoji = document.createElement("span");
        emoji.textContent = "✏️";
        emoji.className = "emojiLapis";

        const textoEditar = document.createElement("span");
        textoEditar.className = "textoEditar";

        botaoEditar.appendChild(emoji);
        botaoEditar.appendChild(textoEditar);

        // Botão de remover (X)
        const botaoX = document.createElement("button");
        botaoX.textContent = "×";
        botaoX.className = "botaoX";
        botaoX.onclick = function () {
            const itemParaRemover = this.parentNode;
            itemParaRemover.remove();
            document.getElementById("mensagem").textContent = "Tarefa removida com sucesso!";
            console.log("Tarefa removida com sucesso!");
        };

        novaTarefa.appendChild(botaoEditar);
        novaTarefa.appendChild(botaoX);

        novaTarefa.id = "tarefa-" + contadorTarefa;
        contadorTarefa++;

        listaTarefas.appendChild(novaTarefa);
        inputTarefa.value = "";
        console.log(listaTarefas);
    }
}
