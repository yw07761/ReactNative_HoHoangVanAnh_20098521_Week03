import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
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
          <Text
            style={{
              fontSize: 70,
              textAlign: 'center',
              fontWeight: 'bold',
              width: 189,
            }}>
            CODE
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center', // Centers items vertically
            alignItems: 'center',     // Centers items horizontally
          }}>
          <Text
            style={{
              fontSize: 23,
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: 70, // Add space between the texts
            }}>VERIFICATION
          </Text> 
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>Enter the one-time password sent to ++849092605798
          </Text>
        </View>

        <View style={styles.blockWrapper}>
            <View style={styles.block}>
                <input type="text" style={styles.inputCode} />
            </View>
            <View style={styles.block}>
                <input type="text" style={styles.inputCode} />
            </View>
            <View style={styles.block}>
                <input type="text" style={styles.inputCode} />
            </View>
            <View style={styles.block}>
                <input type="text" style={styles.inputCode} />
            </View>
            <View style={styles.block}>
                <input type="text" style={styles.inputCode} />
            </View>
            <View style={styles.block}>
                <input type="text" style={styles.inputCode} />
            </View>       
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
                paddingHorizontal: 120, // Adjust horizontal padding
                borderRadius: 5, // Optional: rounded corners
                justifyContent: 'center', // Center content vertically
                alignItems: 'center', // Center content horizontally
              }}
              onPress={() => {
          // Handle button press
              }}>
              <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>VERIFY CODE</Text>
            </TouchableOpacity>        
        </View>

      </View>
    </LinearGradient>

  );

};
const styles = StyleSheet.create({
    blockWrapper: {
        flex: 1,   
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
    block: {
        width: 50,
        height: 50,
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: 1,
    },

    inputCode: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
  }
})
export default YourApp;