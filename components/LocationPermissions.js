// @ts-check
import React from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

const LocationPermissions = () => {
  const [locationForegroundPermissions, requestLocationForegroundPermission] = Location.useForegroundPermissions();
  const [locationBackgroundPermissions, requestLocationBackgroundPermission] = Location.useBackgroundPermissions();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Location Foreground Permission</Text>
        {Platform.OS === "android" && (
          <Text>{`Android accuracy: ${locationForegroundPermissions?.android?.accuracy}`}</Text>
        )}
        <Text>{`Can ask again: ${locationForegroundPermissions?.canAskAgain}`}</Text>
        <Text>{`Expires: ${locationForegroundPermissions?.expires}`}</Text>
        <Text>{`Granted: ${locationForegroundPermissions?.granted}`}</Text>
        {Platform.OS === "ios" && (
          <Text>{`iOS scope: ${locationForegroundPermissions?.ios?.scope}`}</Text>
        )}
        <Text>{`Status: ${locationForegroundPermissions?.status}`}</Text>
        <Button
          title={"Request location foreground permission"}
          onPress={requestLocationForegroundPermission}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Location Background Permission</Text>
        <Text>{`Can ask again: ${locationBackgroundPermissions?.canAskAgain}`}</Text>
        <Text>{`Expires: ${locationBackgroundPermissions?.expires}`}</Text>
        <Text>{`Granted: ${locationBackgroundPermissions?.granted}`}</Text>
        <Text>{`Status: ${locationBackgroundPermissions?.status}`}</Text>
        <Button
          title={"Request location background permission"}
          onPress={requestLocationBackgroundPermission}
        />
      </View>
    </>
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

export { LocationPermissions };
