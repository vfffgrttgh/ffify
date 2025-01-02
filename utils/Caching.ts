import AsyncStorage from "@react-native-async-storage/async-storage";

// CACHING

export async function AddItem(key: string, value: any): Promise<any> {
    await AsyncStorage.setItem(key, JSON.stringify(value));
};

export async function GetItem(key: string): Promise<any> {
    const item: any = AsyncStorage.getItem(key);

    return JSON.parse(item);
};

export async function DeleteItem(key: string): Promise<any> {
    await AsyncStorage.removeItem(key);
};