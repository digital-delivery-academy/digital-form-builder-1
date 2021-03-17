//TODO:- this was designed to be a namespace but requires babel setup.
export enum Meta {
  NEW_COMPONENT = "NEW_COMPONENT",
  SET_COMPONENT = "SET_COMPONENT",
  SET_PAGE = "SET_PAGE",
  DELETE = "DELETE",
  VALIDATE = "VALIDATE",
  SET_SELECTED_LIST = "SET_SELECTED_LIST",
}

export enum Schema {
  EDIT_SCHEMA_MIN = "EDIT_SCHEMA_MIN",
  EDIT_SCHEMA_MAX = "EDIT_SCHEMA_MAX",
  EDIT_SCHEMA_PRECISION = "EDIT_SCHEMA_PRECISION",
  EDIT_SCHEMA_LENGTH = "EDIT_SCHEMA_LENGTH",
  EDIT_SCHEMA_REGEX = "EDIT_SCHEMA_REGEX",
}

export enum Fields {
  EDIT_TITLE = "EDIT_TITLE",
  EDIT_NAME = "EDIT_NAME",
  EDIT_HELP = "EDIT_HELP",
  EDIT_CONTENT = "EDIT_CONTENT",
  EDIT_TYPE = "EDIT_TYPE",
}

export enum Options {
  EDIT_OPTIONS_HIDE_TITLE = "EDIT_OPTIONS_HIDE_TITLE",
  EDIT_OPTIONS_REQUIRED = "EDIT_OPTIONS_REQUIRED",
  EDIT_OPTIONS_HIDE_OPTIONAL = "EDIT_OPTIONS_HIDE_OPTIONAL",
  EDIT_OPTIONS_FILE_UPLOAD_MULTIPLE = "EDIT_OPTIONS_FILE_UPLOAD_MULTIPLE",
  EDIT_OPTIONS_CLASSES = "EDIT_OPTIONS_CLASSES",
  EDIT_OPTIONS_MAX_DAYS_IN_FUTURE = "EDIT_OPTIONS_MAX_DAYS_IN_FUTURE",
  EDIT_OPTIONS_MAX_DAYS_IN_PAST = "EDIT_OPTIONS_MAX_DAYS_IN_PAST",
  EDIT_OPTIONS_CONDITION = "EDIT_OPTIONS_CONDITION",
  EDIT_OPTIONS_TYPE = "EDIT_OPTIONS_TYPE",
  EDIT_OPTIONS_ROWS = "EDIT_OPTIONS_ROWS",
}

export const Actions = {
  ...Meta,
  ...Schema,
  ...Fields,
  ...Options,
};
export type ComponentActions = typeof Actions;
