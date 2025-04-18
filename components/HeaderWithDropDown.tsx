import { View, Text, StyleSheet } from 'react-native';
import MetaliDropdown from "~/components/DropDown";
const MetaliHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Scala Wallet</Text>
            </View>
            <MetaliDropdown />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 14,
        backgroundColor: '#7777',
        borderBottomWidth: 1,
        borderBottomColor: '#777',
        borderStyle:"dashed",

    },
    titleContainer: {
        flex: 1,
    },
    titleText: {
        color: '#E5E7EB',
        fontSize: 20,
        fontFamily: "aerial",
        fontWeight: '600',
        letterSpacing: 0.5,
        textShadowColor: 'rgba(0,0,0,0.1)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
});

export default MetaliHeader;