import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const OnboardingPage = ({ page, translateX, index }) => {
  const rCircleStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * SCREEN_WIDTH,
      index * SCREEN_WIDTH,
      (index + 1) * SCREEN_WIDTH,
    ];

    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale }],
    };
  });

  const rImageStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * SCREEN_WIDTH,
      index * SCREEN_WIDTH,
      (index + 1) * SCREEN_WIDTH,
    ];
    const progress = interpolate(
      translateX.value,
      inputRange,
      [0, 0, 1],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [0.5, 1, 0],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [{ rotate: `${progress * Math.PI}rad` }],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <Animated.View style={[styles.circle, rCircleStyle]}></Animated.View>
        <Animated.Image
          source={page.source}
          style={[styles.image, rImageStyle]}
          resizeMode={"contain"}
        />
      </View>
      <Text style={styles.title}>{page.title}</Text>
      <Text style={styles.description}>{page.description}</Text>
    </View>
  );
};

const CIRCLE_WIDTH = SCREEN_WIDTH * 0.7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    paddingHorizontal: 20,
  },
  circleContainer: {
    width: CIRCLE_WIDTH,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  image: {
    height: SCREEN_HEIGHT * 0.5,
    width: SCREEN_WIDTH * 0.7,
    aspectRatio: 1,
    position: "absolute",
    // borderRadius: 20,
  },
  circle: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: CIRCLE_WIDTH / 2,
  },
  title: {
    textAlign: "center",
    marginBottom: 15,
    fontSize: 35,
    fontWeight: "700",
  },
  description: {
    textAlign: "center",
    fontSize: 14,
    color: "grey",
  },
});

export default OnboardingPage;
