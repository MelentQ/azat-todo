import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import List from "../components/List/List";

const ListPage: React.FC = () => {
    const [items, setItems] = useState<itemData[]>([]);

    const toggleHandler = (id: number) => {
        setItems(prev => prev.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    isDone: !item.isDone
                }
            }

            return item
        }))
    }

    const removeHandler = (id: number) => {
        setItems(prev => prev.filter(item => item.id !== id))
    }

    useEffect(() => {
        fetch('http://localhost:3001/api/posts', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // setItems([])
            })
    }, [])

    return (
        <>
            <List items={items} onToggle={toggleHandler} onRemove={removeHandler}/>
            <Link to="/add">Add Item</Link>
        </>
    );
};

export default ListPage;