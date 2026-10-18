import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.fiap.ecohelp',
  appName: 'EcoHelp',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
