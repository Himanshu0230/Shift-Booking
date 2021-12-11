import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from 'react-native'
import Item from '../components/Item'

const doFilteration = (shift) => {
    const filterData = shift.filter(item => {
        const today = new Date();
        const someday = new Date(item.startTime)
        if (item.area === "Tampere") {
            if (today.getDate() === someday.getDate() && today.getMonth() === someday.getMonth()) {
                item.title = "Today"
                return true
            } else {
                const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                item.title = months[someday.getMonth()] + " " + someday.getDate();
                return true
            }
        }
    })
    let newData = [];

    app: for (i = 0; i < filterData.length; i++) {
        for (j = 0; j < newData.length; j++) {
            if (filterData[i].title === newData[j].title) {
                let startTimeHr = new Date(filterData[i].startTime).getHours();
                let startTimeMin = new Date(filterData[i].startTime).getMinutes();
                let endTimeHr = new Date(filterData[i].endTime).getHours();
                let endTimeMin = new Date(filterData[i].endTime).getMinutes();
                if (startTimeMin === 0) {
                    startTimeMin = "00"
                }
                if (endTimeMin === 0) {
                    endTimeMin = "00"
                }
                newData[j].time = filterData[i].startTime;
                let subData = {
                    ...filterData[i],
                    subTitle: `${startTimeHr}:${startTimeMin} -${endTimeHr}:${endTimeMin}`,
                }
                newData[j].data.push(subData);
                continue app;
            }
        }
        let startTimeHr = new Date(filterData[i].startTime).getHours();
        let startTimeMin = new Date(filterData[i].startTime).getMinutes();
        let endTimeHr = new Date(filterData[i].endTime).getHours();
        let endTimeMin = new Date(filterData[i].endTime).getMinutes();
        if (startTimeMin === 0) {
            startTimeMin = "00"
        }
        if (endTimeMin === 0) {
            endTimeMin = "00"
        }
        let obj = {};
        obj.time = filterData[i].startTime;
        obj.title = filterData[i].title;
        let data = [];
        let subData = {
            ...filterData[i],
            subTitle: `${startTimeHr}:${startTimeMin} -${endTimeHr}:${endTimeMin}`,
        }
        data.push(subData);
        obj.data = data;
        newData.push(obj);
    }
    function compare(value) {
        value.data.sort((a, b) => a.startTime - b.startTime)
    }

    newData.sort((a, b) => a.time - b.time);
    newData.forEach(value => compare(value));
    console.log(newData);
    return newData;
}

const Tampere = ({ shiftData }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const data = doFilteration(shiftData);
        setData(data)
    }, [shiftData]);
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (<Item title={item} />)}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => {
    return {
        shiftData: state.data
    }
}

export default connect(mapStateToProps)(Tampere)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#4F6C92",
        backgroundColor: "#F7F8FB",
        borderBottomWidth: 0.5,
        borderColor: "grey",
        padding: 10,
        paddingLeft: 20
    },
});