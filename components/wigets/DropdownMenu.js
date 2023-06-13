import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

const DropdownMenu = ({ navigation }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemPress = (menuItem) => {
        // Handle the selected menu item
        console.log('Selected:', menuItem);
        if (menuItem === 'Profile') {
            navigation.navigate('Profile');
        }
        if (menuItem === 'Logout') {
            AsyncStorage.removeItem('access_token');
            navigation.navigate('Login');
        }
        // Close the menu
        setIsMenuOpen(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleMenu}>
                <MaterialCommunityIcons name="account-circle" size={35} color={'#fff'} />
            </TouchableOpacity>
            {isMenuOpen && (
                <View style={styles.dropdown}>
                    <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Profile')}>
                        <Text style={styles.menuText}>
                            {/*icon with text*/}
                            <MaterialCommunityIcons name="account-circle" size={24} color={'#000'} />
                            Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Logout')}>
                        <Text style={styles.menuText}>
                            <MaterialCommunityIcons name="logout" size={24} color={'#000'} />
                            Logout</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dropdown: {
        width: 95,
        position: 'absolute',
        bottom: 50, // Adjust the position as per your requirement
        right: 2, // Adjust the position as per your requirement
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 4,
        elevation: 3,
    },
    menuItem: {
        paddingVertical: 8,
    },
    menuText: {
        fontSize: 16,
    },
});

export default DropdownMenu;
