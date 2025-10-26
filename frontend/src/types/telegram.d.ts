// src/types/telegram.d.ts
export {}; // чтобы файл считался модулем

declare global {
  type InitDataUnsafe = Record<string, any>;

  interface TelegramMainButton {
    setText?: (text: string) => void;
    show?: () => void;
    hide?: () => void;
    onClick?: (cb: () => void) => void;
    offClick?: (cb: () => void) => void;
  }

  interface TelegramWebAppPartial {
    ready?: () => void;
    close?: () => void;
    initData?: string;
    initDataUnsafe?: InitDataUnsafe;
    MainButton?: TelegramMainButton;
    onEvent?: (event: string, handler: (...args: any[]) => void) => void;
    offEvent?: (event: string, handler: (...args: any[]) => void) => void;
    // добавляй методы по мере необходимости
  }

  interface Window {
    Telegram?: {
      WebApp?: TelegramWebAppPartial;
    };
  }
}
