document.getElementById('contaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturar os dados do formulário
    const numero = document.getElementById('numero').value;
    const agencia = document.getElementById('agencia').value;
    const nomeCliente = document.getElementById('nomeCliente').value;
    const saldo = document.getElementById('saldo').value;

    const conta = {
        numero: numero,
        agencia: agencia,
        nomeCliente: nomeCliente,
        saldo: saldo
    };

    fetch('/api/conta/criar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(conta)
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('resultado').innerText = data;
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
fetch('/api/conta/criar', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(conta)
})
.then(response => response.text())
.then(data => {
    document.getElementById('resultado').innerText = data;
})
.catch((error) => {
    console.error('Erro:', error);
});


});
