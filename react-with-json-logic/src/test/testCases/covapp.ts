import { IQuestionnaire, QuestionType, IQuestionnaireMeta } from "../../logic/schema";

const meta: IQuestionnaireMeta  = {
  author: 'Alexander Thieme, CovQuestions Team',
  language: 'DE',
  title: 'Example',
  creationDate: '2020-04-19T20:32:05+0000'
}


const example: IQuestionnaire = {
  id: 'covapp_original',
  schemaVersion: '0.0.0.1',
  version: '0.0.0.1',
  meta,
  questions: [
    {
      id: 'q1_age',
      text: 'How old are you?', 
      type: QuestionType.Select,
      options: [
        { text: 'Under 40', value: '40' },
        { text: '40-50', value: '50' },
        { text: '51-60', value: '60' },
        { text: '61-70', value: '70' },
        { text: '71-80', value: '80' },
        { text: 'Over 80', value: '80+' },
      ]
    },
    {
      id: 'q2_living',
      text: 'What is your current living situation?',
      type: QuestionType.Select,
      options: [
        { text: 'Living alone', value: 'alone' },
        { text: 'Living together with family, in a shared flat, or in a supervised community facility', value: 'together' }
      ]
    },
    {
      id: 'q3_caring',
      text: 'At least once a week, do you privately care for people with age-related conditions, chronic illnesses, or frailty?',
      type: QuestionType.Boolean,
    },
    {
      id: 'q4_work',
      text: 'Do you work in one of the following areas?',
      type: QuestionType.Select,
      options: [
        { text: 'In the medical field', value: 'medical' },
        { text: 'In a community facility (school, day care center, university, home etc.)', value: 'community' },
        { text: 'No, in none of the above', value: 'none' },
      ]
    },
    {
      id: 'q5_smoke',
      text: 'Do you smoke?',
      type: QuestionType.Boolean,
    },
    {
      id: 'q6_pregnant',
      text: 'Are you pregnant?',
      type: QuestionType.Select,
      options: [
        { text: 'Yes', value: 'yes' },
        { text: 'No', value: 'no' },
        { text: 'I don\'t know', value: 'dont_know' },
      ]
    },
    {
      id: 'q7_contact',
      text: 'Have you had close contact with a confirmed case?',
      details: 
`Close contact with a confirmed case means:

* Face-to-face contact for longer than 15 minutes
* Direct, physical contact (touching, shaking hands, kissing)
* Being within 1.5 meters of the person for more than 15 minutes
* Contact with or exchange of body fluids
* Living in the same apartment

Choose "No" if you have worn adequate protective measures (mask, smock) on contact.`,
      type: QuestionType.Boolean,
    },
    {
      id: 'q8_contact_date',
      text: 'What day was the last contact?',
      type: QuestionType.Date,
      enableWhen: { 
        "var": "q7_contact.value"
      }
    }, 
    {
      id: 'q9_fever',
      text: 'Have you had a fever (over 38°C) in the past 24 hours?',
      type: QuestionType.Boolean,
    },
    {
      id: 'q10_fever',
      text: 'What was the highest temperature, approx.?', 
      type: QuestionType.Select,
      options: [
        { text: '38°C', value: '38' },
        { text: '39°C', value: '39' },
        { text: '40°C', value: '40' },
        { text: '41°C', value: '41' },
        { text: '42°C', value: '42' },
        { text: 'More than 42°C', value: '42+' },
        { text: 'I don\'t know', value: 'dont_know' }
      ],
      enableWhen: { 
        "var": "q9_fever.value"
      }
    },
    {
      id: 'q11_chills',
      text: 'Have you had chills in the past 24 hours?',
      type: QuestionType.Boolean,
    },
    {
      id: 'q12_symptoms',
      text: 'Which of the following symptoms have you had in the past 24 hours? (multiple selection possible)',
      type: QuestionType.Multiselect,
      options: [
        { text: 'Feeling tired or weak', value: 'tired' },
        { text: 'Body aches', value: 'aches' },
        { text: 'Diarrhea', value: 'diarrhea' },
        { text: 'Headache', value: 'headache' },
        { text: 'Loss of taste and/or smell', value: 'taste' }
      ],
      details: `The question relates to acute or exacerbated symptoms and excludes chronic complaints or seasonal or allergic complaints. If you have a chronic illness, compare your current symptoms with your previous problems to answer the question.\n\nIf you don't have any of the symptoms, don't select an entry and continue by choosing the "Next" button.`
    },
    {
      id: 'q13_cough',
      text: 'In the past 24 hours, have you had a persistent cough?',
      type: QuestionType.Boolean,
      details: `The question relates to cold symptoms and excludes chronic cough, seasonal or allergy-related cough.\nIf you have a chronic cough, compare your current coughing to your regular problems.`
    },
    {
      id: 'q14_runny_nose',
      text: 'In the past 24 hours, have you had a runny nose?',
      type: QuestionType.Boolean,
      details: `The question relates to cold symptoms and excludes chronic runny nose, seasonal or allergy-related runny nose. If you have chronic sniffling, compare your current conditions with your existing problems.`
    },
    {
      id: 'q15_sore_throat',
      text: 'In the past 24 hours, have you had a sore throat?',
      type: QuestionType.Boolean,
    },
    {
      id: 'q16_breath',
      text: 'In the past 24 hours, did you feel that you were more quickly out of breath than usual?',
      type: QuestionType.Boolean,
      details: `Choose "Yes" if you:

* Become breathless faster than usual or have difficulty breathing with light loads, such as a walk or climbing a short flight of stairs
* Experience difficulty breathing or shortness of breath when sitting or lying down
* Have a feeling of breathlessness/shortness of breath when getting up from bed or a chair

If you have chronic lung disease, compare your current breathing problems with your existing breathing problems.`
    },
    {
      id: 'q17_symptoms_date',
      text: 'With regard to all questions about symptoms: since when have you had the symptoms you specified?',
      type: QuestionType.Date,
      enableWhen: { var: "v_symptoms.value" }
    }, 
    {
      id: 'q18_lung_disease',
      text: 'Have you been diagnosed with chronic lung disease by a doctor?',
      type: QuestionType.Select,
      options: [
        { text: 'Yes', value: 'yes' },
        { text: 'No', value: 'no' },
        { text: 'I don\'t know', value: 'dont_know' },
      ]
    },
    {
      id: 'q19_diabetes',
      text: 'Have you been diagnosed with diabetes by a doctor?',
      type: QuestionType.Select,
      options: [
        { text: 'Yes', value: 'yes' },
        { text: 'No', value: 'no' },
        { text: 'I don\'t know', value: 'dont_know' },
      ]
    },
    {
      id: 'q20_heart_disease',
      text: 'Have you been diagnosed with heart disease by a doctor?',
      type: QuestionType.Select,
      options: [
        { text: 'Yes', value: 'yes' },
        { text: 'No', value: 'no' },
        { text: 'I don\'t know', value: 'dont_know' },
      ]
    },
    {
      id: 'q21_obesity',
      text: 'Have you been diagnosed with obesity by a doctor?',
      type: QuestionType.Select,
      options: [
        { text: 'Yes', value: 'yes' },
        { text: 'No', value: 'no' },
        { text: 'I don\'t know', value: 'dont_know' },
      ]
    },
    {
      id: 'q22_steroids',
      text: 'Are you currently taking steroids?',
      type: QuestionType.Select,
      options: [
        { text: 'Yes', value: 'yes' },
        { text: 'No', value: 'no' },
        { text: 'I don\'t know', value: 'dont_know' },
      ]
    },
    {
      id: 'q23_steroids',
      text: 'Are you currently taking immunosuppressants?',
      type: QuestionType.Select,
      options: [
        { text: 'Yes', value: 'yes' },
        { text: 'No', value: 'no' },
        { text: 'I don\'t know', value: 'dont_know' },
      ],
      details: 'You take or get immunosuppresives after an organ transplant, in the therapy of an autoimmune disease, or during chemotherapy.'
    },
    {
      id: 'q24_vaccines',
      text: 'Have you been vaccinated against flu between October 2019 and today?',
      type: QuestionType.Boolean
    },
    {
      id: 'q25_consent',
      text: 'Consent to the transmission of your postal code and recommended action?',
      type: QuestionType.Boolean,
      details: `In order to draw valuable conclusions about the further expansion of the COVID-19 pandemic, we ask for your consent to transmit your postal code and your recommendation to Charité – Universitätsmedizin Berlin. The data will be stored in an anonymous form (postal code and recommendation) and if necessary, the data will be shared with third parties as part of the fight against pandemics. You can revoke your consent at any time. The revocation does not affect the lawfulness of processing based on consent before the revocation.

If you would like to give your consent to the transmission of the postal code and the recommendation of your recommended action, choose “Yes” below. You will then be asked for your postal code in the next step.

To continue without submitting your data, choose “No” below. You will then be forwarded directly to your summary.

You can find more information in the data protection declaration.`
    },
    {
      id: 'q25_postal_code',
      text: 'What\'s your postal code?',
      type: QuestionType.Text,
      details:`You can enter your postal code here. By specifying your postal code, you allow us to map the data you donated on a map of Germany. This enables us further understand the spread of the pandemic.`
    },
  ],
  // Here go all our variables.
  variables: [
    {
      id: "v_symptoms",
      value: { var: "q12_symptoms.symptoms" }
    },
    {
      id: "v_contact_relevant",
      value: { "<=": [{ "-": [{ "var": "g_now.value"}, { "var": "q8_contact_date.value"}]}, 1209600] }
    },
    {
      id: "v_symptoms",
      value: {
        or: [
          { var: "q9_fever.value" },
          { var: "q11_chills.value" },
          { ">": [{ var: "q12_symptoms.selectedCount" }, 0]},
          { var: "q13_cough.value" },
          { var: "q14_runny_nose.value" },
          { var: "q15_sore_throat.value" },
          { var: "q16_breath.value" }
        ]
      }
    },
    {
      id: "v_risk_group",
      value: {
        or: [
          { var: "q6_pregnant.value" },
          { var: "q18_lung_disease.value" },
          { var: "q19_diabetes.value" },
          { var: "q21_obesity.value" },
          { var: "q22_steroids.value" },
          { 'in': [{ var: "q1_age.value" }, ['70', '80', '80+']]},
        ]
      }
    },
    {
      id: "v_symptoms_after_contact",
      value: { "<": [{ "var": "q8_contact_date.value"}, { "var": "q17_symptoms_date.value"}] }
    },
    {
      id: "v_respiratory_symptoms",
      value: {
        or: [
          { var: "q13_cough.value" },
          { var: "q15_sore_throat.value" },
          { var: "q16_breath.value" }
        ]
      }
    }
  ],
  resultCategories: [
    {
      id: 'rc_risk',
      description: 'Risk Assessment',
      results: [
        {
          id: 'HIGH_RISK',
          text: 'High Risk of SARS-Cov-2',
          value: { and: [
            { var: "v_symptoms.value" },
            { var: "v_contact.value" },
            { var: "v_symptoms_after_contact.value" },
          ]}
        },
        {
          id: 'MEDIUM_RISK_A',
          text: 'Typical symptoms of SARS-Cov-2 without contact.',
          value: { and: [
            { var: "v_symptoms.value" },
            { var: "v_respiratory_symptoms.value" },
          ]}
        },
        {
          id: 'MEDIUM_RISK_B',
          text: 'No symptoms, but contact with case.',
          value: { and: [
            { var: "v_contact_relevant.value" },
            { "!": { var: "v_symptoms.value" } },
          ]}
        },
        {
          id: 'LOW_RISK',
          text: 'Symptoms indicate a cold.',
          value: { and: [
            { var: "v_symptoms.value" },
            { "!": { var: "v_respiratory_symptoms.value" } },
          ]}
        },
        {
          id: 'NO_RISK',
          text: 'No risk',
          value: { and: [
            { "!": { var: "v_symptoms.value" } },
            { "!": { var: "v_contact.value" } },
          ]}
        },
      ]
    },
    {
      id: 'rc_medical_advisory',
      description: 'Medical advisory',
      results: [{
        id: 'SHOW_MEDICAL_ADVISORY',
        text: 'You work in the medical field.',
        value: { "==": [{ var: "q4_work.value"}, 'medical'] }
      }],
    },
    {
      id: 'rc_contact_irrelevant',
      description: 'Contact advisory',
      results: [{
        id: 'SHOW_CONTACT_ADVISORY',
        text: 'Contact was irrellevant.',
        value: { "and": [
          { "var": "q8_contact_date.value" },
          { "!": { "var": "v_contact_relevant" }},
          { "!": { "var": "v_symptoms" }}
        ]}
      }],
    },
    {
      id: 'rc_risk_group',
      description: 'Risk group advisory',
      results: [{
        id: 'SHOW_RISK_GROUP_ADVISORY',
        text: 'You belong to the risk group',
        value: { var: 'v_risk_group.value'}
      }],
    },
    {
      id: 'rc_breath',
      description: 'Shortness of breath advisory',
      results: [{
        id: 'SHOW_SHORTNESS_OF_BREATH_ADVISORY',
        text: 'You reported shortness of breath.',
        value: { var: 'q16_breath.value'}
      }],
    }
  ]
}

export default example

