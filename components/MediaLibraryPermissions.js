// @ts-check
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as MediaLibrary from "expo-media-library";

const MediaLibraryPermissions = () => {
  const [mediaLibraryPermissions, requestMediaLibraryPermission] = MediaLibrary.usePermissions()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Media Library Permission</Text>
      <Text>{`Access privileges: ${mediaLibraryPermissions?.accessPrivileges}`}</Text>
      <Text>{`Can ask again: ${mediaLibraryPermissions?.canAskAgain}`}</Text>
      <Text>{`Expires: ${mediaLibraryPermissions?.expires}`}</Text>
      <Text>{`Granted: ${mediaLibraryPermissions?.granted}`}</Text>
      <Text>{`Status: ${mediaLibraryPermissions?.status}`}</Text>
      <Button
        title={"Request media library permission"}
        onPress={requestMediaLibraryPermission}
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

export { MediaLibraryPermissions };
