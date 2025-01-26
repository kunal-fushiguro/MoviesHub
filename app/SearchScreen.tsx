import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "@/theme/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import MoviesListVertically from "@/components/MoviesListVertically";
import { CardsTypesTwo } from "@/types";
import LoadingScreen from "@/components/LoadingScreen";
import { searchMovies } from "@/api";

const SearchScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [text, onChangeText] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<CardsTypesTwo[] | null>(null);

  useEffect(() => {
    const fetchTypeData = async () => {
      setLoading(true);
      const data = await searchMovies(text);
      setLoading(false);
      setData(data);
    };
    fetchTypeData();
  }, [text]);

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
        {data == null && loading == false && (
          <View style={style.noResults}>
            <Text style={style.text}>No Result</Text>
          </View>
        )}
        {loading && <LoadingScreen />}
        {data != null && loading == false && (
          <MoviesListVertically title="Results" data={data} />
        )}
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  text: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: 40,
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
  noResults: {
    margin: "auto",
  },
});

export default SearchScreen;
