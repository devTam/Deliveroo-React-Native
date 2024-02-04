import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native"
import React, { useLayoutEffect } from "react"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { RootStackParamList } from "../types"
import { ArrowLeftIcon } from "react-native-heroicons/outline"
import { COLORS } from "../assets/constants"

const MealScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  const {
    params: { name, image, price },
  } = useRoute<RouteProp<RootStackParamList, "Meal">>()

  return (
    <View>
      <ScrollView>
        <View className="relative">
          <Image source={{ uri: image }} className="h-60 w-full p-4" />
          <TouchableOpacity onPress={navigation.goBack} className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
            <ArrowLeftIcon
              size={25}
              color={COLORS.primary}

            />
          </TouchableOpacity>
        </View>
        <View className="p-4">
          <Text className="text-xl font-bold">{name}</Text>
          <Text className="text-lg">
            {price.toLocaleString("ig-NG", {
              currency: "NGN",
              style: "currency",
            })}
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default MealScreen
