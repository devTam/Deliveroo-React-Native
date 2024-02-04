import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native"

import { NativeWindStyleSheet } from "nativewind"

import HomeScreen from './screens/HomeScreen';
import MealScreen from './screens/MealScreen'

const Stack = createNativeStackNavigator()
NativeWindStyleSheet.setOutput({
  default: "native"
})

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Meal" component={MealScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
