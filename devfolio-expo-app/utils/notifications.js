import * as Notifications from 'expo-notifications';

export const sendTestNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Hello 👋',
      body: 'This is a test notification!',
    },
    trigger: { seconds: 2 },
  });
};
