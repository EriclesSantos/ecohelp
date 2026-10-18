# EcoHelp · API local

Java 17, Maven, Spring Boot, JPA e PostgreSQL. A API implementada contém apenas cadastro e listagem de usuários. Consulte o [README principal](../README.md) para o estado real do projeto.

## Demonstração isolada

```powershell
mvn.cmd spring-boot:run "-Dspring-boot.run.profiles=demo"
```

O H2 em memória é descartado ao encerrar o processo. A API fica em `127.0.0.1:8080`; não há autenticação de endpoints nesta versão.

## PostgreSQL próprio

1. Crie um banco vazio chamado `ecohelp` em sua instalação PostgreSQL.
2. Execute `database/schema.sql` nesse banco. Exemplo com psql: `psql -U postgres -d ecohelp -f database/schema.sql`.
3. Configure as variáveis no mesmo terminal:

```powershell
$env:DB_URL='jdbc:postgresql://localhost:5432/ecohelp'
$env:DB_USER='seu_usuario'
$env:DB_PASSWORD='sua_senha_local'
mvn.cmd spring-boot:run
```

As variáveis são locais ao terminal e não devem ser colocadas no Git. O Hibernate valida o esquema, sem alterar tabelas automaticamente. O esquema atual usa `eco_users` e `eco_reports`; um banco antigo precisa de migração própria antes do uso. Nunca rode o script sobre dados que deseja preservar sem revisar a migração.

## Endpoints

| Método | Rota | Comportamento |
|---|---|---|
| POST | `/users` | Valida nome, e-mail e senha; persiste hash; retorna id/nome/e-mail com status 201 |
| GET | `/users` | Lista id/nome/e-mail sem senha |

Senhas usam PBKDF2 com parâmetros do encoder Spring Security 5.8. A API não inclui login, sessão ou autorização de usuários. [Referência sobre armazenamento de senhas](https://docs.spring.io/spring-security/reference/features/authentication/password-storage.html).

## Testar

```powershell
mvn.cmd test
```

Os testes rodam com H2 local. Nenhum banco de produção é utilizado.
