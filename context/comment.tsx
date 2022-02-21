import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import * as Types from "../types/comment";

import data from "../data/data.json";

const LOCAL_STORAGE_KEY = "comments";

const getDefaultContext = () : CommentContextInterface => {
  return {
    commentContext: {
      comments: [],
      currentUser: { image: { png: "", webp: "" }, username: "" },
      error: null,
      loading: true,
    },
    setCommentContext: () => {}
  };
};

const getLocalStorageData = (localStorageKey: string) => {
  const storedData = localStorage.getItem(localStorageKey);

  if (storedData) {
    return JSON.parse(storedData);
  }

  localStorage.setItem(localStorageKey, JSON.stringify(data));

  return data;
};

const CommentContext = createContext<Partial<CommentContextInterface>>({});

type ContextCommentProviderProps = {
  children?: React.ReactNode;
};

interface CommentContextInterface {
  commentContext: ContextInterface,
  setCommentContext: () => void,
}

interface ContextInterface {
  comments: Types.Comment[];
  currentUser: Types.User;
  error: Error | null;
  loading: boolean;
}

const ContextCommentProvider = ({ children }: ContextCommentProviderProps) => {
  const [commentContext, setCommentContext] = useState<ContextInterface>(
    getDefaultContext().commentContext
  );

  const updateCommentContext = (context) => {
    setCommentContext
  }

  useEffect(() => {
    const data = getLocalStorageData(LOCAL_STORAGE_KEY);

    setCommentContext({
      comments: data.comments,
      currentUser: data.currentUser,
      error: null,
      loading: false,
    });
  }, []);

  return (
    <CommentContext.Provider value={commentContext}>
      {children}
    </CommentContext.Provider>
  );
};

export default ContextCommentProvider;
export { CommentContext };
