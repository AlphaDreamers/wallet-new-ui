import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Check } from 'lucide-react-native';
import { Text } from '~/components/ui/text';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';

export default function TransactionSuccessScreen() {
  const router = useRouter();
  const { amount, address } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.iconContainer}>
          <Check color="#21c8af" size={40} />
        </View>
        
        <Text style={styles.title}>Transaction Successful!</Text>
        
        <Text style={styles.subtitle}>You've successfully sent</Text>
        <Text style={styles.amount}>{amount} SOL</Text>
        <Text style={styles.subtitle}>to</Text>
        <Text style={styles.address}>{address}</Text>

        <Button 
          onPress={() => router.push('/dashboard/page')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    padding: 16,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(30, 30, 30, 0.55)',
    borderRadius: 16,
    padding: 54,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(33, 200, 175, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 22,
    textAlign: 'center',
  },
  amount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#21c8af',
    marginBottom: 8,
    textAlign: 'center',
  },
  address: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#21c8af',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 