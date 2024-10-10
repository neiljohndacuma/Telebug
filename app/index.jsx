import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-500">
      <Text className="text-3xl font-u_regular">Welcome To Tele-bug</Text>
        <Link href="/Home">Procced to home</Link>
      <StatusBar style="auto" />
    </View>
  );
}

