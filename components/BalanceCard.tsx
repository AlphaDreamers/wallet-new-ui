import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from "react-native";
import { Card, CardHeader, CardContent, CardFooter } from "~/components/ui/card";
import { LinearGradient } from "expo-linear-gradient";

interface BalanceProps {
    balance: number;
}

export default function MetallicBalanceCard({ balance }: BalanceProps) {
    const { width } = useWindowDimensions();

    // Responsive calculations
    const cardWidth = Math.min(width * 0.9, 400);
    const fontSize = width < 400 ? 24 : 32;
    const paddingSize = width < 400 ? 12 : 16;

    return (
        <View style={[styles.cardContainer, { width: cardWidth }]}>
            <LinearGradient
                colors={['#3a3a3a', '#1a1a1a', '#0a0a0a']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradientBackground}
            >
                <Card style={styles.card}>
                    <CardHeader style={[styles.cardHeader, { padding: paddingSize }]}>
                        <Text style={styles.cardTitle}>CURRENT BALANCE</Text>
                        <View style={styles.divider} />
                    </CardHeader>

                    <CardContent style={[styles.cardContent, { padding: paddingSize }]}>
                        <Text style={[styles.balanceText, { fontSize }]}>
                            {balance.toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })} SOL
                        </Text>
                    </CardContent>

                    <CardFooter style={[styles.cardFooter, { padding: paddingSize }]}>
                        <View>
                            <Text style={styles.footerText}>Scala Wallet</Text>
                            <Text style={[styles.footerText, { color: '#00ffaa' }]}>● LIVE</Text>
                        </View>

                    </CardFooter>
                </Card>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#00ffff',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
        marginHorizontal: 20,
        alignSelf: 'center',
    },
    gradientBackground: {
        borderRadius: 16,
        padding: 1.5,
    },
    card: {
        backgroundColor: '#121212',
        borderRadius: 15,
        overflow: 'hidden',
        width: '100%',
    },
    cardHeader: {
        alignItems: 'center',
    },
    cardTitle: {
        color: '#a0a0a0',
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        includeFontPadding: false,
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: '#333',
        marginTop: 12,
        marginBottom: 8,
    },
    cardContent: {
        alignItems: 'center',
    },
    balanceText: {
        fontWeight: '700',
        color: '#ffffff',
        textShadowColor: 'rgba(0, 255, 255, 0.3)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
        letterSpacing: 0.5,
        includeFontPadding: false,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#252525',
    },
    footerText: {
        color: '#4a4a4a',
        fontSize: 12,
        fontWeight: '600',
        includeFontPadding: false,
    },

});