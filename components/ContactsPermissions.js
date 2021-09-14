import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Contacts from "expo-contacts";

const ContactsPermissions = () => {
  const [contactsPermissions, setContactsPermissions] = useState({
    canAskAgain: undefined,
    expires: undefined,
    granted: undefined,
    status: undefined,
  });

  useEffect(() => {
    const getContactsPermissions = async () => {
      const { canAskAgain, expires, granted, status } =
        await Contacts.getPermissionsAsync();
      setContactsPermissions({
        canAskAgain,
        expires,
        granted,
        status,
      });
    };
    getContactsPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts Permission</Text>
      <Text>{`Can ask again: ${contactsPermissions.canAskAgain}`}</Text>
      <Text>{`Expires: ${contactsPermissions.expires}`}</Text>
      <Text>{`Granted: ${contactsPermissions.granted}`}</Text>
      <Text>{`Status: ${contactsPermissions.status}`}</Text>
      <Button
        title={"Request contacts permission"}
        onPress={async () => {
          const { canAskAgain, expires, granted, status } =
            await Contacts.requestPermissionsAsync();
          setContactsPermissions({
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

export { ContactsPermissions };
