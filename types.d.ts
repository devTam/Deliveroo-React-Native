interface IMeal {
  id: number
  name: string
  price: number
  image: string
}

type RootStackParamList = {
  Home: undefined;
  Meal: IMeal;
}

export { IMeal, RootStackParamList }
