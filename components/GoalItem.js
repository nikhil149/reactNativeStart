import { View, Text, StyleSheet, Pressable } from "react-native";
function GoalItem({ item, id, onDelete }) {
  return (
    <Pressable onPress={onDelete.bind(this, id)}>
      <View key={item} style={styles.goalItem}>
        <Text style={styles.goalText}>{item}</Text>
      </View>
    </Pressable>
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
