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
      [1, 1, 0],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale }],
    };
  });

  return (
    <Animated.View style={[styles.container, rCircleStyle]}>
      <Text style={styles.title}>{page.title}</Text>
      <Text style={styles.description}>{page.description}</Text>
      <View style={styles.circleContainer}>
        {page.source && (
          <Animated.Image
            source={page.source}
            style={[styles.image,]}
            resizeMode={"contain"}
          />
        )}
      </View>
    </Animated.View>
  );
};

const CIRCLE_WIDTH = SCREEN_WIDTH * 0.7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: SCREEN_WIDTH,
    height: '100%',
    paddingHorizontal: 15,
    paddingVertical: 80,
  },
  circleContainer: {
    width: '100%',
    aspectRatio: 1,
    position: "absolute",
    borderRadius: CIRCLE_WIDTH / 2,
    marginTop: 240,
    marginLeft: 18
  },
  image: {
    height: SCREEN_HEIGHT * 0.3,
    width: SCREEN_WIDTH * 0.9,
    aspectRatio: 1,
    position: "absolute",
    borderRadius: 20,
  },
  circle: {
    width: "100%",
    height: "100%",
    borderRadius: CIRCLE_WIDTH / 2,
    backgroundColor:"red"
  },
  title: {
    marginBottom: 5,
    fontSize: 46,
    fontWeight: "700",
  },
  description: {
    fontSize: 14,
    color: "grey",
  },
});

export default OnboardingPage;
