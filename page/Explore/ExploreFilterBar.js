import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Center, HStack, Button } from "native-base";

export default function FilterBar({ navigation }) {
  const [selectedButton, setSelectedButton] = useState("ForYou");
  const pressHandler = () => {
    navigation.navigate("Region");
  };
  const pressHandlers = () => {
    navigation.navigate("Rating");
  };
  return (
    <NativeBaseProvider>
      <Center>
        <View>
          <HStack space={0} marginTop={5}>
            <Button
              size="sm"
              colorScheme={selectedButton === "ForYou" ? "purple" : "white"}
              _text={{
                color: selectedButton === "ForYou" ? "white" : "purple",
              }}
              style={{
                borderWidth: selectedButton !== "ForYou" ? 1 : 0,
                borderColor: "purple",
              }}
              hoverProps={{
                backgroundColor: "purple",
                _text: { color: "white" },
              }}
            >
              For You
            </Button>
            <Button
              size="sm"
              onPress={pressHandler}
              colorScheme={selectedButton === "Region" ? "purple" : "white"}
              _text={{
                color: selectedButton === "Region" ? "white" : "purple",
              }}
              style={{
                borderWidth: selectedButton !== "Region" ? 1 : 0,
                borderColor: "purple",
              }}
              hoverProps={{
                backgroundColor: "purple",
                _text: { color: "white" },
              }}
            >
              Region
            </Button>
            <Button
              onPress={pressHandlers}
              size="sm"
              colorScheme={selectedButton === "Rating" ? "purple" : "white"}
              _text={{
                color: selectedButton === "Rating" ? "white" : "purple",
              }}
              style={{
                borderWidth: selectedButton !== "Rating" ? 1 : 0,
                borderColor: "purple",
              }}
              hoverProps={{
                backgroundColor: "purple",
                _text: { color: "white" },
              }}
            >
              Rating
            </Button>
          </HStack>
        </View>
      </Center>
    </NativeBaseProvider>
  );
}
