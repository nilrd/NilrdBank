# Nilrd Bank

![Logo](https://via.placeholder.com/150) 

**Nilrd Bank** é um sistema bancário simples, criado usando **Spring Boot** no backend e **HTML/CSS/JavaScript** no frontend. O sistema permite criar contas bancárias através de uma interface amigável e moderna.

## Funcionalidades

- Criação de contas bancárias com dados como número da conta, agência, nome do cliente e saldo inicial.
- Formatação automática de saldo com separadores de milhar e casas decimais.
- Mensagens claras de sucesso após a criação da conta.

## Tecnologias Utilizadas

- **Java 17** com **Spring Boot**
- **HTML/CSS** e **JavaScript** para o frontend
- **Postman** para testes de API

## Como Rodar o Projeto

### Backend
1. Clone este repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/NilrdBank.git
   ```
2. Importe o projeto em sua IDE favorita (IntelliJ, Eclipse, etc.).
3. Execute o arquivo principal `NilrdBankApplication.java`.
4. O backend estará rodando na porta `8081`.

### Frontend
1. Com o backend rodando, abra o arquivo `index.html` localizado em `src/main/resources/static/` no seu navegador.
2. Preencha os dados da conta e clique em "Criar Conta".
3. Você verá a mensagem de confirmação com os dados da conta criada.

## Testando a API com o Postman

Você também pode testar a criação de conta via **Postman**. Veja um exemplo:

- Método: **POST**
- URL: `http://localhost:8081/api/conta/criar`
- Corpo da requisição (JSON):
  ```json
  {
    "numero": 1234,
    "agencia": "4456",
    "nomeCliente": "João da Silva",
    "saldo": 10000.50
  }
  ```

### Exemplo de Resposta:

```json
"Olá João da Silva, obrigado por criar uma conta no Nilrd Bank. Sua agência é 4456, conta 1234 e seu saldo de R$ 10.000,50 está disponível para saque."
```

## Evidências

### Frontend - Criação de Conta

![Frontend](./file-JJYU9IcxJLJQesnF8Q0UD25p)

### Resposta da API no Postman

![Postman](./file-OG494MaGYk3TlafhP9YfGT6R)

## Publicação no GitHub Pages

Este projeto está disponível no **GitHub Pages** e pode ser acessado pelo link:
[**Nilrd Bank - GitHub Pages**](https://SEU_USUARIO.github.io/nilrd-bank/)

## Contribuição

Sinta-se à vontade para contribuir com este projeto! Envie um pull request ou crie uma issue para sugestões e melhorias.
