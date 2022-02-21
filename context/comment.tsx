import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { LOCAL_STORAGE_KEY } from "../constants/constants";
import localStorageService from "../services/localStorage.service";

import * as Types from "../types/comment";

interface ContextInterface {
  comments: Types.Comment[];
  currentUser: Types.User;
  error: Error | null;
  loading: boolean;
}

const CommentContext = createContext(
  {} as [ContextInterface, Dispatch<SetStateAction<ContextInterface>>]
);

type ContextCommentProviderProps = {
  children?: React.ReactNode;
};

const ContextCommentProvider = ({ children }: ContextCommentProviderProps) => {
  const [commentContext, setCommentContext] = useState<ContextInterface>({
    comments: [],
    currentUser: {
      image: {
        png: "",
        webp: "",
      },
      username: "",
    },
    error: null,
    loading: false,
  });

  useEffect(() => {
    const data = localStorageService(LOCAL_STORAGE_KEY).getData();

    setCommentContext({
      comments: data.comments as Types.Comment[],
      currentUser: data.currentUser as Types.User,
      error: null,
      loading: false,
    });
  }, []);

  return (
    <CommentContext.Provider value={[commentContext, setCommentContext]}>
      {children}
    </CommentContext.Provider>
  );
};

export default ContextCommentProvider;
export { CommentContext };
