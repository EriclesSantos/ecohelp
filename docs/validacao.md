# Validação

Verificação local realizada em 18/10/2026.

| Verificação | Resultado |
|---|---|
| npm run typecheck | Passou |
| npm run build | Passou |
| Login demonstrativo → home → formulário | Navegação verificada no Chrome |
| Quatro telas em largura de 390 px | Sem transbordamento horizontal |
| Maven: 3 testes de integração da API | Todos passaram com H2 local |
| Senha | Hash PBKDF2 persistido; senha ausente nas respostas |
| Cadastros inválidos e senha longa | Rejeitados sem persistência |
| Integração frontend/API, PostgreSQL e APK | Pendentes nesta versão |

As capturas da interface são reais; os dados e fluxos de ocorrência são simulados.
