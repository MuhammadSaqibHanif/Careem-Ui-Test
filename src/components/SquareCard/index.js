import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const SquareCard = ({services}) => {
  return (
    <View style={styles.serviceCard}>
      {services.map((service, index) => (
        <View key={index} style={styles.squareBox} elevation={5}>
          <Text style={styles.text}>{service}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  squareBox: {
    backgroundColor: '#fff',
    width: '31%',
    marginBottom: 10,
    height: 100,
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  serviceCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 7,
  },
});

export default SquareCard;
