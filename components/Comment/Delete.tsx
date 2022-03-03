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
      <p>Delete comment</p>
      <p>
        Are you sure you want to delete this comment? This will remove the
        comment and can&lsquo;t be undone.
      </p>
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
    </Modal>
  );
};

export default Delete;
