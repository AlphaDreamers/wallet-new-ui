import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { Text } from '~/components/ui/text';

export default function ConfirmTransactionScreen() {
  const router = useRouter();
  const { address, amount, fee } = useLocalSearchParams();

  const handleConfirm = () => {
    console.log('Transaction confirmed');
    router.push({
      pathname: '../transaction-success',
      params: {
        address,
        amount,
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Confirm Transaction</Text>
        
        <Card style={styles.card}>
          <View style={styles.transactionDetails}>
            <View style={styles.row}>
              <Text style={styles.label}>Amount</Text>
              <Text style={styles.value}>{amount} SOL</Text>
            </View>
            
            <View style={styles.row}>
              <Text style={styles.label}>To Address</Text>
              <Text style={styles.value} numberOfLines={1}>{address}</Text>
            </View>
            
            <View style={styles.row}>
              <Text style={styles.label}>Network Fee</Text>
              <Text style={styles.value}>{fee} SOL</Text>
            </View>
            
            <View style={styles.row}>
              <Text style={styles.label}>Total Amount</Text>
              <Text style={styles.valueHighlight}>{Number(amount) + Number(fee)} SOL</Text>
            </View>
          </View>
        </Card>

        <View style={styles.buttonContainer}>
          <Button 
            variant="secondary" 
            onPress={() => router.back()}
            style={styles.cancelButton}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </Button>
          <Button 
            variant="default"
            onPress={handleConfirm}
            style={styles.confirmButton}
          >
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    paddingTop: 100,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#fff',
  },
  card: {
    padding: 16,
    marginBottom: 24,
    backgroundColor: 'rgba(30, 30, 30, 0.55)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  transactionDetails: {
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#aaa',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  valueHighlight: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#21c8af',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#21c8af',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 