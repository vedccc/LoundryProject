import React from 'react';
import { FlatList, View, Dimensions, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import InputField from '../Components/InputComponent';
import Button1 from '../Components/Button';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: '#f5f5f5', height: '100%' }}>
            <ScrollView>
                <Image source={require('../assets/Images/Signupimg.jpg')} style={{ width: Dimensions.get('window').width * 1, height: Dimensions.get('window').height * 0.3, top: 32 }} />

                <Text style={{ fontSize: 20, alignSelf: 'center', top: 32 }}>
                    Sign Up
                </Text>


                <InputField
                    height={64}
                    t={64}
                    txt1={'Full Name'}
                    placeholder={'Full Name'}
                />

                <InputField
                    height={64}
                    t={64}
                    txt1={'Phone Number'}
                    placeholder={'Phone Number'}
                />

                <InputField
                    height={64}
                    t={64}
                    txt1={'Email'}
                    placeholder={'Email'}
                />

                <InputField
                    height={64}
                    t={64}
                    txt1={'Password'}
                    placeholder={'Password'}
                />

                <InputField
                    height={64}
                    t={64}
                    txt1={'Confirm Password'}
                    placeholder={'Confirm Password'}
                />

                <View style={{ bottom: 10 }}>
                    <Button1 value={'SIGN UP'} name={'chevron-right'} />
                </View>

                <View style={{ flexDirection: 'row', top: 120, alignSelf: 'center', marginBottom: 150 }}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={{ color: '#147fdc' }}>LOGIN</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    )
}

export default SignupScreen;