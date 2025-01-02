import React from "react";
import { View } from "react-native";
import { styles } from "../utils/Styles";
import Form from "../components/Form";

export default function HomePage() {
  return (
    <>
      <View style={styles.page}>
        <Form />
      </View>
    </>
  );
};