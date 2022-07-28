import { UIState } from "./";

type UIActionType =
  | { type: "[UI] - open sidebar" }
  | { type: "[UI] - close sidebar" };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "[UI] - open sidebar":
      return {
        ...state,
        sideMenuOpen: true,
      };
    case "[UI] - close sidebar":
      return {
        ...state,
        sideMenuOpen: false,
      };

    default:
      return state;
  }
};
