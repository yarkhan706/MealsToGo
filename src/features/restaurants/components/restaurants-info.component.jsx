import { View, StyleSheet, Text } from "react-native";

const RestaurantsInfo = ({ restaurant = {} }) => {
  const {
    name = "ASFAND",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "AKOSAK 101201 KSal",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default RestaurantsInfo;

const styles = StyleSheet.create({})