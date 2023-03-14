import React from "react";
import { useQuery } from "@apollo/client";

import ItemList from '../components/ItemList';

import { QUERY_ITEMS } from "../utils/queries";

export default function Inventory(){
    const {loading, error, data } = useQuery(QUERY_ITEMS);

    const items = data?.items || "waiting on the data"


    return(
        <main>
            {loading ? (<div>Loading...</div>) : (
                <ItemList
                 items={items}
                />
            )}
            
        </main>
    )
}