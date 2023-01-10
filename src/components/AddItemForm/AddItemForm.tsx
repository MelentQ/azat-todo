import React, {useState} from 'react';

interface AddItemFormProps {
    onAdd(title: string, content: string): void
}

interface formDataFields {
    title: string,
    content: string
}

const AddItemForm: React.FC<AddItemFormProps> = ({onAdd}) => {
    const [formData, setFormData] = useState<formDataFields>({title: '', content: ''})

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        onAdd(formData.title, formData.content);
        setFormData({
            title: '',
            content: ''
        })
    }

    const changeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            title: event.target.value
        }))
    }

    const changeContentHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            content: event.target.value
        }))
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <h2>Create Todo</h2>
            <input onChange={changeTitleHandler} value={formData.title} type="text" placeholder="Title"/>
            <input onChange={changeContentHandler} value={formData.content} type="text" placeholder="Content"/>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddItemForm;