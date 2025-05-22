import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';

interface TaskItemProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
  editMode: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ title, completed, onToggle, onDelete, editMode }) => {
  return (
    <View style={styles.taskItem}>
      {editMode && (
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <Text style={styles.deleteText}>✕</Text>
        </TouchableOpacity>
      )}
      
      <TouchableOpacity onPress={onToggle} style={styles.contentWrapper}>
        <Checkbox
          value={completed}
          onValueChange={onToggle}
          color={completed ? '#FF6B6B' : undefined}
          style={styles.checkbox}
        />
        <Text style={[styles.taskText, completed && styles.completedText]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  deleteButton: {
    marginRight: 10,
  },
  deleteText: {
    fontSize: 18,
    color: '#FF6B6B',
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  checkbox: {
    marginRight: 15,
  },
  taskText: {
    fontSize: 20,
    color: '#2E2E2E',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});
