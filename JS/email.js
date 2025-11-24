// Inicializa o EmailJS com sua PUBLIC_KEY
(function () {
    emailjs.init(window.EMAILJS_CONFIG.PUBLIC_KEY);
})();

// Espera o documento estar carregado
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const statusMessage = document.createElement('div'); // cria o elemento de status
    statusMessage.style.marginTop = '10px';
    form.appendChild(statusMessage); // adiciona abaixo do formulário

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        statusMessage.textContent = ''; // limpa mensagem anterior

        // Envia o formulário usando EmailJS
        emailjs.sendForm(
            window.EMAILJS_CONFIG.SERVICE_ID,
            window.EMAILJS_CONFIG.TEMPLATE_ID,
            form
        )
            .then(function () {
                // SUCESSO
                statusMessage.textContent = 'Mensagem enviada com sucesso!';
                statusMessage.style.color = 'green';
                form.reset();

                //  Remove a mensagem após 3 segundos
                setTimeout(() => {
                    statusMessage.textContent = '';
                }, 3000);
            })
            .catch(function (error) {
                //  FALHA
                console.error('Erro ao enviar:', error);
                statusMessage.textContent = 'Ocorreu um erro ao enviar. Tente novamente mais tarde.';
                statusMessage.style.color = 'red';

                // Remove a mensagem após 3 segundos
                setTimeout(() => {
                    statusMessage.textContent = '';
                }, 3000);
            })
            .finally(function () {
                submitButton.textContent = 'Enviar Mensagem';
                submitButton.disabled = false;
            });
    });
});
