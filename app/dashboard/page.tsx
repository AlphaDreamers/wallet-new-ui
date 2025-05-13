import React, { useState, useRef } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Animated, TextInput } from 'react-native';
import HeaderWithDrops from "~/components/HeaderWithDropDown";
import MetallicBalanceCard from "~/components/BalanceCard";
import TransactionCard from '~/components/TransactionCard';
import { ArrowLeftRight } from "lucide-react-native";
import { Button } from "~/components/ui/button";
import { Text } from '~/components/ui/text';
import { Card } from "react-native-paper";
import QRModal from "~/components/QRModal";
import { Input } from '~/components/ui/input';
import { useRouter } from 'expo-router';

interface Transaction {
    title: string;
    description: string;
}

export default function DashBoardScreen() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isQRVisible, setQRVisible] = useState(false);
    const qrSlideAnim = useRef(new Animated.Value(0)).current;
    const [scannedAddress, setScannedAddress] = useState('');
    const [isQRScannerVisible, setQRScannerVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(0)).current;
    const router = useRouter();   

    const userAddress = "FDSJLKFDKJSJLFDSLJKLFJDSLJLFDKFJJKFD";

    const handleSend = () => {
        router.push('../send');
      };

    const handleCloseForm = () => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start(() => setIsFormVisible(false));
    };

    const handleOnReceive = () => {
        router.push('../receive');
      };

    const handleScanSuccess = (e: { data: string }) => {
        setScannedAddress(e.data);
        setQRScannerVisible(false);
    };

    const handleCloseQRModal = () => {
        Animated.timing(qrSlideAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start(() => setQRVisible(false));
    };

    const transactions: Transaction[] = [
        { title: 'Transfer', description: 'Send SOL from one address to another.' },
        { title: 'Stake', description: 'Stake SOL to earn rewards.' },
        { title: 'Unstake', description: 'Unstake SOL from a staking account.' },
        { title: 'Create Account', description: 'Create a new Solana account.' },
        { title: 'Vote', description: 'Participate in Solana governance.' },
        { title: 'Delegate', description: 'Delegate voting power to a validator.' },
        { title: 'Withdraw', description: 'Withdraw staked SOL from a validator.' },
        { title: 'Swap', description: 'Exchange one token for another.' },
        { title: 'NFT Minting', description: 'Mint a new Solana-based NFT.' },
    ];

    return (
        <View style={styles.container}>
            <HeaderWithDrops />

            <View style={styles.balanceCardContainer}>
                <MetallicBalanceCard balance={100} />
            </View>

            <View style={styles.buttonRow}>
                <Button
                    variant="outline"
                    style={[styles.actionButton, styles.sendButton]}
                    onPress={handleSend}
                >
                    <Text style={styles.buttonText}>Send</Text>
                </Button>

                <Button
                    variant="outline"
                    style={[styles.actionButton, styles.receiveButton]}
                    onPress={handleOnReceive}
                >
                    <Text style={styles.buttonText}>Receive</Text>
                </Button>
            </View>

            <ScrollView contentContainerStyle={styles.transactionList}>
                {transactions.map((transaction, index) => (
                    <TransactionCard
                        key={index}
                        title={transaction.title}
                        description={transaction.description}
                    />
                ))}
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.swapButton}
                    onPress={() => alert("Swap button clicked!")}
                >
                    <ArrowLeftRight color="#fff" size={24} />
                </TouchableOpacity>
            </View>

            {/* Send Form */}
            {isFormVisible && (
                <Animated.View
                    style={[
                        styles.formContainer,
                        {
                            transform: [
                                {
                                    translateY: slideAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [500, 0],
                                    }),
                                },
                            ],
                        },
                    ]}
                >
                    <Card style={styles.formCard}>
                        <Text style={styles.formHeader}>Enter Transaction Details:</Text>

                        <View style={styles.addressInputContainer}>
                            <TextInput
                                value={scannedAddress}
                                onChangeText={setScannedAddress}
                                placeholder="Enter Address"
                                placeholderTextColor="#aaa"
                                style={[styles.textInput, { flex: 1, marginRight: 8 }]}
                            />
                            <TouchableOpacity onPress={() => setQRScannerVisible(true)}>
                                <Text style={styles.qrIcon}>📷</Text>
                            </TouchableOpacity>
                        </View>

                        <Input
                            placeholder="Enter Amount"
                            style={styles.textInput}
                            keyboardType="numeric"
                        />

                        <Button onPress={handleCloseForm}>
                            <Text>Send</Text>
                        </Button>
                    </Card>
                </Animated.View>
            )}

            {/* QR Receive Modal */}
            {isQRVisible && (
                <Animated.View
                    style={[
                        styles.formContainer,
                        {
                            transform: [
                                {
                                    translateY: qrSlideAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [500, 0],
                                    }),
                                },
                            ],
                        },
                    ]}
                >
                    <Card style={styles.formCard}>
                        <Text style={styles.formHeader}>Your Address QR</Text>

                        <View style={styles.qrContainer}>
                            <QRModal address={userAddress} />
                        </View>

                        <Button onPress={handleCloseQRModal}>
                            <Text>Close</Text>
                        </Button>
                    </Card>
                </Animated.View>
            )}

            {/* QR Scanner */}
            {isQRScannerVisible && (
                <View style={StyleSheet.absoluteFill}>
                    
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1f1f',
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    balanceCardContainer: {
        marginTop: 20,
        marginBottom: 15,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        paddingHorizontal: 16,
        marginTop: 20,
    },
    actionButton: {
        flex: 1,
        borderWidth: 2,
        borderRadius: 12,
        paddingVertical: 12,
    },
    sendButton: {
        backgroundColor: '#21c8af',
        borderColor: '#1b9c8b',
    },
    receiveButton: {
        backgroundColor: '#3b5998',
        borderColor: '#2e4a86',
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 16,
    },
    transactionList: {
        paddingBottom: 30,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        backgroundColor: '#2b2b2b',
        borderTopWidth: 1,
        borderTopColor: '#444',
    },
    swapButton: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    formContainer: {
        position: 'absolute',
        top: 100,
        left: 20,
        right: 20,
        backgroundColor: 'rgba(50, 50, 50, 0.6)',
        borderRadius: 16,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        zIndex: 10,
    },
    formCard: {
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
    formHeader: {
        fontSize: 20,
        fontWeight: '700',
        color: '#eaeaea',
        marginBottom: 16,
        letterSpacing: 0.5,
    },
    textInput: {
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderRadius: 12,
        marginBottom: 16,
        paddingHorizontal: 16,
        color: '#fff',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.12)',
    },
    addressInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    qrIcon: {
        color: '#21c8af',
        fontSize: 18,
    },
    qrContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    scannerHeader: {
        color: 'white',
        fontSize: 16,
        marginTop: 60,
    },
    scannerCancelButton: {
        marginTop: 30,
    },
    scannerCancelText: {
        color: '#fff',
    },
})