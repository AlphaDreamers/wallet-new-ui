import { View } from 'react-native';
import LoadingView from '~/components/Loading';
import styles from '~/assets/styles/index_style';

export default function LoadingScreen() {
    return (
        <View style={styles.container}>
            <LoadingView />
        </View>
    );
}
