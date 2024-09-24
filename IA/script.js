document.getElementById("send-button").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    const responseMessage = document.getElementById("response-message");

    if (userInput.trim() === "") {
        alert("Por favor, insira uma pergunta.");
        return;
    }

    // Simulação de uma resposta da IA
    const response = simulateAIResponse(userInput);

    // Adiciona a pergunta e a resposta na caixa de chat
    responseMessage.innerHTML += `<strong>Você:</strong> ${userInput}<br>`;
    responseMessage.innerHTML += `<strong>IA:</strong> ${response}<br>`;
    document.getElementById("user-input").value = ""; // Limpa o campo de entrada
    document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight; // Rola para baixo
});

function simulateAIResponse(question) {
    const responses = [
        "Isso é muito interessante!",
        "Eu não tenho certeza, mas posso investigar isso.",
        "Como você chegou a essa conclusão?",
        "Posso ajudar com mais informações?",
        "Essa é uma boa pergunta!",
        "Estou aqui para ajudar!"
    ];
    // Retorna uma resposta aleatória
    return responses[Math.floor(Math.random() * responses.length)];
}