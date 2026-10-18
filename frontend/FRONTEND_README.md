> Documento acadêmico original, mantido como referência histórica. Pode descrever intenções ainda não implementadas. Consulte o README desta pasta e o README principal para instruções e estado atuais.

# EcoHelp Frontend

Frontend do aplicativo EcoHelp desenvolvido em React + Vite, preparado para execução web e empacotamento Android com Capacitor.

## Stack
- React 18
- Vite
- TypeScript
- Tailwind CSS 4
- Radix UI
- Capacitor 7

## Como rodar
```bash
npm install
npm run dev
```

## Como gerar build web
```bash
npm run build
```

## Como preparar Android
```bash
# executar apenas na primeira configuração
npm run android:add

# executar sempre que o frontend mudar
npm run android:sync
npm run android:open
```

## Como gerar APK release
1. Execute `npm run build`
2. Execute `npm run android:sync`
3. Abra o projeto com `npm run android:open`
4. No Android Studio, vá em `Build > Generate Signed Bundle / APK`
5. Escolha `APK`
6. Informe ou crie um keystore
7. Gere a variante `release`

## Backend
- Configure a URL do backend em `.env` com base no arquivo `.env.example`
- Variável esperada: `VITE_API_BASE_URL`
- Para a entrega FIAP, prefira um endpoint público em HTTPS

## Documentação complementar
- `FRONTEND_SUMMARY.md`
- `SCREENS_DOCUMENTATION.md`
- `FRONTEND_FIAP_CHECKLIST.md`
