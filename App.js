import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { CameraPermissions } from "./components/CameraPermissions";
import { MediaLibraryPermissions } from "./components/MediaLibraryPermissions";
import { CalendarPermissions } from "./components/CalendarPermissions";
import { ContactsPermissions } from "./components/ContactsPermissions";
import { LocationPermissions } from "./components/LocationPermissions";
import { NotificationsPermissions } from "./components/NotificationsPermissions";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CameraPermissions />
        <MediaLibraryPermissions />
        <CalendarPermissions />
        <ContactsPermissions />
        <LocationPermissions />
        <NotificationsPermissions />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
