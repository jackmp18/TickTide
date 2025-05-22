import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface AddTaskBarProps {
  onAdd: () => void;
  onToggleEdit: () => void;
  editMode: boolean;
}

const AddTaskBar: React.FC<AddTaskBarProps> = ({ onAdd, onToggleEdit, editMode }) => {
  return (
    <View style={styles.bar}>
      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onToggleEdit}>
        <Text style={styles.buttonText}>{editMode ? 'Done' : 'Edit'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTaskBar;

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10, // Reduced from 50 to tighten spacing
    paddingBottom: 10, // Optional for consistent spacing below
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: '#0077B6',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#0077B6',
    fontWeight: '600',
  },
});
