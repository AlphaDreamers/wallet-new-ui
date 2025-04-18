import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import { Terminal, AlertTriangle } from 'lucide-react-native';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert';
import * as SecureStore from 'expo-secure-store';
import styles from '~/assets/styles/index_style';
import { useRouter } from 'expo-router';

type LoginResponse = {
    access_token: string;
    user_name: string;
    account_opendAt: string;
};

const SetToStorage = async (access_token: string) => {
    try {
        await SecureStore.setItem('wallet_access_token', access_token);
        console.log('Token stored successfully');
    } catch (error) {
        console.log('error', error);
    }
};

const url = 'http://localhost:8085/api/auth/wallet/login';

const LoginForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleLogin = async () => {
        setError('');
        setSuccessMsg('');
        router.replace('/loading/page');

        try {
            const response = await axios.post<LoginResponse>(url, {
                email,
                password
            });
            const { access_token, user_name, account_opendAt } = response.data;
            await SetToStorage(access_token);
            setSuccessMsg(`Welcome, ${user_name}! Account opened on ${account_opendAt}`);
            router.replace('/dashboard/page');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Login failed');
            router.back(); // return from /loading
        }
    };

    const handleDummyLogin = async () => {
        setError('');
        router.replace('/loading/page');

        setTimeout(async () => {
            try {
                const dummyResponse = {
                    access_token: 'dummy_token',
                    user_name: 'Test User',
                    account_opendAt: '2022-01-01'
                };
                const { access_token, user_name, account_opendAt } = dummyResponse;
                await SetToStorage(access_token);
                setSuccessMsg(`Welcome, ${user_name}! Account opened on ${account_opendAt}`);
                router.replace('/dashboard/page');
            } catch (err: any) {
                setError(err.response?.data?.message || 'Login failed');
                router.back();
            }
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <CardHeader>
                    <CardTitle style={styles.title}>Scala Login</CardTitle>
                    <CardDescription style={styles.description}>
                        <Text>Login with your Scala account</Text>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Input
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                    />
                    <Input
                        placeholder="Enter your password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.input}
                    />

                    <TouchableOpacity onPress={handleDummyLogin} style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    {successMsg ? (
                        <Alert icon={Terminal} style={styles.successAlert}>
                            <AlertTitle style={styles.alertTitle}>Success</AlertTitle>
                            <AlertDescription style={styles.alertDescription}>
                                {successMsg}
                            </AlertDescription>
                        </Alert>
                    ) : null}

                    {error ? (
                        <Alert icon={AlertTriangle} variant="destructive" style={styles.errorAlert}>
                            <AlertTitle style={styles.alertTitle}>Error</AlertTitle>
                            <AlertDescription style={styles.alertDescription}>
                                {error}
                            </AlertDescription>
                        </Alert>
                    ) : null}
                </CardContent>
            </Card>
        </View>
    );
};

export default LoginForm;
