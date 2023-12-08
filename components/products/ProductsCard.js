import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProductsCard = ({ p }) => {
  const navigation = useNavigation();

  //more details of btn
  const handleMoreButton = (id) => {
    navigation.navigate("productDetails", { _id: id });
  };
  //Add to Cart
  const handleAddToCart = () => {
    alert("Item Added to Cart");
  };
  return (
    <View>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: p?.imageUrl }} />
        <Text style={styles.cardTitle}>{p?.name}</Text>
        <Text style={styles.cardDesc}>
          {" "}
          {p?.description.substring(0, 30)}...more
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handleMoreButton(p._id)}
          >
            <Text style={styles.btnText}>Details</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnCart} onPress={handleAddToCart}>
            <Text style={styles.btnText}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 4,
    borderColor: "lightpink",
    marginHorizontal: 8,
    marginVertical: 5,
    marginTop: 25,
    marginEnd: 5,
    width: "45%",
    padding: 5,
    backgroundColor: "aquamarine",
    justifyContent: "center",
    borderRadius: 10,
  },
  cardImage: {
    height: 150,
    width: "70%",
    marginBottom: 5,
    borderRadius: 14,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 10,
    textAlign: "left",
  },
  btnContainer: {
    marginTop: 5,
    marginRight: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "gray",
    height: 20,
    width: 70,

    borderRadius: 5,
    justifyContent: "center",
  },

  btnCart: {
    backgroundColor: "green",
    height: 20,
    width: 70,
    borderRadius: 5,
    justifyContent: "center",
  },
  btnText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default ProductsCard;
