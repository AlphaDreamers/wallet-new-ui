"use client";

import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Camera } from "lucide-react-native";
import { Card } from "react-native-paper";

import { Text } from '~/components/ui/text';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

export default function SendScreen() {
    const router = useRouter();
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');

    const handleSend = () => {
        if (!address || !amount) return;
        
        router.push({ 
            pathname: '/confirm_transaction',
            params: {
                address,
                amount,
                fee: '0.000005'
            }
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <ArrowLeft color="#fff" size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Send</Text>
                <View style={{ width: 24 }} />
            </View>

            <View style={styles.content}>
                <Card style={styles.card}>
                    <Text style={styles.label}>Recipient Address</Text>
                    <View style={styles.addressInputContainer}>
                        <TextInput
                            value={address}
                            onChangeText={setAddress}
                            placeholder="Enter Solana Address"
                            placeholderTextColor="#aaa"
                            style={styles.addressInput}
                        />
                        <TouchableOpacity style={styles.scanButton}>
                            <Camera color="#21c8af" size={20} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.label}>Amount</Text>
                    <Input
                        value={amount}
                        onChangeText={setAmount}
                        placeholder="0.00"
                        keyboardType="numeric"
                        style={styles.input}
                    />

                    <View style={styles.feeContainer}>
                        <Text style={styles.feeLabel}>Network Fee:</Text>
                        <Text style={styles.feeValue}>0.000005 SOL</Text>
                    </View>

                    <Button onPress={handleSend} style={styles.sendButton} disabled={!address || !amount}>
                        <Text style={styles.sendButtonText}>Send</Text>
                    </Button>
                </Card>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1f1f',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 50,
        paddingBottom: 16,
        backgroundColor: '#2b2b2b',
    },
    backButton: {
        padding: 8,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    content: {
        flex: 1,
        padding: 16,
    },
    card: {
        backgroundColor: 'rgba(30, 30, 30, 0.55)',
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#eaeaea',
        marginBottom: 8,
        marginTop: 16,
    },
    addressInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.12)',
        overflow: 'hidden',
    },
    addressInput: {
        flex: 1,
        height: 50,
        paddingHorizontal: 16,
        color: '#fff',
    },
    scanButton: {
        padding: 12,
        backgroundColor: 'rgba(33, 200, 175, 0.1)',
        borderLeftWidth: 1,
        borderLeftColor: 'rgba(255, 255, 255, 0.12)',
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderRadius: 12,
        paddingHorizontal: 16,
        color: '#fff',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.12)',
    },
    feeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
        marginBottom: 16,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.08)',
    },
    feeLabel: {
        color: '#aaa',
    },
    feeValue: {
        color: '#fff',
        fontWeight: '500',
    },
    sendButton: {
        backgroundColor: '#21c8af',
        marginTop: 16,
        height: 50,
    },
    sendButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});