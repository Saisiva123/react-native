import React from "react";
import {StyleSheet, Image, View ,SafeAreaView} from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import GoogleAutocomplete from "../components/GoogleAutocomplete";
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.logo}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
           <GoogleAutocomplete />
        <NavOptions />
      </View>
     </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
