import { TouchableOpacity, ScrollView, Text } from "react-native"
import { styles } from "../utils/Styles"
import React from "react";

type props = {
    onClick: any;
    children: any;
    color: any;
}

export default function Button(props: props) {
    return (
        <>
            <ScrollView>
                <TouchableOpacity onPress={props.onClick} style={{
                    backgroundColor: props.color,
                    padding: 20,
                    margin: 20,
                    borderRadius: 20
                }}>
                    <Text style={styles.text}>{props.children}</Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    )
}