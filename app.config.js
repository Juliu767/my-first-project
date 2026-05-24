/**
 * Пример конфигурации PetLux.
 * 1) Скопируйте файл: app.config.example.js -> app.config.js
 * 2) Заполните ключи Firebase и EmailJS
 * 3) Откройте app/index.html
 */
window.__APP_CONFIG__ = {
  firebase: {
    apiKey: "PUT_YOUR_API_KEY_HERE",
    authDomain: "PUT_YOUR_AUTH_DOMAIN_HERE",
    projectId: "PUT_YOUR_PROJECT_ID_HERE",
    storageBucket: "PUT_YOUR_STORAGE_BUCKET_HERE",
    messagingSenderId: "PUT_YOUR_MESSAGING_SENDER_ID_HERE",
    appId: "PUT_YOUR_APP_ID_HERE"
  },
  emailjs: {
    publicKey: "PUT_EMAILJS_PUBLIC_KEY_HERE",
    serviceId: "PUT_EMAILJS_SERVICE_ID_HERE",
    templateId: "PUT_EMAILJS_TEMPLATE_ID_HERE"
  }
};
