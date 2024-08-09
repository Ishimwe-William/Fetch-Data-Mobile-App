import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {isTabletDevice} from "../utils/isTabletDevice";

export const DetailsView = ({route}) => {
    const {item} = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.description}>{item.data?.Description}</Text>
            {item.data ? (
                <View style={{ flexDirection: isTabletDevice()?'row':'column'}}>
                    <View style={styles.detailsContainer}>
                        <>
                            {item.data.color && (
                                <View>
                                    <Text style={styles.detailsTitle}>Color:</Text>
                                    <Text style={styles.detailsText}>{item.data?.color}</Text>
                                </View>
                            )}
                        </>
                        <>
                            {item.data.capacity && (
                                <View>
                                    <Text style={styles.detailsTitle}>Capacity:</Text>
                                    <Text style={styles.detailsText}>{item.data?.capacity}</Text>
                                </View>
                            )}
                        </>
                        <>
                            {item.data['capacity GB'] && (
                                <View>
                                    <Text style={styles.detailsTitle}>Capacity:</Text>
                                    <Text style={styles.detailsText}>{item.data["capacity GB"]}{" "}GB</Text>
                                </View>
                            )}
                        </>
                        <>
                            {item.data && !isTabletDevice() && (
                                <View >
                                    <Text style={styles.detailsTitle}>All Description in JSON format:</Text>
                                    <Text style={styles.detailsText}>{JSON.stringify(item.data)}</Text>
                                </View>
                            )}
                        </>
                    </View>
                    {  isTabletDevice() &&
                        <View style={styles.JsonDetailsContainer}>
                            {item.data && (
                                <View>
                                    <Text style={styles.detailsTitle}>All Description in JSON format:</Text>
                                    <Text style={styles.detailsText}>{JSON.stringify(item.data)}</Text>
                                </View>
                            )}
                        </View>
                    }
                </View>
            ) : (
                <Text style={styles.detailsText}>No data</Text>
            )}

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: '#333',
        marginBottom: 16,
    },
    detailsContainer: {
        margin: 16,
        padding: 16,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        width: isTabletDevice()?'60%':'90%',
    },
    JsonDetailsContainer: {
        margin: 10,
        padding: 16,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        width:'35%',
    },
    detailsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    detailsText: {
        fontSize: 14,
        color: '#555',
    },
});

