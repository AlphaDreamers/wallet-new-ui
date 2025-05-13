import React from 'react';
import { View, StyleSheet, TouchableOpacity, Share } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Copy, Share as ShareIcon } from "lucide-react-native";
import { Card } from "react-native-paper";

import { Text } from '~/components/ui/text';
import { Button } from '~/components/ui/button';
import QRModal from '~/components/QRModal';

export default function ReceiveScreen() {
  const router = useRouter();
  const userAddress = "FDSJLKFDKJSJLFDSLJKLFJDSLJLFDKFJJKFD";

  const handleCopyAddress = () => {
    // Here would be the logic to copy the address to clipboard
    alert("Address copied to clipboard");
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `My Solana address: ${userAddress}`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft color="#fff" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Receive</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Card style={styles.card}>
          <View style={styles.qrContainer}>
            <QRModal address={userAddress} />
          </View>

          <Text style={styles.addressLabel}>Your Address</Text>
          <View style={styles.addressContainer}>
            <Text style={styles.address} numberOfLines={1} ellipsizeMode="middle">
              {userAddress}
            </Text>
            <TouchableOpacity onPress={handleCopyAddress} style={styles.copyButton}>
              <Copy color="#21c8af" size={20} />
            </TouchableOpacity>
          </View>

          <Button onPress={handleShare} style={styles.shareButton} variant="outline">
            <ShareIcon size={16} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.shareButtonText}>Share Address</Text>
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
  qrContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  addressLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#eaeaea',
    marginBottom: 8,
    textAlign: 'center',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  address: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
  },
  copyButton: {
    padding: 4,
  },
  shareButton: {
    borderColor: 'rgba(255, 255, 255, 0.12)',
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    borderWidth: 1,
    height: 50,
  },
  shareButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});