import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
function GoalInput({ onAddGoal = () => {} }) {
  const [goalInput, setGoalInput] = useState("");
  const goalInputHandler = (enteredText) => {
    setGoalInput(enteredText);
  };
  const addGoalHandler=()=>{
    onAddGoal(goalInput);
    setGoalInput("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={goalInput}
        onChangeText={goalInputHandler}
        placeholder="Place your goal"
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
  },
});
