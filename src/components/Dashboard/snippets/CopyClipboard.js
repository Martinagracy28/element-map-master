import React from 'react';
import {OverlayTrigger, Tooltip, Toast, ToastContainer} from 'react-bootstrap';

const CopyClipboard = (props) => {
    const [show, setShow] = React.useState(false);

    return (
        <>
        <ToastContainer position="bottom-end">
            <Toast onClose={() => setShow(false)} show={show} autohide  delay={1500}>
                <Toast.Body>Copied to clipboard</Toast.Body>
            </Toast>   
        </ToastContainer>
        <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="button-tooltip"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16">
            <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
            </svg> {props.value}</Tooltip>}
        >
            <h2 className='copy-text mb-0' onClick={() => { navigator.clipboard.writeText(props.value); setShow(true)}}>{props.preview}</h2>
        </OverlayTrigger>
        </>
    );
};

export default CopyClipboard;