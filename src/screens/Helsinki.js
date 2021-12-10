import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchShifts } from '../redux'
import { StyleSheet, Text, View } from 'react-native'

const Helsinki = ({ fetchShift }) => {
    console.log("jshfsjfksjfkjsdfkjsdklfjskfj")
    useEffect(() => {
        fetchShift()
    }, [])
    return (
        <View>
            <Text>Helsinki</Text>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        shiftData: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchShift: () => dispatch(fetchShifts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Helsinki)

const styles = StyleSheet.create({})