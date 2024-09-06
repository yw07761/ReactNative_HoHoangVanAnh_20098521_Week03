import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Image, TextInput, View } from "react-native";

export default function Screen8() {
  return (
<View style={styles.wrapper}>
            <Image style={styles.eyeImg} source={require('../assets/eyeball.png')} />
            <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="Please input user name" />
                <TextInput style={styles.input} placeholder="Please input password" />
                <Image style={[styles.imgInput, styles.imgInput1]} source={require('../assets/Group3.png')}/>
                <Image style={[styles.imgInput, styles.imgInput2]} source={require('../assets/Group5.png')}/>
            </View>
            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.btnLoginTxt}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.optionWrapper}>
                <Text style={styles.optionTxt}>Register</Text>
                <Text style={styles.optionTxt}>Forgot Password</Text>
            </View>
            <View style={styles.otherWrapper}>
                <Image style={styles.otherImg} source={require('../assets/Line4.png')} />
                <Text style={styles.otherTxt}>Other Login Method</Text>
                <Image style={styles.otherImg} source={require('../assets/Line4.png')} />
            </View>
            <View style={styles.socialWrapper}>
                <Image style={styles.socialImg} source={require('../assets/Group8.png')} />
                <Image style={styles.socialImg} source={require('../assets/Group9.png')} />
                <Image style={[styles.socialImg, {position: 'relative'}]} source={require('../assets/Rectangle19.png')} />
                <Image style={styles.iconFacebook} source={require('../assets/iconfacebook.png')} />
            </View>
        </View>
  )
}
const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    eyeImg: {
        width: 140,
        height: 140,
        marginTop: 30,
    },
    inputWrapper: {
        opacity: 0.3,
        position: 'relative',
    },
    input: {
        marginTop: 20,
        width: 330,
        height: 54,
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
        paddingLeft: 55,
        borderBottomColor: '#ccc',
        borderBottomWidth: 3,
    },
    imgInput: {
        width: 30,
        height: 30,
        position: 'absolute',
        color: 'blue',
    },
    imgInput1: {
        top: 30,
        left: 10,
    },
    imgInput2: {
        left: 10,
        bottom: 15,
    },
    btnLogin: {
        backgroundColor: '#386FFC',
        width: 330,
        height: 54,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 50,
    },
    btnLoginTxt: {
        color: '#fff'
    },
    optionWrapper: {
        width: 330,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    optionTxt: {
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
    },
    otherWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
    },
    otherImg: {
        width: 90,
        height: 1,
    },
    otherTxt: {
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
    },
    socialWrapper: {
        width: 330,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    socialImg: {
        width: 74,
        height: 74,
    },
    iconFacebook: {
        position: 'absolute',
        width: 32,
        height: 45,
        right: 28,
        top: 10,
    }
})