import { View, Text, ScrollView, FlatList } from "react-native"
import { DATA } from "../assets/constants"
import Category from "./Category"
import React from "react"



const Categories = () => {
  return (
    <View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Category title={item.title} meals={item.meals} emoji={item.emoji} />
        )}
      />
    </View>
  )
}

export default Categories
