import { useEffect, useState } from "react";
import { db, postingData } from "./Database";

// FETCHING DATABASE
export async function GET(type: string) {
    if(type === "XML") {
        return db.xml;
    } else if(type === "USERS") {
        return db.users;
    }
};

export async function POST({ id, value, type }: postingData) {
    if(type === "XML") {
        db.xml.push({ id: id, value: value});
    } else if(type === "USERS") {
        db.users.push({ id: id, value: value});
    }
};

// FETCHING API
export function useFetch<T>(url: string): any {
    const [data, setData] = useState<T>();

    useEffect(() => {
        async function fetchAPI() {
            const response: T = await (await fetch(url)).json();

            return response;
        };

        fetchAPI().then(res => setData(res));
    }, []);

    return data || [];
};[];