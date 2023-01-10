import React from 'react';
import styles from './Item.module.css';

interface itemProps {
    data: itemData,
    onToggle(id: number): void,
    onRemove(id: number): void
}

const Item: React.FC<itemProps> = ({data, onToggle, onRemove}) => {
    const parentClasses = [styles.item];
    if (data.isDone) {
        parentClasses.push(styles.done)
    }

    return (
        <div className={parentClasses.join(' ')}>
            <input type="checkbox" checked={data.isDone} onChange={onToggle.bind(null, data.id)}/>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>{data.title}</h3>
                <span className={styles.label}>id: {data.id}</span>
            </div>
            <button type="button" onClick={onRemove.bind(null, data.id)}>X</button>
        </div>
    );
};

export default Item;