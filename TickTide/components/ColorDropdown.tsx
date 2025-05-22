import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu, Button, Text } from 'react-native-paper';

interface Option {
  label: string;
  value: string;
}

interface Props {
  label: string;
  selected: string;
  onSelect: (val: string) => void;
  options: Option[];
}

const ColorDropdown: React.FC<Props> = ({ label, selected, onSelect, options }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Menu
        visible={visible}
        onDismiss={() => setVisible(false)}
        anchor={
          <Button mode="outlined" onPress={() => setVisible(true)} style={styles.button}>
            {options.find((opt) => opt.value === selected)?.label || 'Choose'}
          </Button>
        }
      >
        {options.map((opt) => (
          <Menu.Item
            key={opt.value}
            onPress={() => {
              onSelect(opt.value);
              setVisible(false);
            }}
            title={opt.label}
          />
        ))}
      </Menu>
    </View>
  );
};

export default ColorDropdown;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#2E2E2E',
  },
  button: {
    width: '100%',
  },
});
