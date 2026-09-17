import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app halo indri!</Text>
      <Text>Nama lengkap : Indri Setiawati</Text>
      <Text>Tempat, Tanggal lahir: Cirebon, 30 Agustus 2006</Text>
      <Text>Cita-Cita : menjadi org kaya raya </Text>
      <Text>Rencana Hidup : ingin menjadi org kaya dan tinggal di swiss </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
