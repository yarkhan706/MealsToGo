import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

import { Searchbar } from "react-native-paper";
import RestaurantsInfo from "../components/restaurants-info.component";
const isAndriod = Platform.OS === "android";

const RestaurantsScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar
            style={{borderRadius:10, margin:10}}
            placeholder="Search"
          />
        </View>
        <View style={styles.list}>
          <RestaurantsInfo />
        </View>
      </SafeAreaView>
    </>
  );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndriod ? StatusBar.currentHeight : 0,
  },
  search: { },
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: "green",
  },
});
