import { View, Text, StyleSheet, Pressable } from "react-native";
function GoalItem({ item, id, onDelete }) {
  return (
    <View key={item} style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDelete.bind(this, id)}
        style={({pressed})=> pressed && styles.pressedText }
      >
        <Text style={styles.goalText}>{item}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedText: {
    opacity: 0.5
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
