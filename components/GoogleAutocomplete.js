import React from "react";
import { StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GoogleAutocomplete = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      styles={{
        container: {
          flex: 0,
        },
        textInput: {
          fontSize: 20,
        },
      }}
      debounce={400}
      onPress={(data, details = null) => {
        console.log(data, details);
      }}
      query={{
        key: "AIzaSyB1TihL4D4cqpVOeI2R9MhS-PBkRSqJtHw",
        language: "en",
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
    />
  );
};

export default GoogleAutocomplete;
