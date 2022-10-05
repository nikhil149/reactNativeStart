import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addNewGoalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const addGoalHandler = (goalInput) => {
    const updatedGoalList = [...new Set([...goalList, goalInput])];
    setGoalList(updatedGoalList);
    setShowModal(false);
  };

  const deleteItemHandler = (id) => {
    setGoalList((prevGoalList) =>
      prevGoalList.filter((goal, goalId) => goalId !== id)
    );
  };
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        onPress={addNewGoalHandler}
        color="#5e0acc"
      />
      <GoalInput
        onAddGoal={addGoalHandler}
        isVisible={showModal}
        onCloseModal={closeModalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => {
            return (
              <GoalItem
                item={itemData.item}
                id={itemData.index}
                onDelete={deleteItemHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
