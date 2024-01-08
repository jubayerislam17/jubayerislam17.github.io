// gitprofile.config.js

const config = {
  github: {
    username: 'arifszn', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['Abaash', 'Aqsa'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'Jubayer Islam',
    github: 'https://github.com/jubayerislam17',
    medium: 'https://medium.com/@gregorian.jubayer17',
    // website: 'https://jubayerislam17.github.io/',
    phone: '01829977462',
    email: 'jubayer.islam0182@gmail.com',
  },
  // resume: {
  //   fileUrl:
  //     'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  // },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'HTML',
    'CSS',
    'Flutter',
    'Pytorch',
  ],
  experiences: [
    {
      company: 'Battery Low',
      position: 'App Developer',
      from: 'May 2023',
      to: 'Jube 2023',
      companyLink: 'https://batterylowinteractive.com/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Islamic University of Technology',
      degree: 'Bachelors of Science in Computer Science',
      from: '2020',
      to: '2024',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Abaash',
      description:
        'Abaash is a web application that helps IUT students find and rent flats according to their preferences, while allowing flat owners to manage their properties and tenants easily. This README file provides an overview of the apps features, technologies used, and how to use it.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/Dcoders-IUT/Abaash',
    },
    {
      title: 'Aqsa',
      description:
        'Aqsa is a Flutter application designed to facilitate a seamless experience for users to stay connected with their daily prayers (Namaz) and enrich their spiritual journey. This app goes beyond just displaying prayer times; it provides a comprehensive set of features to enhance your prayer routine',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/505-NN-505/Aqsa',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'https://medium.com/@gregorian.jubayer17/the-magic-behind-xgboost-unraveling-the-wizardry-of-boosted-decision-trees-dbf3a1d6d77f', // medium | dev
    username: '@gregorian.jubayer17', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
