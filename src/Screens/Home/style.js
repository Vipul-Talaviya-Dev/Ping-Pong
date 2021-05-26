import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        color: 'black'
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    headerWrap : {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50
    },
    bodyWrap: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})