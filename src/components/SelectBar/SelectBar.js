import React, { useState } from "react";
import { TabItem, TabsContainer } from "./styles";

export const SelectBar = ({list, action}) => {

    const [selectedItem, setSelectedItem] = useState()

    const submitValue = (selected) => {
        let selectedItemRevised = `${selected}`
        if(selected === selectedItem) {
            selectedItemRevised = undefined
        }
        setSelectedItem(selectedItemRevised)
        action(selectedItemRevised)
    }

    return (
        <TabsContainer>
            {list?.map((itemName) => {
                return (<TabItem selected={selectedItem === itemName} onClick={() => submitValue(itemName)}> {itemName}</TabItem>)})
            }
        </TabsContainer>

    )
}