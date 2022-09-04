import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

import { OnboardingPages } from "constants";
import OnboardingPage from "components/OnboardingPage";

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
