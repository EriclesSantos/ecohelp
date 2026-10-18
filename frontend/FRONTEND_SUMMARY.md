> Documento acadêmico original, mantido como referência histórica. Pode descrever intenções ainda não implementadas. Consulte o README desta pasta e o README principal para instruções e estado atuais.

# FRONTEND SUMMARY

## Objetivo do frontend
Disponibilizar a interface do aplicativo EcoHelp para cadastro, acompanhamento e visualização de ocorrências ambientais, com foco em usabilidade mobile e empacotamento Android.

## Stack utilizada
- React 18
- Vite
- TypeScript
- Tailwind CSS 4
- Radix UI
- Lucide Icons
- Capacitor 7

## Classificação atual
- Natureza original: web
- Experiência visual: mobile-first
- Situação após adequação: híbrido, pronto para Android via Capacitor

## Como rodar localmente
```bash
npm install
npm run dev
```

## Como gerar build de produção
```bash
npm run build
```

## Como sincronizar com Android
```bash
# somente na primeira vez
npm run android:add

# a cada alteração no frontend
npm run android:sync
```

## Como abrir no Android Studio
```bash
npm run android:open
```

## Como gerar APK release
1. Executar `npm run build`
2. Executar `npm run android:sync`
3. Abrir o projeto Android com `npm run android:open`
4. No Android Studio, acessar `Build > Generate Signed Bundle / APK`
5. Selecionar `APK`
6. Escolher a build `release`
7. Salvar o APK gerado fora da pasta do projeto para a entrega

## Como integrar com o backend
1. Publique o backend em um serviço com HTTPS.
2. Crie um arquivo `.env`.
3. Defina:

```env
VITE_API_BASE_URL=https://seu-backend-publico-https.com
```

## Porta de desenvolvimento web
- `5173`

## Estrutura principal
- `src/app/components/screens`: telas do aplicativo
- `src/app/components`: componentes compartilhados
- `src/styles`: estilos globais e tema
- `capacitor.config.ts`: configuração do app híbrido

## Principais telas
- Splash
- Onboarding
- Login
- Cadastro
- Home
- Nova Ocorrência
- Upload de Evidências
- Mapa
- Lista de Ocorrências
- Detalhe da Ocorrência
- Chat
- Notificações
- Perfil

## Observações para entrega FIAP
- O projeto está pronto para build web e sincronização Android.
- A camada Android já foi gerada com Capacitor nesta base.
- O APK release deve ser gerado no Android Studio via menu de build assinado.
- O frontend atual mantém a lógica original baseada em fluxos mockados e navegação local.
- Para o PDF da entrega, inclua o endpoint HTTPS publicado do backend consumido pelo app.
