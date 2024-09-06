import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import { React, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';


export default function Screen5() {
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
  
  return(
    <View style={{flex:1, backgroundColor:'#C1FFC1'}}>

      <View style={{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center'
      }}>
       <Text style={{
          fontSize: 23,
          fontWeight: "bold",
        }}>LOGIN</Text>
      </View>

     <View style={styles.inputWrapper}>
        <TextInput placeholder="Email" style={styles.input} />       
        <TextInput placeholder='Password'
          secureTextEntry={!showPassword} style={styles.input} />
            <TouchableOpacity  onPress={toggleShowPassword}
              style={{position:'absolute', right: 50, marginTop: 90}}
              >
                <Ionicons
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={24}
                  color="black"
                />
            </TouchableOpacity>
      </View>

      <View style={{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',

      }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#E53935',
            paddingVertical: 15, // Adjust vertical padding
            paddingHorizontal: 140, // Adjust horizontal padding
            borderRadius: 5, // Optional: rounded corners
            justifyContent: 'center', // Center content vertically
            alignItems: 'center', // Center content horizontally
          }}
          onPress={() => {}}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>LOGIN</Text>
        </TouchableOpacity> 

        <Text style={{
          fontSize: 15,
          textAlign: "center",
        }}>When you agree to terms and conditions</Text>

        <Text style={{
          fontSize: 15,
          textAlign: "center",
          color: '#5D25FA'
        }}>For got your password?</Text>

        <Text style={{
          fontSize: 15,
          textAlign: "center",
        }}>Or login with</Text>
      </View>

      <View style={styles.btnWrapperIcon}>
        <TouchableOpacity style={[styles.btnSocial, { backgroundColor: '#4267B2' }]}>
          <Image style={styles.btnImage1} source={require('./assets/iconfacebook.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnSocial, { backgroundColor: '#0058d9' }]}>
           <Image style={styles.btnImage2} source={require('./assets/iconzalo.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnSocial, styles.btnBorder]}>
            <Image style={styles.btnImage2} source={require('./assets/icongoogle.png')} />
        </TouchableOpacity>
      </View>

    </View>
  )
};
const styles = StyleSheet.create({
    inputWrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#c4c4c4',
        marginTop: 10,
        width: 330,
        height: 54,
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
        paddingLeft: 10,
    },
    btnWrapperIcon: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
    },
    btnSocial: {
        width: '28%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnImage1: {
        width: 35,
        height: 35,
    },
    btnImage2: {
        width: 25,
        height: 25,
    },
    btnBorder: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#0058d9',
    }
    
})