# Nilrd Bank

<p align="center">
  <img src="https://github.com/nilrd/NilrdBank/blob/master/src/main/resources/static/logo.png" alt="Logo Nilrd Bank" style="border-radius: 10px; box-shadow: 0px 0px 20px rgba(255, 255, 255, 1.0); width: 150px;" />
</p>

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
   git clone git@github.com:nilrd/NilrdBank.git
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

<p align="center">
  <img src="https://github.com/nilrd/NilrdBank/blob/master/src/main/resources/evidencias/front.png" alt="Frontend" style="width: 60%;" />
</p>

### Resposta da API no Postman

<p align="center">
  <img src="https://github.com/nilrd/NilrdBank/blob/master/src/main/resources/evidencias/postman.png" alt="Postman" style="width: 60%;" />
</p>
<<<<<<< HEAD

## Redes Sociais

<p align="center">
  <a href="https://www.linkedin.com/in/nilsondasilvabrites" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" style="width: 40px; margin-right: 10px;" />
  </a>
  <a href="mailto:nilson.brites@gmail.com">
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Email" style="width: 40px; margin-right: 10px;" />
  </a>
  <a href="https://wa.me/5511940825120" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style="width: 40px;" />
  </a>
</p>
=======
>>>>>>> 147fbb3 (update README.MD)

## Redes Sociais

<p align="center">
  <a href="https://www.linkedin.com/in/nilsondasilvabrites" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" style="width: 40px; margin-right: 10px;" />
  </a>
  <a href="mailto:nilson.brites@gmail.com">
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Email" style="width: 40px; margin-right: 10px;" />
  </a>
  <a href="https://wa.me/5511940825120" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style="width: 40px;" />
  </a>
</p>

## Contribuição

Sinta-se à vontade para contribuir com este projeto! Envie um pull request ou crie uma issue para sugestões e melhorias.
