import React from 'react';
import AddItemForm from "../components/AddItemForm/AddItemForm";

const AddItemPage: React.FC = () => {
    const addHandler = (title: string, content: string) => {
        //     const newItem: itemData = {
        //         id: Date.now(),
        //         title,
        //         content,
        //         isDone: false
        //     }
        //     setItems(prev => [newItem, ...prev])

        // Тут будет добавление элемента на бек
    }

    return (
        <>
            <AddItemForm onAdd={addHandler}/>
        </>
    );
};

export default AddItemPage;