> Documento acadêmico original, mantido como referência histórica. Pode descrever intenções ainda não implementadas. Consulte o README desta pasta e o README principal para instruções e estado atuais.

# SCREENS DOCUMENTATION

## 1. Splash Screen
- Nome da tela: SplashScreen
- Objetivo: apresentar a identidade visual do EcoHelp e iniciar o fluxo do app
- Funcionalidades: exibição da marca, animação de entrada e redirecionamento automático
- Fluxo do usuário: abre o app e segue para onboarding
- Observações relevantes: boa para abertura de banca e gravação de vídeo
- Screenshot: `docs/screenshots/splash-screen.png`

## 2. Onboarding Screen
- Nome da tela: OnboardingScreen
- Objetivo: apresentar proposta de valor do aplicativo
- Funcionalidades: navegação entre slides, pular introdução, acesso para login ou cadastro
- Fluxo do usuário: entende o MVP e escolhe entrar ou criar conta
- Observações relevantes: reforça proposta ESG e posicionamento do app
- Screenshot: `docs/screenshots/onboarding-screen.png`

## 3. Login Screen
- Nome da tela: LoginScreen
- Objetivo: permitir acesso do usuário
- Funcionalidades: entrada de email e senha, navegação para cadastro
- Fluxo do usuário: informa credenciais e segue para home
- Observações relevantes: atualmente com fluxo local, sem autenticação real conectada
- Screenshot: `docs/screenshots/login-screen.png`

## 4. Register Screen
- Nome da tela: RegisterScreen
- Objetivo: cadastrar um novo usuário
- Funcionalidades: formulário com dados pessoais, senha e aceite de termos
- Fluxo do usuário: preenche os dados e segue para a home
- Observações relevantes: pronto para futura integração com endpoint de cadastro
- Screenshot: `docs/screenshots/register-screen.png`

## 5. Home Screen
- Nome da tela: HomeScreen
- Objetivo: concentrar atalhos e visão geral do aplicativo
- Funcionalidades: acesso rápido para nova ocorrência, mapa, chat, notificações e lista de ocorrências
- Fluxo do usuário: entra no app e escolhe o próximo passo principal
- Observações relevantes: é a principal tela para demonstração do MVP
- Screenshot: `docs/screenshots/home-screen.png`

## 6. New Occurrence Screen
- Nome da tela: NewOccurrenceScreen
- Objetivo: registrar uma nova ocorrência ambiental
- Funcionalidades: formulário com título, categoria, descrição e localização
- Fluxo do usuário: preenche os dados básicos e avança para anexar evidências
- Observações relevantes: representa o núcleo do negócio do EcoHelp
- Screenshot: `docs/screenshots/new-occurrence-screen.png`

## 7. Upload Evidence Screen
- Nome da tela: UploadEvidenceScreen
- Objetivo: anexar evidências visuais à ocorrência
- Funcionalidades: inclusão simulada de arquivos, remoção, observação complementar e envio
- Fluxo do usuário: adiciona arquivos e conclui o protocolo
- Observações relevantes: está pronta para futura integração com câmera/galeria nativa via Capacitor
- Screenshot: `docs/screenshots/upload-evidence-screen.png`

## 8. Map Screen
- Nome da tela: MapScreen
- Objetivo: visualizar ocorrências distribuídas na região
- Funcionalidades: pinos simulados, filtros por categoria e abertura do detalhe da ocorrência
- Fluxo do usuário: explora o mapa, seleciona um ponto e aprofunda no caso
- Observações relevantes: mapa atual é mockado, mas o layout está pronto para integração real
- Screenshot: `docs/screenshots/map-screen.png`

## 9. Occurrences Screen
- Nome da tela: OccurrencesScreen
- Objetivo: listar as ocorrências do usuário
- Funcionalidades: busca, filtros visuais e abertura do detalhe
- Fluxo do usuário: consulta protocolos e acompanha o status
- Observações relevantes: boa tela para mostrar histórico e rastreabilidade
- Screenshot: `docs/screenshots/occurrences-screen.png`

## 10. Occurrence Detail Screen
- Nome da tela: OccurrenceDetailScreen
- Objetivo: detalhar uma ocorrência específica
- Funcionalidades: descrição do caso, timeline, evidências e acesso ao chat
- Fluxo do usuário: abre uma ocorrência, acompanha o andamento e fala com o suporte
- Observações relevantes: uma das telas mais completas para apresentação funcional
- Screenshot: `docs/screenshots/occurrence-detail-screen.png`

## 11. Chat Screen
- Nome da tela: ChatScreen
- Objetivo: oferecer comunicação entre usuário e suporte
- Funcionalidades: histórico de mensagens, campo de envio e navegação de retorno
- Fluxo do usuário: consulta orientações e responde a equipe
- Observações relevantes: fluxo ainda simulado, sem backend em tempo real
- Screenshot: `docs/screenshots/chat-screen.png`

## 12. Notifications Screen
- Nome da tela: NotificationsScreen
- Objetivo: centralizar alertas do sistema
- Funcionalidades: exibição de atualizações de status, mensagens e alertas
- Fluxo do usuário: acompanha novidades e ocorrências importantes
- Observações relevantes: reforça a proposta de acompanhamento contínuo
- Screenshot: `docs/screenshots/notifications-screen.png`

## 13. Profile Screen
- Nome da tela: ProfileScreen
- Objetivo: apresentar dados e preferências do usuário
- Funcionalidades: estatísticas, atalhos de perfil, toggles de preferências e logout
- Fluxo do usuário: revisa dados e configurações gerais
- Observações relevantes: algumas rotas de submenu ainda são conceituais
- Screenshot: `docs/screenshots/profile-screen.png`

## 14. Empty State Screen
- Nome da tela: EmptyStateScreen
- Objetivo: servir como estado auxiliar para listas ou fluxos sem conteúdo
- Funcionalidades: mensagem de vazio e possibilidade de ação de retry
- Fluxo do usuário: recebe orientação quando não houver dados
- Observações relevantes: componente de apoio, não está ligado a uma rota principal
- Screenshot: `docs/screenshots/empty-state-screen.png`
