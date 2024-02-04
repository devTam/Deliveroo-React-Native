import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect } from "react"
import { ScrollView, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline"
import { MapPinIcon, UserIcon } from "react-native-heroicons/solid"
import { COLORS } from "../assets/constants"
import Categories from "../components/Categories"
import Featured from "../components/Featured"

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <View className="bg-orange-50 h-full">
      <SafeAreaView edges={["right", "left", "top"]} className="pt-5">
        <View>
          <View className="flex-row pb-3 items-center mx-4 space-x-2">
            {/* User Profile */}
            <View className="flex-row items-center flex-1">
              <View className="bg-orange-100 rounded-full h-7 w-7 items-center pt-1 overflow-hidden">
                <UserIcon size={25} color={COLORS.primary} />
              </View>
              <Text className="text-md font-bold ml-1">Hi, Foodlover!</Text>
            </View>
            {/* Location */}
            <View>
              <View className="flex-row items-center">
                <MapPinIcon size={20} color={COLORS.primary} />
                <Text className="text-sm mx-1">Your Location </Text>
                <ChevronDownIcon size={15} color={COLORS.primary} />
              </View>
            </View>
          </View>

          {/* Search Field */}
          <View className="flex-row items-center mx-4 pb-4">
            <View className="flex-row space-x-2 bg-gray-100 p-3 flex-1 rounded-md">
              <MagnifyingGlassIcon color="gray" />
              <TextInput placeholder="Search Food..." />
            </View>
          </View>
        </View>
        <ScrollView>
          {/* Featured */}
          <Featured />

          {/* Categories */}
          <Categories />
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen
