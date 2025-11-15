importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: "169219859462"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(({ notification }) => {
  self.registration.showNotification(notification.title, notification);
});
