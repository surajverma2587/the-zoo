const inquirer = require("inquirer");

const getAnswers = require("./getAnswers");

jest.mock("inquirer");

describe("getAnswers", () => {
  const inquirerSpy = jest.spyOn(inquirer, "prompt");

  const mockAnswers = (answers = {}) => {
    inquirerSpy.mockResolvedValue(answers);
  };
  test("should pass the questions to inquirer prompt", async () => {
    mockAnswers();

    const mockQuestions = [
      {
        type: "input",
        message: "mock message",
        name: "mock",
      },
    ];

    await getAnswers(mockQuestions);

    expect(inquirerSpy).toHaveBeenCalledWith(mockQuestions);
  });
});
