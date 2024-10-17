import { FlatList, StyleSheet, Text, ListRenderItem, View, TouchableOpacity } from 'react-native'
import React from 'react'

import { ExpenseType } from '@/types'
import Colors from '@/constants/Colors'

import { Feather } from '@expo/vector-icons'

const ExpenseBlock = ({ expenseList } : { expenseList : ExpenseType[] }) => {
    const renderItem: ListRenderItem<Partial<ExpenseType>> = ({ item, index }) => {

        if(index == 0) {
            return(
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.add_button}>
                        <Feather name='plus' size={22} color={'#fff'} />
                    </View>
                </TouchableOpacity>
            )
        }

        let amount = item.amount?.split('.')
        return(
            <View style={[styles.expenseBlock, {backgroundColor: item.name == 'Food' ? Colors.blue : item.name == 'Saving' ? Colors.white : Colors.tintColor}]}>
                <Text style={[styles.expenseBlockText1, {color: item.name == 'Food' ? Colors.black : item.name == 'Saving' ? Colors.black : Colors.white}]}>{item.name}</Text>
                <Text style={[styles.expenseBlockText2, {color: item.name == 'Food' ? Colors.black : item.name == 'Saving' ? Colors.black : Colors.white}]}>${amount[0]}.<Text style={styles.amountInCents}>{amount[1]}</Text></Text>
                <View styles={styles.expenseBlockTextView}>
                    <Text style={[styles.expenseBlockText1, {color: item.name == 'Food' ? Colors.black : item.name == 'Saving' ? Colors.black : Colors.white}]}>{item.percentage}%</Text>
                </View>
            </View>
        )
    }

    const staticItem = [{name: 'Add Item'}]

    return (
        <View style={styles.flatListStyle}>
            <FlatList
                data={staticItem.concat(expenseList)}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}/>
        </View>
    )
}

export default ExpenseBlock

const styles = StyleSheet.create({
    expenseBlock: {
        backgroundColor: Colors.tintColor,
        width: 100,
        padding: 15,
        borderRadius: 15,
        marginRight: 20,
        gap: 8,
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    expenseBlockText1: {
        color: Colors.white,
        fontSize: 14
    },
    expenseBlockText2: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600'
    },
    amountInCents: {
        fontSize: 12,
        fontWeight: '400'
    },
    expenseBlockTextView: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 10
    },
    add_button: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#666',
        borderStyle: 'dashed',
        borderRadius: 10,
        marginRight: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatListStyle: {
        paddingVertical: 20
    }
})