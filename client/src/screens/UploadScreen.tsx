import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default function UploadScreen(){
    return (
        <SafeAreaView style={styles.uploadContainer}>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    uploadContainer:{
        width: "80%",
        height: "20%",
        backgroundColor: "gray",
    }
})