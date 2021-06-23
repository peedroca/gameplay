import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18
  },
  nameStatus: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bulletStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 9
  }
});