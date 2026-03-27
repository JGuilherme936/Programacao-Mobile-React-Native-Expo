import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get('window');

const estilo = StyleSheet.create({
    containerApp: {
        flex: 1,
        backgroundColor: '#fff',
    },
    // --- Overlay (Fundo que escurece a tela) ---
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
                                 zIndex: 9, // Fica entre a tela e o drawer
    },
    // --- Header ---
    header: {
        width: '100%',
        backgroundColor: '#cc0000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5,
    },
    headerIconLeft: {
        position: 'absolute',
        left: 20,
        padding: 10,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    // --- Drawer ---
    drawer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: width * 0.75,
        backgroundColor: '#cc0000',
        zIndex: 10,
        elevation: 10,
    },
    menuItem: {
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.1)',
    },
    menuText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    // --- Telas ---
    containerScreen: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    capa: {
        width: '100%',
        height: 200,
        marginBottom: 30,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    }
});

export default estilo;
