import React from 'react';
import {View, Image, Text, Button} from 'react-native';

const YourApp= () =>{
  return(
    <View style={{flex:1, backgroundColor:'#00CCF9'}}>

      <View style={{
        flex:2,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center'
      }}>
        <Image  source={require('./assets/E8.png')}
          style={{height:150, width:150, }}/>
      </View>

      <View style={{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        
      }}>
        <Text style={{
          fontSize: 23,
          textAlign: "center",
          fontWeight: "bold",
          width: 189,
        }}>GROWN{'\n'} YOUR BUSINESS</Text>
      </View>

      <View style={{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center'
      }}>
        <Text style={{
          fontSize: 15,
          textAlign: "center",
          fontWeight: "bold",
          width: 259,
        }}>We will help you grow your business online server</Text>
      </View>

      <View style={{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',

      }}>
        <Button title='LOGIN' color="#E3C000" ></Button>
        <Button title='SIGN UP' color="#E3C000"></Button>
      </View>

    </View>
  )
}
export default YourApp;