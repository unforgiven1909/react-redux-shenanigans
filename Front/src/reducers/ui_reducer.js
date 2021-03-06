import { SHOW_SNACKBAR, HIDE_SNACKBAR } from "../actions/ui/constants";
import {
  INSERT_LOCATION,
  DELETE_LOCATION
} from "../actions/locations/constants";

import { INSERT_MEDIA, DELETE_MEDIA } from "../actions/media/constants";

let initialState = {
  snackbar: {
    open: false,
    mmessage: ""
  }
};

export default function(previousState = initialState, action) {
  switch (action.type) {
    case SHOW_SNACKBAR:
      return {
        snackbar: {
          open: true,
          message: action.payload
        }
      };
    case INSERT_LOCATION:
      return {
        snackbar: {
          open: true,
          message: "Location added"
        }
      };
    case DELETE_LOCATION:
      return {
        snackbar: {
          open: true,
          message: "Location deleted"
        }
      };
    case INSERT_MEDIA:
      return {
        snackbar: {
          open: true,
          message: "Media added"
        }
      };
    case DELETE_MEDIA:
      return {
        snackbar: {
          open: true,
          message: "Media deleted"
        }
      };
    case HIDE_SNACKBAR:
      return {
        snackbar: {
          open: false,
          message: ""
        }
      };
    default:
      return previousState;
  }
}
