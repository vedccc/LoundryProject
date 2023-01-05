import React from 'react';
import { FlatList, View, Dimensions, Text, StyleSheet, Image, TouchableOpacity, } from "react-native";
import InputField from '../Components/InputComponent';
import Button1 from '../Components/Button';

const Profile = () => {
    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <View style={{ top: 113 }}>

                <Text style={{ fontSize: 50, color: '#147fdc', top: 100, alignSelf: 'center' }}>Profile</Text>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    TouchableContainer: {
        top: 120,
        height: 40,
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.4,
        left: 32,
        borderRadius: 32,
        backgroundColor: '#147fdc'
    },
})

export default Profile;