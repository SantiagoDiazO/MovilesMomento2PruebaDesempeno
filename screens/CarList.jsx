import { View, Text, StyleSheet } from 'react-native';
import { ListarCarros } from './Objects/Cars';

export default function CarList({ navigation }) {
  const cars = ListarCarros();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de autos</Text>
      <View style={styles.carList}>
        {cars.map((car) => (
          <View key={car.plateNumber} style={styles.carItem}>
            <Text style={styles.carPlate}>Placa: {car.plateNumber}</Text>
            <Text style={styles.carBrand}>Marca: {car.brand}</Text>
            <Text style={styles.carState}>Estado: {car.state ? 'Disponible' : 'No Disponible'}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  carList: {
    flex: 1,
    alignItems: 'stretch',
  },
  carItem: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  carPlate: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  carBrand: {
    fontSize: 16,
  },
  carState: {
    marginTop: 5,
  },
});