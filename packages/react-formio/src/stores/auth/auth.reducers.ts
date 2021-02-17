import { createReducer } from "@tsed/redux-utils";
import { FormSchema } from "../../interfaces";
import { RoleSchema } from "../../interfaces/RoleSchema";
import {
  failUser,
  formAccessUser,
  logoutUser,
  projectAccessUser,
  receiveUser,
  requestUser,
  submissionAccessUser,
  userForms,
  userRoles
} from "./auth.actions";

export interface AuthState {
  init: boolean;
  isActive: boolean;
  user: null | any;
  authenticated: boolean;
  submissionAccess: any;
  formAccess: any;
  projectAccess: any;
  roles: Record<string, RoleSchema>;
  forms: Record<string, FormSchema>;
  is: any;
  error: null | Error;
}

function createInitialState(): AuthState {
  return {
    init: false,
    isActive: false,
    user: null,
    authenticated: false,
    submissionAccess: {},
    formAccess: {},
    projectAccess: {},
    roles: {},
    forms: {},
    is: {},
    error: null
  };
}

function mapProjectRolesToUserRoles(
  projectRoles: Record<string, any>,
  userRoles: any[]
) {
  return Object.entries(projectRoles).reduce(
    (result, [name, role]) => ({
      ...result,
      [name]: userRoles.includes(role._id)
    }),
    {}
  );
}

function getUserRoles(projectRoles: Record<string, RoleSchema>) {
  return Object.keys(projectRoles).reduce(
    (result, name) => ({
      ...result,
      [name]: name === "anonymous"
    }),
    {}
  );
}

export const authReducer = createReducer<AuthState>(
  {
    [requestUser.toString()](state) {
      return {
        ...state,
        init: true,
        submissionAccess: false,
        isActive: true
      };
    },
    [receiveUser.toString()](state, { user }: any) {
      return {
        ...state,
        isActive: false,
        user,
        authenticated: true,
        is: mapProjectRolesToUserRoles(state.roles, user.roles),
        error: null
      };
    },
    [failUser.toString()](state, { error }: any) {
      return {
        ...state,
        isActive: false,
        is: getUserRoles(state.roles),
        error
      };
    },
    [logoutUser.toString()](state) {
      return {
        ...state,
        user: null,
        isActive: false,
        authenticated: false,
        is: getUserRoles(state.roles),
        error: null
      };
    },
    [submissionAccessUser.toString()](state, { submissionAccess }: any) {
      return {
        ...state,
        submissionAccess
      };
    },
    [formAccessUser.toString()](state, { formAccess }: any) {
      return {
        ...state,
        formAccess
      };
    },
    [userForms.toString()](state, { forms }: any) {
      return {
        ...state,
        forms
      };
    },
    [projectAccessUser.toString()](state, { projectAccess }: any) {
      return {
        ...state,
        projectAccess
      };
    },
    [userRoles.toString()](state, { roles }: any) {
      return {
        ...state,
        roles
      };
    },
    default(state: any) {
      if (!window.localStorage.getItem("formioUser")) {
        return {
          ...state,
          user: null,
          isActive: false,
          authenticated: false,
          is: getUserRoles(state.roles),
          error: null
        };
      }
      return state;
    }
  },
  createInitialState
);
