import React, {useState} from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements';
import { cancelShifts } from '../redux';

const MyShiftItem = ({ title, cancelShift }) => {

    const [onLoading, setOnLoading] = useState(null);

    const unBookShift = async () => {
        setOnLoading(title.id)
        const abc = await cancelShift(title.id)
        if (abc) {
            setOnLoading(null)
        }
    }

    return (
        <View style={styles.item}>
            <View>
                <Text style={styles.title}>{title.subTitle}</Text>
                <Text style={styles.areaStyle}>{title.area}</Text>
            </View>
            <View>
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
        </View>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        cancelShift: (id) => dispatch(cancelShifts(id))
    }
}

export default connect(null, mapDispatchToProps)(MyShiftItem)

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
    cancelButtonStyle: {
        borderColor: "#E2006A",
        paddingHorizontal: 20,
    },
    cancelTitleStyle: {
        color: "#E2006A",
    },
    areaStyle: {
        fontSize: 20,
        color: "#A4B8D3",
    }
})