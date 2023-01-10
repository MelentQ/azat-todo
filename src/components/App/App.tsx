import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ListPage from "../../pages/ListPage";
import DetailPage from "../../pages/DetailPage";
import AddItemPage from "../../pages/AddItemPage";
import NotFoundPage from "../../pages/NotFoundPage";
import styles from './App.module.css';

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/" element={<ListPage/>} />
                <Route path="/add" element={<AddItemPage/>} />
                <Route path="/detail" element={<DetailPage/>} />
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </div>
    );
}

export default App;
