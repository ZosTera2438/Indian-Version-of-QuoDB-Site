const forms = [
  {
    name: "Your info",
    data: {
      heading: "Personal info",
      subHeading: "Please provide your name, email address, and phone number.",

      input: [
        {
          name: "Name",
          placeholder: "e.g. Stephen King",
          type: "text"
        },
        {
          name: "Email Address",
          placeholder: "e.g. stephenking@lorem.com",
          type: "email"
        }
      ],
    },
  },

  {
    name: "Add Quote",
    data: {
      heading: "Quote Information",
      subHeading: "Add your quote information",

      inputQuote: [
        {
          name: "Quote",
          placeholder: "e.g. Why so serious",
          type: "text"
        },
        {
          name: "Movie",
          placeholder: "Dark Knight",
          type: "text"
        },
        {
          name: "Year",
          placeholder: "e.g. 2000",
          type: "text"
        },
      ],
    },
  },
  {
    name: "Message",
    data: {
      heading: "Finishing up",
      subHeading: "We appreciate you taking the time to give a small message",

      inputDescription: [
        {
          name: "Message",
          placeholder: "e.g. This is cool",
          type: "text"
        }
      ],
    },
  },
];

export const getFormData = (num: number) => {
  return forms[num];
};

export const getNavigation = (num: number) => {
  return forms.map((form) => {
    return form.name;
  });
};

export const getFormCount = () => {
  return forms.length;
};
