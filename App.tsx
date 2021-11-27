import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { NativeModules } from "react-native";

export default function App() {
  const [message, setMessage] = useState("initial message");

  const onPress = () => {
    const { CalendarModule } = NativeModules;
    console.log("CalendarModuleFoo", CalendarModule);
    setMessage(String(CalendarModule));
    CalendarModule.createCalendarEvent("testName", "testLocation");
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>message: {message}</Text>
      <Button onPress={onPress} title="click native modules" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
