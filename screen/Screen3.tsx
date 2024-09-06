import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const YourApp = () => {
  return (
    <LinearGradient
      colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#00CCF9']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/lock.png')}
            style={{ height: 170, width: 150 }}
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 23,
              textAlign: 'center',
              fontWeight: 'bold',
              width: 189,
            }}>
            FORGET{'\n'} PASSWORD
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              fontWeight: 'bold',
              width: 309,
            }}>
            Provide your account’s email for which you want to reset your password
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Image style={{
              width: 50,
              height: 50,
          }} source={require('./assets/mail.png')} />
          <input type="text" placeholder="Email" style={{
            fontFamily: 'Roboto',
            fontSize: '15px',
            paddingTop: 15,
            height: 30,
            width: 280,
            backgroundColor: '#c4c4c4',
            borderColor: 'transparent',
          }}/>

        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
              style={{
                backgroundColor: '#E3C000',
                paddingVertical: 15, // Adjust vertical padding
                paddingHorizontal: 140, // Adjust horizontal padding
                borderRadius: 5, // Optional: rounded corners
                justifyContent: 'center', // Center content vertically
                alignItems: 'center', // Center content horizontally
              }}
              onPress={() => {
          // Handle button press
              }}>
              <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>NEXT</Text>
            </TouchableOpacity>  
        </View>

      </View>
    </LinearGradient>
  );
};

export default YourApp;