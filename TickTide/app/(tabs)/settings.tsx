import React, { useContext } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ColorDropdown from '@/components/ColorDropdown';
import { ColorContext } from '@/context/ColorContext';

export default function Settings() {
  const { checkboxColor, strikeColor, setCheckboxColor, setStrikeColor } = useContext(ColorContext);

  return (
    <ScrollView style={styles.container}>
      <ColorDropdown
        label="Checkbox Checked Color"
        selected={checkboxColor}
        onSelect={setCheckboxColor}
        options={[
          { label: 'Coral', value: '#FF6B6B' },
          { label: 'Green', value: '#2ECC71' },
          { label: 'Purple', value: '#9B59B6' },
          { label: 'Blue', value: '#0077B6' },
        ]}
      />

      <ColorDropdown
        label="Completed Task Line Color"
        selected={strikeColor}
        onSelect={setStrikeColor}
        options={[
          { label: 'Gray', value: '#999999' },
          { label: 'Emerald', value: '#2ECC71' },
          { label: 'Lavender', value: '#A29BFE' },
          { label: 'Dark Blue', value: '#34495E' },
        ]}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    padding: 20,
  },
});
