import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.grupo.blockbuster',
  appName: 'BlockBuster',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 1000,
      launchAutoHide: false,
      launchFadeOutDuration: 0,
      backgroundColor: "#121212",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_INSIDE",
      showSpinner: false,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
  },
  android: {
    allowMixedContent: true
  },
  server: {
    allowNavigation: [
      "desarrollo.codemaker.cl",
      "media.themoviedb.org",
      "image.tmdb.org",
      "dragonball-api.com"
    ],
    cleartext: true
  }
};

export default config;
