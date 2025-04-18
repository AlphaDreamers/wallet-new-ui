import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b0b0c', // Deeper dark for contrast
    },
    content: {
        flex: 1,
        padding: 16,
    },
    card: {
        width: '90%',
        padding: 25,
        backgroundColor: 'rgba(130,130,130,0.15)', // Metallic-style translucent dark gray
        borderRadius: 20, // More rounded
        shadowColor: '#777',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 10,
        borderWidth: 1,
        borderColor: 'rgba(200,200,200,0.1)',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#f0f0f0',
        textAlign: 'center',
        marginBottom: 6,
    },
    description: {
        fontSize: 14,
        color: '#aaa',
        textAlign: 'center',
    },
    input: {
        marginTop: 12,
        padding: 12,
        backgroundColor: '#2a2a2a',
        color: '#f1f1f1',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#444',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#343a41', // Soft metallc blue
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 50, // Fully rounded pill shape
        alignItems: 'center',
        shadowColor: '#133860',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 4,
    },
    successAlert: {
        marginTop: 12,
        backgroundColor: 'rgba(144,238,144,0.2)',
        borderLeftWidth: 4,
        borderLeftColor: '#28a745',
        borderRadius: 12,
        padding: 12,
    },
    errorAlert: {
        marginTop: 12,
        backgroundColor: 'rgba(255,99,71,0.15)',
        borderLeftWidth: 4,
        borderLeftColor: '#dc3545',
        borderRadius: 12,
        padding: 12,
    },
    alertTitle: {
        fontWeight: 'bold',
        color: '#fff',
    },
    alertDescription: {
        color: '#ccc',
        fontSize: 13,
    }, buttonText:{
        fontSize: 15,
        fontWeight: '500',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#f0f0f0',
    },
    headerButton: {
        padding: 8,
        backgroundColor: '#4a90e2',    // metallic blue
        borderRadius: 16,              // fully rounded
        alignItems: 'center',
        justifyContent: 'center',
    },
    balanceText: {
        fontSize: 32,
        fontWeight: '600',
        color: '#fff',
    },
});

export default styles;
