import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
function GoalInput({
  onAddGoal = () => {},
  isVisible,
  onCloseModal = () => {},
}) {
  const [goalInput, setGoalInput] = useState("");
  const goalInputHandler = (enteredText) => {
    setGoalInput(enteredText);
  };
  const addGoalHandler = () => {
    onAddGoal(goalInput);
    setGoalInput("");
  };
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          value={goalInput}
          onChangeText={goalInputHandler}
          placeholder="Place your goal"
        />
        <View style={styles.inputButtonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCloseModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16, 
    flex: 1,
  },
  inputButtonContainer: {
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    margin: 16,
    backgroundColor: "black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  button: {
    width: "25%",
    marginHorizontal: 8,
    marginTop: 16,
  },
});
