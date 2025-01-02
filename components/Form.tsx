import React, { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { styles } from "../utils/Styles";
import Feild from "./Feild";
import Button from "./Button";
import { GET, POST } from "../utils/Fetching";
import { AddItem, GetItem } from "../utils/Caching";

export default function Form() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [data, setData] = useState<any[]>([]);

    async function handleSubmit() {
        await POST({ id: username, value: password, type: "XML"});
        const new_data: any = await GET("XML");

        setData([...new_data]);

        Alert.alert("Your data is recorded!")
    };

    return (
        <>
            <View style={styles.form}>
                <Feild value={username} onChange={(text: string) => setUsername(text)} placeholder="ID..." />
                <Feild value={password} onChange={(text: string) => setPassword(text)} placeholder="VALUE..." />
                <Button color="orange" onClick={handleSubmit}>SUBMIT</Button>
            </View>

            <ScrollView>
                { data.map((item: any) => (
                    <Text key={item.id} style={styles.text}>{item.id}: {item.value}</Text>
                )) }
            </ScrollView>
        </>
    )
}