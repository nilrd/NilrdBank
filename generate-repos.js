const axios = require('axios');
const fs = require('fs');

async function getRepos() {
    try {
        // Fazendo requisição para a API do GitHub para obter todos os repositórios públicos
        const response = await axios.get('https://api.github.com/users/nilrd/repos?per_page=100'); // Obtendo até 100 repositórios
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
        return [];
    }
}

// Função para gerar o conteúdo do README com a lista de repositórios
async function generateReadme() {
    const repos = await getRepos();

    // Verifica se os repositórios foram obtidos
    if (repos.length === 0) {
        console.error('Nenhum repositório encontrado.');
        return;
    }

    // Montando o conteúdo do README.md com a lista de repositórios
    let readmeContent = `
# Nilson Brites - Repositórios Públicos no GitHub

Aqui estão os repositórios públicos disponíveis no meu GitHub:

`;

    // Gerando a lista de repositórios
    repos.forEach(repo => {
        readmeContent += `- [${repo.name}](${repo.html_url}) - ${repo.description || 'Sem descrição'}\n`;
    });

    // Escrevendo o conteúdo no arquivo README.md
    fs.writeFileSync('README.md', readmeContent, (err) => {
        if (err) throw err;
        console.log('README.md atualizado com sucesso!');
    });
}

// Executa a função de gerar o README
generateReadme();
