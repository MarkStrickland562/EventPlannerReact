import eventsReducer from "./../../src/reducers/events-reducer";

describe("eventsReducer", () => {
  let action;
  const sampleEventData = {
    id: 0,
    eventName: "July 5th BBQ",
    eventDate: "2019-07-04",
    eventLocation: "Woodland Park",
    menusId: 0
  };

  test("Should return default state if no action type is recognized", () => {
    expect(eventsReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new event data to masterEvents", () => {
    const {
      id,
      eventName,
      eventDate,
      eventLocation,
      menusId
    } = sampleEventData;
    action = {
      type: "ADD_EVENT",
      id: id,
      eventName: eventName,
      eventDate: eventDate,
      eventLocation: eventLocation,
      menusId: menusId
    };
    expect(eventsReducer({}, action)).toEqual({
      [id]: {
        eventName: eventName,
        eventDate: eventDate,
        eventLocation: eventLocation,
        menusId: menusId
      }
    });
  });
});
