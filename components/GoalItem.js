import { View, Text, StyleSheet } from "react-native";
function GoalItem({item}) {
  return (
    <View key={item} style={styles.goalItem}>
      <Text style={styles.goalText}>{item}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  goalText: {
    color: "white",
  },
});
