// screens/Index.tsx
import React, { useState, useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import TaskItem from '@/components/TaskItem';
import AddTaskBar from '@/components/AddTaskBar';
import { ColorContext } from '@/context/ColorContext';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function Index() {
  const { checkboxColor, strikeColor } = useContext(ColorContext);
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Buy groceries', completed: true },
    { id: 2, title: 'Call plumber', completed: false },
  ]);
  const [editMode, setEditMode] = useState<boolean>(false);

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const addTask = () => {
    Alert.prompt('New Task', 'Enter a task name', text => {
      if (text?.trim()) {
        setTasks(prev => [
          ...prev,
          { id: Date.now(), title: text.trim(), completed: false },
        ]);
      }
    });
  };

  const toggleEditMode = () => {
    setEditMode(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <AddTaskBar
        onAdd={addTask}
        onToggleEdit={toggleEditMode}
        editMode={editMode}
      />
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          title={task.title}
          completed={task.completed}
          onToggle={() => toggleTask(task.id)}
          onDelete={() => deleteTask(task.id)}
          editMode={editMode}
          checkboxColor={checkboxColor}
          strikeColor={strikeColor}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
});
