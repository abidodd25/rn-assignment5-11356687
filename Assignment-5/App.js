import { View, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
const App = () => {
  return (
    <View>
      {/**Header */}
      <View style={{ alignItems: "center", marginTop: 75 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Settings</Text>
      </View>
      {/**contains main project */}
      <View style={{ marginTop: 100 }}>
        {/**Language */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBlockColor: "red",
            alignItems: "center",
          }}
        >
          {/**text */}
          <View>
            <Text>Language</Text>
          </View>
          {/**icon */}
          <View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;
