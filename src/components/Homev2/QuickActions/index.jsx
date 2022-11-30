import { View, Text, FlatList } from "react-native";
import React from "react";
import tw from "twrnc";

import { QuickActions as quickActions } from "constants";
import Action from "./Action";

const QuickActions = () => {
  return (
    <View style={tw`px-2 -mx-4 mt-6`}>
      <FlatList
        numColumns={3}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={quickActions}
        keyExtractor={(item) => item.id}
        renderItem={Action}
      />
    </View>
  );
};

export default QuickActions;
