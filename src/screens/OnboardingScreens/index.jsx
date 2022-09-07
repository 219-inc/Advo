import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import tw from 'twrnc'

import { OnboardingPages } from "constants";
import OnboardingPage from "components/OnboardingPage";

import { FontAwesome5 } from "@expo/vector-icons";

const OnboardingScreens = () => {

  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x;
    }
  })

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.ScrollView
        style={{ flex: 1 }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        {OnboardingPages.map((page, index) => (
          <OnboardingPage
            key={index.toString()}
            page={page}
            translateX={translateX}
            index={index}
          />
        ))}
      </Animated.ScrollView>
      <TouchableOpacity
        style={tw`absolute -bottom-30 -right-30 w-80 h-80 bg-yellow-500 rounded-full flex flex-row`}
      >
        <FontAwesome5
          name="arrow-right"
          size={48}
          color="white"
          style={tw`mx-28 my-24`}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default OnboardingScreens;
