# Настройка PetLux

## 1. Локальный запуск

```bash
npm run dev
```

Откройте:

- `http://localhost:3000` — приветственный лендинг
- `http://localhost:3000/app/` — основное приложение

## 2. Firebase

1. Создайте проект в [Firebase Console](https://console.firebase.google.com/).
2. Включите **Authentication** (Email/Password).
3. Создайте **Firestore Database**.
4. Скопируйте SDK-конфиг в `config/app.config.js`.

## 3. EmailJS (подтверждение брони)

1. Создайте аккаунт на [EmailJS](https://www.emailjs.com/).
2. Добавьте Service + Template.
3. Вставьте `publicKey`, `serviceId`, `templateId` в `config/app.config.js`.

## 4. Админ-доступ

В Firestore в коллекции `users` для нужного пользователя установите:

```json
{ "role": "admin" }
```

## 5. Firestore Rules (тест)

```txt
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
    match /bookings/{bookingId} {
      allow read, write: if request.auth != null;
    }
    match /leads/{leadId} {
      allow create: if true;
      allow read: if request.auth != null;
    }
  }
}
```
