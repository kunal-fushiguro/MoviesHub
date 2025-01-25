import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { colors } from "@/theme/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import MoviesListVertically from "@/components/MoviesListVertically";
import { CardsTypesTwo } from "@/types";
import { trendData } from "@/temp/tempdata";

const SearchScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [text, onChangeText] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<CardsTypesTwo[] | null>(trendData.results);

  return (
    <ScrollView>
      <View style={style.container}>
        <View>
          <TextInput
            style={style.inputBox}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search here"
            placeholderTextColor={colors.text}
          />
          <TouchableOpacity
            style={style.cancelButton}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <MaterialIcons name="cancel" size={50} color="white" />
          </TouchableOpacity>
        </View>
        {/* Results of Search */}
        <MoviesListVertically title="Results" data={data} />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  text: {
    color: colors.text,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    minHeight: Dimensions.get("window").height + 30,
    paddingTop: 25,
  },
  inputBox: {
    width: Dimensions.get("screen").width - 50,
    marginHorizontal: "auto",
    borderColor: colors.text,
    borderWidth: 2,
    marginVertical: 20,
    height: 60,
    borderRadius: 40,
    paddingLeft: 20,
    paddingRight: 55,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
  },
  cancelButton: {
    position: "absolute",
    top: 25,
    right: 30,
  },
});

export default SearchScreen;
