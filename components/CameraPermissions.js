import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Camera } from "expo-camera";

const CameraPermissions = () => {
  const [cameraPermissions, setCameraPermissions] = useState({
    canAskAgain: undefined,
    expires: undefined,
    granted: undefined,
    status: undefined,
  });

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { canAskAgain, expires, granted, status } =
        await Camera.getPermissionsAsync();
      setCameraPermissions({
        canAskAgain,
        expires,
        granted,
        status,
      });
    };
    getCameraPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camera Permission</Text>
      <Text>{`Can ask again: ${cameraPermissions.canAskAgain}`}</Text>
      <Text>{`Expires: ${cameraPermissions.expires}`}</Text>
      <Text>{`Granted: ${cameraPermissions.granted}`}</Text>
      <Text>{`Status: ${cameraPermissions.status}`}</Text>
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

export { CameraPermissions };
