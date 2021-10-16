import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "sdfswnffdkadsldsvnds",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "regurnckjnkewafvsjknncja",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];
const NavOptions = () => {
  const navigation = useNavigation();
  const selectedNavOption = (item) => {
    navigation.navigate(item.screen)
    console.log(item.screen);
  };
  const getHeight = (title) => {
    if (title == data[1].title) {
      return { height: 100, marginTop: 14, marginBottom: 10 };
    } else return { height: 120 };
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={tw`bg-gray-200 p-5 mr-3 rounded-md`}
      onPress={() => selectedNavOption(item)}
    >
      <View>
        <Image
          source={{ uri: item.image }}
          style={[styles.image, getHeight(item.title)]}
        />
        <Text style={tw`mt-2 text-sm font-bold`}>{item.title}</Text>
        <Icon
          style={tw`p-2 bg-black rounded-full w-10 text-center mt-4`}
          name="arrowright"
          type="antdesign"
          color="white"
        />
      </View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal
      keyExtractor={(item) => item.id}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: 120,
  },
});
