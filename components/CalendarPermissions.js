import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Calendar from "expo-calendar";

const CalendarPermissions = () => {
  const [calendarPermissions, setCalendarPermissions] = useState({
    canAskAgain: undefined,
    expires: undefined,
    granted: undefined,
    status: undefined,
  });

  useEffect(() => {
    const getCalendarPermissions = async () => {
      const { canAskAgain, expires, granted, status } =
        await Calendar.getCalendarPermissionsAsync();
      setCalendarPermissions({
        canAskAgain,
        expires,
        granted,
        status,
      });
    };
    getCalendarPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar Permission</Text>
      <Text>{`Can ask again: ${calendarPermissions.canAskAgain}`}</Text>
      <Text>{`Expires: ${calendarPermissions.expires}`}</Text>
      <Text>{`Granted: ${calendarPermissions.granted}`}</Text>
      <Text>{`Status: ${calendarPermissions.status}`}</Text>
      <Button
        title={"Request calendar permission"}
        onPress={async () => {
          const { canAskAgain, expires, granted, status } =
            await Calendar.requestCalendarPermissionsAsync();
          setCalendarPermissions({
            canAskAgain,
            expires,
            granted,
            status,
          });
        }}
      />
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

export { CalendarPermissions };
