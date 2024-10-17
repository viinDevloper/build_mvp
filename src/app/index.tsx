import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

type Props = {};

const index = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
      <Link href={"/signin"} asChild>
        <TouchableOpacity>
          <Text>Go to SignIn Screen</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/signup"} asChild>
        <TouchableOpacity>
          <Text>Go to SignUp Screen</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/onboarding"} asChild>
        <TouchableOpacity>
          <Text>Go to Onboarding Screen</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
