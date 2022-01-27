import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.welcome}> หน้าแรก</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.Text}>ราคาสินค้า</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ margin: 10, height: 60, width: 80, backgroundColor: "#2752E6", flex: 0.3 }} />
          <View style={{ margin: 10, height: 60, width: 80, backgroundColor: "#2752E6", flex: 0.3 }} />
          <View style={{ margin: 10, height: 60, width: 80, backgroundColor: "#2752E6", flex: 0.3 }} />
        </View>
        <Text style={styles.Text}>บริการด้านการค้าภายในประเทศ</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('TongfahScreen')}>
            <Image style={{ width: '78%', height: '50%', marginTop: 25, marginBottom: 20 }} source={{ uri: 'https://foodportal.cpfmshop.com/themes/frontend/assets/img/thongFar.png' }} />
            <Text style={styles.ButtonText}>
              สถานที่ร้านธงฟ้า
            </Text>
            <Image style={{ width: '70%', height: '10%', }} source={{ uri: 'https://inwfile.com/s-fg/pdz6i9.png' }} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('ComparePrice')}>
            <Image style={{ width: '78%', height: '50%', marginTop: 25, marginBottom: 6 }} source={{ uri: 'https://foodportal.cpfmshop.com/themes/frontend/assets/img/thongFar.png' }} />
            <Text style={styles.ButtonText}>
              เปรียบเทียบราคาสินค้า
            </Text>
            <Image style={{ width: '70%', height: '10%', }} source={{ uri: 'https://inwfile.com/s-fg/pdz6i9.png' }} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  profile: {
    marginBottom: 10,
    backgroundColor: '#0A214A',
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
  },

  welcome: {
    textShadowColor: '#000000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 10,
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FFFFFF',
  },

  Button: {
    alignItems: "center",
    marginHorizontal: '2%',
    backgroundColor: '#FFFFFF',
    width: 180,
    height: 300,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
  },

  ButtonText: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 15
  },

  Text: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 15
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
export default Home;


