const generateHTML = require("./generateHTML");

describe("generateHTML", () => {
  test("should return the expected HTML markup", () => {
    const actual = generateHTML({ zooName: "Foo Bar" });

    expect(actual).toMatchSnapshot();
  });
});
