import React, {ReactComponentElement} from 'react';
import styles from './List.module.css';
import Item from "../Item/Item";

interface listProps {
    items: itemData[],
    onToggle(id: number): void,
    onRemove(id: number): void
}

const List: React.FC<listProps> = ({items, onToggle, onRemove}) => {
    if (items.length === 0) {
        return (
            <p>All Todo is Done</p>
        )
    }

    return (
        <ul className={styles.list}>
            {items.map(item =>
                <li className={styles.item} key={item.id}>
                    <Item
                        data={item}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                </li>
            )}
        </ul>
    );
};

export default List;