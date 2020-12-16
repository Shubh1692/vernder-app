import { constants } from "../Helper/Constant";

export function taskReducer(
  state = {
    list: [
      { title: "google",
        image: "https://dummyimage.com/300",
        description: "dropbox is cloud based",
        fundingHistory: "$170m",
        isDeleted: false,
      },
      {title: "google 2",
        image: "https://dummyimage.com/300",
        description: "dropbox is cloud based",
        fundingHistory: "$170m",
        isDeleted: false,
      },
      { title: "google 3",
        image: "https://dummyimage.com/300",
        description: "dropbox is cloud based",
        fundingHistory: "$170m",
        isDeleted: false,
      },
    ],
    criteriaList: [
      
    ]
  },
  action
) {
  switch (action.type) {
    case constants.ADD_NEW_USER:
      return {
        // here I use spread opertor to push something in array
        list: [...state.list, action.payload.list],
        criteriaList: [...state.criteriaList],
        message: action.payload.message
      };
    case constants.ADD_NEW_CRITERIA:
      return {
        // here I use spread opertor to push something in array
        criteriaList: [...state.criteriaList, action.payload.criteriaList],
        list: [...state.list],
        message: action.payload.message
      };
      case constants.DELETE_NEW_CRITERIA:
      return {
        // here I use spread opertor to push something in array
        criteriaList: [ ...action.payload.criteriaList],
        list: [...state.list],
        message: action.payload.message
      };
    case constants.DELETE_TASK:
      return {
        // here I use filter for filting array depend on Index
        list: [
          ...state.list.filter((data, index) => index !== action.payload.id)
        ],
        message: action.message
      };
    case constants.LIST_TASK:
      return {
        list: state.list,
        message: action.payload.message
      };
    case constants.UPDATE_TASK:
      return {
        list: [
          // update particular element by Id
          (state.list[action.payload.id] = action.payload.data)
        ],
        message: action.message
      };
    default:
      return state;
  }
}
