// ~/components/QRModal.tsx
import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { View } from 'react-native';

export default function QRModal({ address }: { address: string }) {
    return (
        <View style={{ padding: 10 }}>
            <QRCode value={address || 'no-address'} size={200} />
        </View>
    );
}
