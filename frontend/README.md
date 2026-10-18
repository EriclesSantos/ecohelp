# EcoHelp · Interface web e Android híbrido

React 18, TypeScript, Vite, Tailwind e Capacitor. Esta interface usa dados simulados e navegação local; ainda não consome a API Java.

```powershell
npm.cmd ci
npm.cmd run dev
npm.cmd run typecheck
npm.cmd run build
```

O servidor local abre em `http://127.0.0.1:5173`. Use dados fictícios para percorrer o login e as telas. O mapa contém marcadores posicionados para demonstração, e o chat não conversa com uma equipe real.

## Android

Com Node.js 22, Android Studio e SDK instalados:

```powershell
npm.cmd run build
npm.cmd run android:sync
npm.cmd run android:open
```

A pasta `android` já existe; não execute `android:add` novamente. Configure o SDK pedido pelo projeto no Android Studio e compile lá. A existência da estrutura Capacitor e o build web não comprovam a execução física do APK.

## Integração futura

Será necessário implementar um cliente HTTP, autenticação e persistência das ocorrências. Definir uma variável `VITE_API_BASE_URL` isoladamente não integra as telas existentes ao backend.

O [README principal](../README.md) contém as capturas atuais e o estado dos recursos. `ATTRIBUTIONS.md` preserva os créditos dos componentes e recursos de interface.
