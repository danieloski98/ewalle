import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'

export const Styles = StyleSheet.create({
    bigText: {
        fontSize: 20,
        color: 'black',
        fontWeight: '500',
    },
    smallText: {
        fontSize: 16,
        color: 'grey',
        fontWeight: '400',
    },
    tinyText: {
        fontSize: 14,
        color: 'grey',
        fontWeight: '400',
    },
    parent: {
        flex: 1,
        backgroundColor: 'white',
    },
    accountCard: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        backgroundColor: COLORS.LIGHTGREY,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    }
})