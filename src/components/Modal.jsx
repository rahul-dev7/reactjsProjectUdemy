import { useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { useRef } from 'react';
import  Button  from './Button.jsx';
function Modal1({ref, children, buttonCaption}) {
    debugger
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open: () => {
               dialog.current.showModal();
            },
        }
    });
    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{buttonCaption}</Button>
            </form>
        </dialog>, 
        document.getElementById('modal-root')
    );
}
export default Modal1;