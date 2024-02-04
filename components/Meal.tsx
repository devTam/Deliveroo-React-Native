import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { IMeal, RootStackParamList } from "../types"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

const Meal: React.FC<IMeal> = ({ id, image, name, price }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Meal", { id, name, price, image })}
    >
      <Image
        source={{ uri: image }}
        className="h-32 w-60 rounded-md mr-4 mb-2 bg-cover bg-center"
      />
      <View className="px-2">
        <Text className="font-medium text-sm mb-1">{name}</Text>
        <Text className="text-sm">
          {price.toLocaleString("ig-NG", {
            currency: "NGN",
            style: "currency",
          })}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Meal
