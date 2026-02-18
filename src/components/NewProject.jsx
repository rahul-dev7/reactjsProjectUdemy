import AppInput from "./Input";
import { useRef } from "react";
import Modal1 from "./Modal";
import { use } from "react";

export default function NewProject({onAdd, onCancel}) {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        //Validation ...
        if(enteredTitle.trim().length === 0 
        || enteredDescription.trim().length === 0 
        || enteredDueDate.trim().length === 0){
            // show the error modal
            modal.current.open();
            return;
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    return (
        <>
            <Modal1 ref={modal} buttonCaption="Okay">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Oops... looks like you forgot to enter a value.</p>
                <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
            </Modal1>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
                    </li>
                    <li>
                        <button className="px-6 py-2 bg-stone-800 text-stone-50 hover:text-stone-950" onClick={handleSave}>Save</button>
                    </li>
                </menu>
                <div>
                    <AppInput ref={title} label="Title" type="text" />
                    <AppInput ref={description} label="Description" textarea />
                    <AppInput type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </>
    );
}
