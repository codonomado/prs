import { RECEIVE_PROJECTS } from "./actions";

const initialState = { projects: [] };

export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    default:
      return state;
  }
}
