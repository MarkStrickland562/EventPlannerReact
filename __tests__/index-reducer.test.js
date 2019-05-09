import rootReducer from "./../../src/reducers/index";
import selectedEventReducer from "./../../src/reducers/selected-event-reducer";
import eventsReducer from "./../../src/reducers/events-reducer";
import { createStore } from "redux";

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterEvents: {},
      selectedEvent: {}
    });
  });

  test("Should contain eventsReducer logic", () => {
    expect(store.getState().masterEvents).toEqual(
      eventsReducer(undefined, { type: null })
    );
  });

  test("Should contain selectEventReducer logic", () => {
    expect(store.getState().selectedEvent).toEqual(
      selectEventReducer(undefined, { type: null })
    );
  });
});
