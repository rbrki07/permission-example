// @ts-check
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Camera } from "expo-camera";

const CameraPermissions = () => {
  const [cameraPermissions, requestCameraPermission] = Camera.useCameraPermissions();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camera Permission</Text>
      <Text>{`Can ask again: ${cameraPermissions?.canAskAgain}`}</Text>
      <Text>{`Expires: ${cameraPermissions?.expires}`}</Text>
      <Text>{`Granted: ${cameraPermissions?.granted}`}</Text>
      <Text>{`Status: ${cameraPermissions?.status}`}</Text>
      <Button
        title={"Request camera permission"}
        onPress={requestCameraPermission}
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

export { CameraPermissions };
