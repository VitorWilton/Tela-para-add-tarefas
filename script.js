let contadorTarefa = 1;

function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!";
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim(); // É bom usar .trim() para remover espaços em branco no início e no fim

    document.getElementById("mensagem").textContent = mensagem;

    let listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa;
    const botaoX = document.createElement("button");

    if (tarefa === "") {
        document.getElementById("mensagem").textContent = "Preencha o campo por favor!";
        console.log("Campo não preenchido");
    } else {
        novaTarefa = document.createElement("li");

        // Cria um span para o texto da tarefa
        const textoSpan = document.createElement("span");
        textoSpan.textContent = tarefa;
        novaTarefa.appendChild(textoSpan);

        botaoX.textContent = "×";
        botaoX.className = "botaoX"; 
        botaoX.onclick = function() {
            const itemParaRemover = this.parentNode; 
            itemParaRemover.remove();
            document.getElementById("mensagem").textContent = "Tarefa removida com sucesso!";
            console.log("Tarefa removida com sucesso!");
        };
        novaTarefa.appendChild(botaoX); 
        novaTarefa.id = "tarefa-" + contadorTarefa;
        contadorTarefa++;

        listaTarefas.appendChild(novaTarefa);
        inputTarefa.value = ""; 
        console.log(listaTarefas);
    }
}

