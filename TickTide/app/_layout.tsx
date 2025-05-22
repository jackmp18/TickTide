// app/_layout.tsx
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Stack } from 'expo-router';
import { ColorProvider } from '@/context/ColorContext';

export default function RootLayout() {
  return (
    <PaperProvider>
     <ColorProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
     </ColorProvider>
    </PaperProvider>
  );
}
