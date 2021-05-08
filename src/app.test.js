const inquirer = require("inquirer");

const app = require("./app");
const generateHTML = require("./generateHTML");
const writeToFile = require("./writeToFile");

jest.mock("inquirer");
jest.mock("./generateHTML");
jest.mock("./writeToFile");

describe("app", () => {
  const inquirerSpy = jest.spyOn(inquirer, "prompt");
  const consoleSpy = jest.spyOn(console, "log");

  const mockAnswers = (answers = {}) => {
    inquirerSpy.mockResolvedValue(answers);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should console log App Started", async () => {
    mockAnswers();

    const expected = "App Started...";
    await app();

    expect(consoleSpy).toHaveBeenCalledWith(expected);
  });

  test("should call generateHTML with the answers", async () => {
    const mockData = {
      zooName: "foo bar",
    };

    mockAnswers(mockData);

    await app();

    expect(generateHTML).toHaveBeenCalledWith(mockData);
  });

  test("should call writeToFile with the html", async () => {
    const mockData = {
      zooName: "Foo Bar",
    };

    const mockHtml = "html string";

    mockAnswers(mockData);
    generateHTML.mockReturnValue(mockHtml);

    await app();

    expect(writeToFile).toHaveBeenCalledWith(mockHtml);
  });
});
