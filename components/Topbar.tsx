import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "@/theme/theme";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

interface Props {
  marginTop: number;
}

const Topbar = ({ marginTop }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <>
      <View style={{ ...styles.container, marginTop }}>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Entypo name="home" size={30} color={colors.differentColor} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SerachScreen");
            }}
          >
            <FontAwesome
              name="search"
              size={30}
              color={colors.differentColor}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,

    width: Dimensions.get("screen").width,
    zIndex: 10,
    marginTop: 10,
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default Topbar;
