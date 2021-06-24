import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 24
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20
  },
  title: {
    fontFamily: theme.fonts.title700,
    marginBottom: 4,
    fontSize: 18,
    color: theme.colors.heading
  },
  type: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight
  }
});