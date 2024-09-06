import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import { React, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';


export default function Screen5() {
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const [selectedRadio, setSelectedRadio] = useState(1);
  
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
        }}>REGISTER</Text>
      </View>

     <View style={styles.inputWrapper}>
        <TextInput placeholder="Name" style={styles.input} />
        <TextInput placeholder="Phone" style={styles.input} />       
        <TextInput placeholder="Email" style={styles.input} />       
        <TextInput placeholder="Password" style={styles.input} />       
        <TextInput placeholder='Birthday'
          secureTextEntry={!showPassword} style={styles.input} />
          <View style={styles.radioWrapper}>
                <TouchableOpacity style={{flexDirection:"row"}}
                    onPress={() => setSelectedRadio(1)}>
                <View style={styles.circle}>
                    {selectedRadio==1? <View style= {styles.radio}></View>: null}
                </View>
                <Text style={styles.sex}> Male </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:"row"}}
                    onPress={() => setSelectedRadio(2)}>
                <View style={styles.circle}>
                    {selectedRadio==2? <View style= {styles.radio}></View>: null}
                </View>
                <Text style={styles.sex}> Female </Text>
                </TouchableOpacity>
          </View>
            <TouchableOpacity  onPress={toggleShowPassword}
              style={{position:'absolute', right: 50, marginTop: 216}}
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
            paddingHorizontal: 120, // Adjust horizontal padding
            borderRadius: 5, // Optional: rounded corners
            justifyContent: 'center', // Center content vertically
            alignItems: 'center', // Center content horizontally
          }}
          onPress={() => {}}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>REGISTER</Text>
        </TouchableOpacity> 

        <Text style={{
          fontSize: 15,
          textAlign: "center",
        }}>When you agree to terms and conditions</Text>
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
    radioWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginRight: 120,
    },
    circle: {
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        width: 20,
        height: 20,
        marginTop: 20,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    radio: {
        borderRadius: '50%',
        backgroundColor: '#000',
        width: 10,
        height: 10,
    }
    ,
    sex: {
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
        marginTop: 20,
        marginLeft: 10,
    },
    
})