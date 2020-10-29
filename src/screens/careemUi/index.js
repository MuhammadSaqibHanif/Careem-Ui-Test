import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

import SquareCard from '../../components/SquareCard/index';

const CareemUi = () => {
  const services = [
    'Car',
    'Bike',
    'Food',
    'Delivery',
    'Send Credit',
    'Recharge',
  ];

  return (
    <>
      <StatusBar backgroundColor="#f1f5f8" barStyle="dark-content" />

      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.body}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                source={require('../../assets/icocns/careem-logo.png')}
                style={{width: 120, height: 30}}
                resizeMode="center"
              />

              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../assets/icocns/gift-box.png')}
                    style={{width: 18, height: 18}}
                  />

                  <Text
                    style={{
                      marginHorizontal: 5,
                      fontSize: 17,
                      fontWeight: 'bold',
                    }}>
                    7,517 pts
                  </Text>

                  <Image
                    source={require('../../assets/icocns/arrow-point-to-right.png')}
                    style={{width: 10, height: 10}}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <SquareCard services={services} />

            <View style={styles.orderCard} elevation={5}>
              <Text style={styles.textStyle}>ORDER FOOD</Text>

              <View
                style={{
                  width: '65%',
                  alignSelf: 'flex-end',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    marginBottom: 5,
                    fontWeight: 'bold',
                  }}>
                  Welcome Gift
                </Text>

                <Text
                  style={{
                    fontSize: 16,
                    marginBottom: 5,
                    color: 'gray',
                  }}>
                  Ordering for the first time? Save 70% on your first food
                  order. Use Code: HANGRY
                </Text>
              </View>

              <TouchableOpacity style={styles.orderNow}>
                <Text
                  style={{color: 'green', fontSize: 18, fontWeight: 'bold'}}>
                  Order now
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.foodCard} elevation={5}>
              <Text style={styles.textStyle}>FOOD</Text>

              <Text style={styles.textStyle}>SHOW ALL</Text>
            </View>
          </View>

          <View style={{height: 90}} />
        </ScrollView>

        <View style={styles.bottomCircle} elevation={5}>
          <Image
            source={require('../../assets/icocns/C.png')}
            style={{width: 25, height: 25, alignSelf: 'center'}}
          />

          <Text style={styles.textStyle}>Pay</Text>
        </View>

        <View style={styles.bottom}>
          <View>
            <Image
              source={require('../../assets/icocns/home.png')}
              style={styles.bottomIcon}
            />

            <Text style={styles.textStyle}>Home</Text>
          </View>

          <View>
            <Text style={styles.textStyle}>PKR 0</Text>
          </View>

          <View>
            <Image
              source={require('../../assets/icocns/user.png')}
              style={styles.bottomIcon}
            />

            <Text style={styles.textStyle}>Profile</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f5f8',
    flex: 1,
  },
  body: {
    width: '93%',
    alignSelf: 'center',
    marginTop: 22,
  },
  bottomIcon: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  textStyle: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottom: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingBottom: 10,
    paddingTop: 20,
  },
  bottomCircle: {
    backgroundColor: '#fff',
    width: 65,
    height: 65,
    flexDirection: 'row',
    borderRadius: 65 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    zIndex: 2,
    left: Dimensions.get('window').width / 2 - 36,
  },
  orderCard: {
    backgroundColor: '#fff',
    marginVertical: 8,
    borderRadius: 10,
    padding: 15,
  },
  orderNow: {
    marginTop: 10,
    backgroundColor: '#e6f6eb',
    paddingVertical: 12,
    borderRadius: 40,
    alignItems: 'center',
    width: '100%',
  },
  foodCard: {
    backgroundColor: '#fff',
    marginVertical: 8,
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CareemUi;
