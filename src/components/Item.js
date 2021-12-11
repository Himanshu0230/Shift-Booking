import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements';
import { updateShifts, cancelShifts } from '../redux';

const Item = ({ title, updateShift, cancelShift }) => {

    const [onLoading, setOnLoading] = useState(null);

    const bookShift = async () => {
        setOnLoading(title.id);
        const abc = await updateShift(title.id)
        if (abc) {
            setOnLoading(null)
        } else if (abc === undefined) {
            setOnLoading(null)
            alert("Can not book this time slot")
        }
    }

    const unBookShift = async () => {
        setOnLoading(title.id)
        const abc = await cancelShift(title.id)
        if (abc) {
            setOnLoading(null)
        }
    }

    if (title.booked) {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{title.subTitle}</Text>
                <Button
                    title="Cancel"
                    type="outline"
                    buttonStyle={styles.cancelButtonStyle}
                    titleStyle={styles.cancelTitleStyle}
                    raised={true}
                    onPress={unBookShift}
                    loading={onLoading === title.id ? true : false}
                />
            </View>
        );
    } else {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{title.subTitle}</Text>
                <Button
                    title="Book"
                    type="outline"
                    buttonStyle={styles.bookButtonStyle}
                    titleStyle={styles.bookTitleStyle}
                    raised={true}
                    onPress={bookShift}
                    loading={onLoading === title.id ? true : false}
                />
            </View>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateShift: (id) => dispatch(updateShifts(id)),
        cancelShift: (id) => dispatch(cancelShifts(id))
    }
}

export default connect(null, mapDispatchToProps)(Item)

const styles = StyleSheet.create({
    item: {
        backgroundColor: "white",
        padding: 20,
        borderBottomWidth: 0.5,
        borderColor: "grey",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 24,
        color: "#4F6C92",
    },
    bookButtonStyle: {
        borderColor: "#16A64D",
        paddingHorizontal: 26,
    },
    bookTitleStyle: {
        color: "#16A64D",
    },
    cancelButtonStyle: {
        borderColor: "#E2006A",
        paddingHorizontal: 20,
    },
    cancelTitleStyle: {
        color: "#E2006A",
    }
})