import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors';

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
        flexDirection: 'row'
    },
    imagebackground: {
        width: '35%',
        height: '100%',    
    },
    mainarea: {
        width: '65%',
        height: '100%',
        paddingVertical: 45,
        paddingHorizontal: 20,
        backgroundColor: 'white'
    },
    datebox: {
        width: '100%',
        height: 70,
    },
    dateitem1: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    mainContent: {
        flex: 1,
        justifyContent: 'center',
    },
    footerarea: {
        width: '100%',
        height: 130,
    },
    btn: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: COLORS.MAIN,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});