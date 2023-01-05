import React from 'react';
import { FlatList, View, Dimensions, Text, StyleSheet, Image, TouchableOpacity, } from "react-native";
import InputField from '../Components/InputComponent';
import Button1 from '../Components/Button';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const navigation = useNavigation();

    const BottomTab = () => {
        navigation.navigate('BottomTab')
    }

    return (
        <View>
            <Image source={require('../assets/Images/Login.jpg')} style={{ width: Dimensions.get('window').width * 1, height: Dimensions.get('window').height * 0.4, top: 32 }} />

            <Text style={{ fontSize: 23, alignSelf: 'center', top: 32 }}>
                Welcome Back
            </Text>


            <InputField
                height={50}
                t={95}
                txt1={'Email'}
                placeholder={'Email'}
            />

            <InputField
                height={50}
                t={95}
                txt1={'Password'}
                placeholder={'Password'}
            />


            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}><Text style={{ color: '#147fdc', alignSelf: 'flex-end', top: 120, right: 23 }}>Forgot Password?</Text></TouchableOpacity>

            <View style={{ top: 73 }}>
                <Button1 onPress={BottomTab} value={'LOGIN'} name={'chevron-right'} />
            </View>

            <View style={{ flexDirection: 'row', top: 230, alignSelf: 'center' }}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Text style={{ color: '#147fdc' }}>SIGN UP</Text></TouchableOpacity>
            </View>

        </View>

    )
}

export default Login;