import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.title}>
          <Image source={require('./assets/peepo-juice.gif')} style={styles.image} />
          <Image source={require('./assets/peepo-juice-sad.gif')} style={styles.image} />
        </View>
        <Text style={styles.text}>Peepomon world!🔥</Text>
        <Image source={require('./assets/peepo-dance.gif')} style={styles.image2} />
        <PokemonCard></PokemonCard>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 35,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  image2: {
    width: 300,
    height: 150,
  },
});
