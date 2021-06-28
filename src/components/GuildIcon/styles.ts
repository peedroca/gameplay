import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  image: {
    height: 66,
    width: 62
  },
  container: {
    height: 66,
    width: 62,
    borderRadius: 8,
    backgroundColor: theme.colors.dicord,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  }
});