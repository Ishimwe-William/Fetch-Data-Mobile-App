import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const ListItem = ({item, onPress}) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
            <View>
                <Text style={styles.itemName}>{item.id}{". "}{item.name}</Text>
                <Text style={styles.itemDescription}>{item.data ? item?.data.Description : 'No data'}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
});

