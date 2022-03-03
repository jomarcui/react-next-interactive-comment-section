import { Dispatch, SetStateAction } from "react";

import * as Styles from "./Comment.styles";

import { Colors } from "../../enums/colors";

import Modal from "../Ui/Modal";

type DeleteProps = {
  confirmDelete: () => void;
  setDeleting: Dispatch<SetStateAction<boolean>>;
};

const Delete = ({ confirmDelete, setDeleting }: DeleteProps) => {
  const handleClickCancelDelete = () => {
    setDeleting(false);
  };

  const handleClickConfirmDelete = () => {
    confirmDelete();
  };

  return (
    <Modal show>
      <Styles.ModalTitle>Delete comment</Styles.ModalTitle>
      <Styles.ModalText>
        Are you sure you want to delete this comment? This will remove the
        comment and can&lsquo;t be undone.
      </Styles.ModalText>
      <div className="button-container">
        <Styles.ModalButton
          backgroundColor={Colors.GRAYISH_BLUE}
          onClick={handleClickCancelDelete}
        >
          NO, CANCEL
        </Styles.ModalButton>
        <Styles.ModalButton
          backgroundColor={Colors.SOFT_RED}
          onClick={handleClickConfirmDelete}
        >
          YES, DELETE
        </Styles.ModalButton>
      </div>
    </Modal>
  );
};

export default Delete;
