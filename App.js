import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";

const logo = require("./assets/fan_finder_logo.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={logo} />
        <Button label="view gigs near me" />
        <Button label="view friends" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 250,
  },
});
