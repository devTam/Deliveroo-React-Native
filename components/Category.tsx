import React from "react"
import { IMeal } from "../types"

import { View, Text, FlatList } from "react-native"
import Meal from "./Meal"

interface ICategory {
  title: string;
  emoji: string;
  meals: IMeal[];
}

const Category: React.FC<ICategory> = ({ title, meals, emoji }) => {
  return (
    <View className="px-4 py-3 border-b-8 border-white">
      <Text className="font-bold text-lg mb-3">{title} {emoji}</Text>
      <FlatList
        data={meals}
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

export default Category
