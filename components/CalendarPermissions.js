// @ts-check
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Calendar from "expo-calendar";

const CalendarPermissions = () => {
  const [calendarPermissions, requestCalendarPermission] = Calendar.useCalendarPermissions();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar Permission</Text>
      <Text>{`Can ask again: ${calendarPermissions?.canAskAgain}`}</Text>
      <Text>{`Expires: ${calendarPermissions?.expires}`}</Text>
      <Text>{`Granted: ${calendarPermissions?.granted}`}</Text>
      <Text>{`Status: ${calendarPermissions?.status}`}</Text>
      <Button
        title={"Request calendar permission"}
        onPress={requestCalendarPermission}
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
