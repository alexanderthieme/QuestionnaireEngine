import { IQuestionnaire, QuestionType } from "../../logic/schema";

const testQuestionnaire: IQuestionnaire = {
  id: "simpleNumericAgeQuestion",
  schemaVersion: "1",
  version: "1",
  meta: {
    author: "Someone",
    language: "DE",
    title: "Simple numeric age question",
    creationDate: "2020-04-12T16:48:48+0000",
  },
  questions: [
    {
      id: "q1_age",
      text: "Wie alt sind Sie?",
      type: QuestionType.Integer,
    },
  ],
  variables: [],
  resultCategories: [
    {
      id: "rc_age",
      description: "Alter",
      results: [
        {
          id: "AGE_CHILD",
          text: "Du bist ja noch ein Kind.",
          value: {
            "<": [{ var: "q1_age.value" }, 18],
          },
        },
        {
          id: "AGE_ADULT",
          text: "Sie scheinen erwachsen zu sein.",
          value: true,
        },
      ],
    },
  ],
};

export default testQuestionnaire;
