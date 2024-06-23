const tillAddition = require("../../till-addition-react-app/till-addition");

describe("tillAddition", () => {
  // 1p
  describe("adding 1p's", () => {
    test("return £0.00 if passed an empty object", () => {
      expect(tillAddition()).toBe("£0.00");
    });
    test("return £0.01 if passed an object with 1p: 1", () => {
      const input = { "1p": 1 };
      const expected = "£0.01";
      expect(tillAddition(input)).toBe(expected);
    });
    test("return £0.05 if passed an object with 1p: 5", () => {
      const input = { "1p": 5 };
      const expected = "£0.05";
      expect(tillAddition(input)).toBe(expected);
    });
    test("return £0.15 if passed an object with 1p: 15", () => {
      const input = { "1p": 15 };
      const expected = "£0.15";
      expect(tillAddition(input)).toBe(expected);
    });
    test("return £0.59 if passed an object with 1p: 59", () => {
      const input = { "1p": 59 };
      const expected = "£0.59";
      expect(tillAddition(input)).toBe(expected);
    });
    test("return £1.00 if passed an object with 1p: 100", () => {
      const input = { "1p": 100 };
      const expected = "£1.00";
      expect(tillAddition(input)).toBe(expected);
    });
    test("return £3.39 if passed an object with 1p: 339", () => {
      const input = { "1p": 339 };
      const expected = "£3.39";
      expect(tillAddition(input)).toBe(expected);
    });
  });

  // 2p
  test("return £1.40 if passed an object with 2p: 70", () => {
    const input = { "2p": 70 };
    const expected = "£1.40";
    expect(tillAddition(input)).toBe(expected);
  });

  // 5p
  test("return £0.30 if passed an object with 5p: 6", () => {
    const input = { "5p": 6 };
    const expected = "£0.30";
    expect(tillAddition(input)).toBe(expected);
  });

  // 10p
  test("return £0.40 if passed an object with 10p: 4", () => {
    const input = { "10p": 4 };
    const expected = "£0.40";
    expect(tillAddition(input)).toBe(expected);
  });

  // 20p
  test("return £0.60 if passed an object with 20p: 3", () => {
    const input = { "20p": 3 };
    const expected = "£0.60";
    expect(tillAddition(input)).toBe(expected);
  });

  // 50p
  test("return £1.50 if passed an object with 50p: 3", () => {
    const input = { "50p": 3 };
    const expected = "£1.50";
    expect(tillAddition(input)).toBe(expected);
  });

  // £1
  test("return £25.00 if passed an object with £1: 25", () => {
    const input = { "£1": 25 };
    const expected = "£25.00";
    expect(tillAddition(input)).toBe(expected);
  });

  // £2
  test("return £4.00 if passed an object with £2: 2", () => {
    const input = { "£2": 2 };
    const expected = "£4.00";
    expect(tillAddition(input)).toBe(expected);
  });

  // £5
  test("return £35.00 if passed an object with £5: 7", () => {
    const input = { "£5": 7 };
    const expected = "£35.00";
    expect(tillAddition(input)).toBe(expected);
  });

  // £10
  test("return £100.00 if passed an object with £10: 10", () => {
    const input = { "£10": 10 };
    const expected = "£100.00";
    expect(tillAddition(input)).toBe(expected);
  });

  // £20
  test("return £80.00 if passed an object with £20: 4", () => {
    const input = { "£20": 4 };
    const expected = "£80.00";
    expect(tillAddition(input)).toBe(expected);
  });

  // £50
  test("return £350.00 if passed an object with £50: 7", () => {
    const input = { "£50": 7 };
    const expected = "£350.00";
    expect(tillAddition(input)).toBe(expected);
  });

  // 1p and 2p
  test("return £0.38 if passed an object with 1p: 30 and 2p: 4", () => {
    const input = { "1p": 30, "2p": 4 };
    const expected = "£0.38";
    expect(tillAddition(input)).toBe(expected);
  });

  // 1p, 2p, 5p, 10p, 20p and 50p
  test("return £1.90 if passed an object with 1p: 8, 2p: 1, 5p: 2, 10p: 8, 20p: 2", () => {
    const input = {
      "1p": 8,
      "2p": 1,
      "5p": 2,
      "10p": 8,
      "20p": 2,
      "50p": 1,
    };
    const expected = "£1.90";
    expect(tillAddition(input)).toBe(expected);
  });
  test("return £372.79 if passed an object with all cash/coin types", () => {
    const input = {
      "1p": 98,
      "2p": 58,
      "5p": 55,
      "10p": 38,
      "20p": 28,
      "50p": 23,
      "£1": 24,
      "£2": 4,
      "£5": 9,
      "£10": 3,
      "£20": 2,
      "£50": 4,
    };
    const expected = "£372.79";
    expect(tillAddition(input)).toBe(expected);
  });
});
