const glpiDomain = localStorage.getItem('glpiDomain');

document.addEventListener('DOMContentLoaded', function () {
    const configForm = document.getElementById('configForm');
    const domainInput = document.getElementById('domainInput');

    configForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const newDomain = domainInput.value.trim();
        // Salve newDomain em algum armazenamento (por exemplo, local storage)
        localStorage.setItem('glpiDomain', newDomain);
        alert('Domínio configurado com sucesso!');
    });
});
