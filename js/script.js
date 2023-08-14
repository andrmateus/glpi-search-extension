const button = document.getElementById('busca');
const opcoes = document.getElementsByName('option');
const glpiDomain = localStorage.getItem('glpiDomain');
const defaultDomain = 'seudominio.com.br';
const effectiveDomain = glpiDomain || defaultDomain;

let search = document.getElementById('campoBusca');
search.focus()

search.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        button.click();
    }
    console.log(event.key)
    if (event.key === ' ') {
        event.preventDefault();
    }
})

button.addEventListener('click', async () => {
    let search = document.getElementById('campoBusca').value.trim();

    if (opcoes[0].checked) {
        window.open('https://'+ effectiveDomain + '/front/ticket.form.php?id=' + search, '_blank');

    } else if (opcoes[1].checked) {
        window.open('https://'+ effectiveDomain + '/front/computer.php?is_deleted=0&as_map=0&criteria%5B0%5D%5Blink%5D=AND&criteria%5B0%5D%5Bfield%5D=view&criteria%5B0%5D%5Bsearchtype%5D=contains&criteria%5B0%5D%5Bvalue%5D=' + search + '&search=Pesquisar&itemtype=Computer')

    } else if (opcoes[2].checked) {
        window.open('https://'+ effectiveDomain + '/front/user.php?is_deleted=0&as_map=0&criteria%5B0%5D%5Blink%5D=AND&criteria%5B0%5D%5Bfield%5D=view&criteria%5B0%5D%5Bsearchtype%5D=contains&criteria%5B0%5D%5Bvalue%5D=' + search + '&search=Pesquisar&itemtype=User')
    }
})