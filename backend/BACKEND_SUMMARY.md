> Documento acadêmico original, mantido como referência histórica. Pode descrever intenções ainda não implementadas. Consulte o README desta pasta e o README principal para instruções e estado atuais.

# BACKEND SUMMARY

## Objetivo do backend
Disponibilizar uma API REST simples para o projeto EcoHelp, com foco atual no cadastro e listagem de usuários.

## Stack usada
- Java 17
- Spring Boot 3
- Spring Web
- Spring Data JPA
- PostgreSQL
- Maven

## Como executar
1. Garantir que o PostgreSQL esteja ativo.
2. Validar as credenciais no arquivo `src/main/resources/application.properties`.
3. Executar:

```bash
mvn clean install
mvn spring-boot:run
```

## Porta
`8080`

## Integração com banco
- Banco: PostgreSQL
- URL padrão: `jdbc:postgresql://localhost:5432/ecohelp`
- Usuário padrão: `postgres`
- Senha padrão: `postgres`
- Estratégia JPA: `spring.jpa.hibernate.ddl-auto=update`

## Principais endpoints
- `POST /users`
  - Função: cadastrar usuário
  - Body esperado:

```json
{
  "name": "Nome do usuario",
  "email": "email@exemplo.com",
  "password": "123456"
}
```

- `GET /users`
  - Função: listar usuários cadastrados

## Organização atual
- `com.ecohelp.controller`: endpoints REST
- `com.ecohelp.service`: regras de serviço
- `com.ecohelp.repository`: acesso a dados
- `com.ecohelp.model`: entidades

## Observações para entrega
- Os endpoints estão centralizados e consistentes no `UserController`.
- Os nomes de classes, pacotes e arquivos estão padronizados.
- Não há alteração desnecessária na lógica de negócio original.
- Arquivos de IDE, pasta `target/` e arquivos ocultos do sistema não são necessários na entrega final compactada.
