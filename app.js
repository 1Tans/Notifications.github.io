const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

async function init() {
  await Notification.requestPermission();
  const token = await messaging.getToken({
    vapidKey: "YOUR_VAPID_KEY"
  });

  document.getElementById("tokenBox").value = token;
}

messaging.onMessage((payload) => {
  alert("ได้รับแจ้งเตือน: " + payload.notification.title);
});

init();
