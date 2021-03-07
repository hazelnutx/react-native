import React from 'react'
import Reflectly from './src/Reflectly'

import { View, StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
export default function App() {
  return (
    <SafeAreaProvider>
      <Reflectly />
    </SafeAreaProvider>
  )
}
