
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// @ts-ignore
const TransactionCard = ({ title, description }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#2b2b2b', // Dark background
        padding: 15,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        color: '#fff', // White title
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#ccc', // Lighter text
    },
});

export default TransactionCard;
