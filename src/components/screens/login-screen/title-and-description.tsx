import { View, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  description: string;
};
const TitleAndDesription = ({ title, description }: Props) => {
  return (
    <View style={styles.titleAndDescription}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleAndDescription: {
    width: "100%",
    gap: 8,
    alignItems: "center",
    letterSpacing: -0.2,
  },
  title: {
    fontSize: 24,
    fontFamily: "Inter",
    fontWeight: "bold",
    color: "#383535",
  },
  description: {
    fontSize: 14,
    color: "#383F41",
    textAlign: "center",
  },
});

export default TitleAndDesription;
