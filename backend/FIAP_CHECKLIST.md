> Documento acadêmico original, mantido como referência histórica. Pode descrever intenções ainda não implementadas. Consulte o README desta pasta e o README principal para instruções e estado atuais.

# CHECKLIST FINAL DE CONFORMIDADE - FIAP

## Estrutura do projeto
- [ ] Projeto entregue com `pom.xml` na raiz
- [ ] Código-fonte em `src/main/java`
- [ ] Configurações em `src/main/resources`
- [ ] Documentação incluída: `README.md`
- [ ] Resumo técnico incluído: `BACKEND_SUMMARY.md`

## Organização do backend
- [ ] Pacotes organizados em `controller`, `service`, `repository` e `model`
- [ ] Classe principal do Spring Boot configurada corretamente
- [ ] Nomes de classes e arquivos consistentes
- [ ] Endpoints agrupados em controller apropriado

## Execução
- [ ] Projeto compila com `mvn clean install`
- [ ] Projeto executa com `mvn spring-boot:run`
- [ ] Porta da aplicação documentada
- [ ] Integração com banco documentada

## API
- [ ] Rotas principais documentadas
- [ ] Método HTTP de cada rota identificado
- [ ] Objetivo das rotas descrito
- [ ] Exemplo de payload principal documentado

## Entrega
- [ ] Pasta `target/` removida do ZIP final
- [ ] Pasta `.idea/` removida do ZIP final
- [ ] Pasta `.git/` removida do ZIP final
- [ ] Arquivos `.DS_Store` removidos do ZIP final
- [ ] ZIP contém apenas arquivos necessários para execução e avaliação

## Validação final
- [ ] README claro e curto
- [ ] BACKEND_SUMMARY objetivo e suficiente para banca
- [ ] Lógica de negócio preservada
- [ ] Projeto pronto para apresentação acadêmica
