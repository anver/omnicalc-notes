import React, { createContext, useReducer, useContext } from "react";
import initialState from "./data";
export type TNote = { id: number; note: string; date: string };
type TState = { notes: TNote[] };
type TAdd = { type: "add"; note: string };
type TDel = { type: "del"; id: number };
type TEdit = { type: "edit"; id: number; note: string };
type TAction = TAdd | TDel | TEdit;
type TDispatch = (action: TAction) => void;

const StateContext = createContext<TState | undefined>(undefined);
const DispatchContext = createContext<TDispatch | undefined>(undefined);

const uniqueId = () => {
  return new Date().valueOf();
};

const getDate = () => {
  var date = new Date();
  var n = date.toDateString();
  return `${n}`;
};

const addItem = ({
  state,
  action,
}: {
  state: TState;
  action: TAdd;
}): TState => {
  return {
    ...state,
    notes: [
      ...state.notes,
      {
        id: uniqueId(),
        note: action.note,
        date: getDate(),
      },
    ],
  };
};

const deleteItem = ({
  state,
  action,
}: {
  state: TState;
  action: TDel;
}): TState => {
  return {
    ...state,
    notes: [...state.notes.filter(note => note.id !== action.id)],
  };
};

function reducer(state: TState, action: TAction): TState {
  switch (action.type) {
    case "add":
      return addItem({ state, action });
    case "del":
      return deleteItem({ state, action });
    default: {
      throw new Error("Invalid meta action type");
    }
  }
}

const AppContext: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

const useStateContext = (): TState => {
  const ctx = useContext(StateContext);
  if (ctx === undefined) {
    throw new Error("State context must be used within state provider");
  }
  return ctx;
};

const useDispatchContext = (): TDispatch => {
  const ctx = useContext(DispatchContext);
  if (ctx === undefined) {
    throw new Error("Dispatch context must be used within dispatch provider");
  }
  return ctx;
};

export { AppContext, useStateContext, useDispatchContext };
