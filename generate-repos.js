const axios = require('axios');
const fs = require('fs');

// Substitua 'NOME_DO_SEU_USUARIO' pelo seu nome de usuário GitHub
const username = 'nilrd';

axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
  .then(response => {
    const repos = response.data;
    let repoList = '';

    repos.forEach(repo => {
      repoList += `- [${repo.name}](${repo.html_url})\n`;
    });

    const readmeContent = `# Meus Repositórios Públicos\n\n${repoList}`;

    fs.writeFileSync('README.md', readmeContent);
  })
  .catch(error => {
    console.error('Erro ao buscar repositórios:', error);


  });
