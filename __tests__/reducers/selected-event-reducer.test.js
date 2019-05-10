import selectedEventReducer from "./../../src/reducers/selected-event-reducer";
import c from "./../../src/constants";

describe("selectedEventReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(selectedEventReducer({}, { type: null })).toEqual({});
  });

  test("Should record which event has been selected by user", () => {
    expect(
      selectedEventReducer({}, { type: c.SELECT_EVENT, eventId: 1 })
    ).toEqual(1);
  });
});
