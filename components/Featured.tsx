import React from "react"
import { View, Text, FlatList } from "react-native"
import { FEATURED } from "../assets/constants"
import Meal from "./Meal"

const Featured = () => {
  return (
    <View className="px-4 py-3 border-t-8 border-b-8 border-white">
      <Text className="font-bold text-lg items-center mb-3">Featured ⭐</Text>
      <FlatList
        data={FEATURED}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Meal
            name={item.name}
            price={item.price}
            image={item.image}
            id={item.id}
          />
        )}
      />
    </View>
  )
}

export default Featured
