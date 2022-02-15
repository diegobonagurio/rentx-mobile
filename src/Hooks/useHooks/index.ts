import { useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components'

export function useHooks() {
  const route = useRoute()
  const theme = useTheme()
  const navigation = useNavigation()

  return {
    route,
    theme,
    navigation
  }
}
