import { ReactNode } from "react";

import * as Styles from "./modal.styles";

type ModalProps = {
    children: ReactNode,
    show: boolean
}

const Modal = ({ children, show }: ModalProps) => {
    if (!show) {
        return null;
    }

    return (
        <Styles.Overlay>
            <Styles.Modal>
                {children}
            </Styles.Modal>
        </Styles.Overlay>
    );
}

export default Modal;