// components/TaskItem.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox, IconButton } from 'react-native-paper';

interface Props {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
  editMode: boolean;
  checkboxColor: string;
  strikeColor: string;
}

const TaskItem: React.FC<Props> = ({
  title,
  completed,
  onToggle,
  onDelete,
  editMode,
  checkboxColor,
  strikeColor,
}) => {
  return (
    <View style={styles.container}>
      <Checkbox
        status={completed ? 'checked' : 'unchecked'}
        onPress={onToggle}
        color={checkboxColor}
      />
      <Text
        style={[
          styles.text,
          completed && {
            textDecorationLine: 'line-through',
            textDecorationColor: strikeColor,
          },
        ]}
      >
        {title}
      </Text>
      {editMode && (
        <IconButton
          icon="delete"
          onPress={onDelete}
          size={20}
          accessibilityLabel="Delete task"
        />
      )}
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 8,
  },
});
