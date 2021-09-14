import React, { useEffect, useState } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

const LocationPermissions = () => {
  const [locationForegroundPermissions, setLocationForegroundPermissions] =
    useState({
      android: {
        accuracy: undefined,
      },
      canAskAgain: undefined,
      expires: undefined,
      granted: undefined,
      ios: {
        scope: undefined,
      },
      status: undefined,
    });
  const [locationBackgroundPermissions, setLocationBackgroundPermissions] =
    useState({
      canAskAgain: undefined,
      expires: undefined,
      granted: undefined,
      status: undefined,
    });

  useEffect(() => {
    const getLocationForegroundPermissions = async () => {
      if (Platform.OS === "android") {
        const { android, canAskAgain, expires, granted, status } =
          await Location.getForegroundPermissionsAsync();
        setLocationForegroundPermissions({
          android,
          canAskAgain,
          expires,
          granted,
          status,
        });
      } else {
        const { canAskAgain, expires, granted, ios, status } =
          await Location.getForegroundPermissionsAsync();
        setLocationForegroundPermissions({
          canAskAgain,
          expires,
          granted,
          ios,
          status,
        });
      }
    };
    const getLocationBackgroundPermissions = async () => {
      const { canAskAgain, expires, granted, status } =
        await Location.getBackgroundPermissionsAsync();
      setLocationBackgroundPermissions({
        canAskAgain,
        expires,
        granted,
        status,
      });
    };
    getLocationForegroundPermissions();
    getLocationBackgroundPermissions();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Location Foreground Permission</Text>
        {Platform.OS === "android" && (
          <Text>{`Android accuracy: ${locationForegroundPermissions.android?.accuracy}`}</Text>
        )}
        <Text>{`Can ask again: ${locationForegroundPermissions.canAskAgain}`}</Text>
        <Text>{`Expires: ${locationForegroundPermissions.expires}`}</Text>
        <Text>{`Granted: ${locationForegroundPermissions.granted}`}</Text>
        {Platform.OS === "ios" && (
          <Text>{`iOS scope: ${locationForegroundPermissions.ios?.scope}`}</Text>
        )}
        <Text>{`Status: ${locationForegroundPermissions.status}`}</Text>
        <Button
          title={"Request location foreground permission"}
          onPress={async () => {
            if (Platform.OS === "android") {
              const { android, canAskAgain, expires, granted, status } =
                await Location.requestForegroundPermissionsAsync();
              setLocationForegroundPermissions({
                android,
                canAskAgain,
                expires,
                granted,
                status,
              });
            } else {
              const { canAskAgain, expires, granted, ios, status } =
                await Location.requestForegroundPermissionsAsync();
              setLocationForegroundPermissions({
                canAskAgain,
                expires,
                granted,
                ios,
                status,
              });
            }
          }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Location Background Permission</Text>
        <Text>{`Can ask again: ${locationBackgroundPermissions.canAskAgain}`}</Text>
        <Text>{`Expires: ${locationBackgroundPermissions.expires}`}</Text>
        <Text>{`Granted: ${locationBackgroundPermissions.granted}`}</Text>
        <Text>{`Status: ${locationBackgroundPermissions.status}`}</Text>
        <Button
          title={"Request location background permission"}
          onPress={async () => {
            const { canAskAgain, expires, granted, status } =
              await Location.requestBackgroundPermissionsAsync();
            setLocationBackgroundPermissions({
              canAskAgain,
              expires,
              granted,
              status,
            });
          }}
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
