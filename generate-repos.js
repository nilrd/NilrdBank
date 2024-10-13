const axios = require('axios');
const fs = require('fs');

async function getRepos() {
    try {
        const response = await axios.get('https://api.github.com/users/nilrd/repos');
        const repos = response.data;

        let markdown = '# Meus Repositórios\n\n';
        repos.forEach(repo => {
            markdown += `- [${repo.name}](${repo.html_url})\n`;
        });

        fs.writeFileSync('README.md', markdown);
        console.log('README.md atualizado com sucesso!');
    } catch (error) {
        console.error('Erro ao obter os repositórios:', error);
    }
}

getRepos();
