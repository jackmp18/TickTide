import { Text, View, StyleSheet } from 'react-native';

export default function settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2b280',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#2E2E2E',
  },
});
