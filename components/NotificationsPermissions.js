import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";

const NotificationsPermissions = () => {
  const [notificationsPermissions, setNotificationsPermissions] = useState({
    android: {
      importance: undefined,
      interruptionFilter: undefined,
    },
    canAskAgain: undefined,
    expires: undefined,
    granted: undefined,
    ios: {
      status: undefined,
      allowsDisplayInNotificationCenter: undefined,
      allowsDisplayOnLockScreen: undefined,
      allowsDisplayInCarPlay: undefined,
      allowsAlert: undefined,
      allowsBadge: undefined,
      allowsSound: undefined,
      allowsCriticalAlerts: undefined,
      alertStyle: undefined,
      allowsPreviews: undefined,
      providesAppNotificationSettings: undefined,
      allowsAnnouncements: undefined,
    },
    status: undefined,
  });

  useEffect(() => {
    const getNotificationsPermissions = async () => {
      if (Platform.OS === "android") {
        const { android, canAskAgain, expires, granted, status } =
          await Notifications.getPermissionsAsync();
        setNotificationsPermissions({
          android,
          canAskAgain,
          expires,
          granted,
          status,
        });
      } else {
        const { canAskAgain, expires, granted, ios, status } =
          await Notifications.getPermissionsAsync();
        setNotificationsPermissions({
          canAskAgain,
          expires,
          granted,
          ios,
          status,
        });
      }
    };
    getNotificationsPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications Permission</Text>
      {Platform.OS === "android" && (
        <>
          <Text>{`Android importance: ${notificationsPermissions.android?.importance}`}</Text>
          <Text>{`Android interruption filter: ${notificationsPermissions.android?.interruptionFilter}`}</Text>
        </>
      )}
      <Text>{`Can ask again: ${notificationsPermissions.canAskAgain}`}</Text>
      <Text>{`Expires: ${notificationsPermissions.expires}`}</Text>
      <Text>{`Granted: ${notificationsPermissions.granted}`}</Text>
      {Platform.OS === "ios" && (
        <>
          <Text>{`iOS authorization status: ${notificationsPermissions.ios?.status}`}</Text>
          <Text>{`iOS allows display in notification center: ${notificationsPermissions.ios?.allowsDisplayInNotificationCenter}`}</Text>
          <Text>{`iOS allows display on lock screen: ${notificationsPermissions.ios?.allowsDisplayOnLockScreen}`}</Text>
          <Text>{`iOS allows display in car play: ${notificationsPermissions.ios?.allowsDisplayInCarPlay}`}</Text>
          <Text>{`iOS allows alert: ${notificationsPermissions.ios?.allowsAlert}`}</Text>
          <Text>{`iOS allows badge: ${notificationsPermissions.ios?.allowsBadge}`}</Text>
          <Text>{`iOS allows sound: ${notificationsPermissions.ios?.allowsSound}`}</Text>
          <Text>{`iOS allows critical alerts: ${notificationsPermissions.ios?.allowsCriticalAlerts}`}</Text>
          <Text>{`iOS alert style: ${notificationsPermissions.ios?.alertStyle}`}</Text>
          <Text>{`iOS allows previews: ${notificationsPermissions.ios?.allowsPreviews}`}</Text>
          <Text>{`iOS provides app notification settings: ${notificationsPermissions.ios?.providesAppNotificationSettings}`}</Text>
          <Text>{`iOS allows announcements: ${notificationsPermissions.ios?.allowsAnnouncements}`}</Text>
        </>
      )}
      <Text>{`Status: ${notificationsPermissions.status}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    minHeight: 125,
    backgroundColor: "#eee",
  },
  title: {
    fontWeight: "bold",
  },
});

export { NotificationsPermissions };
