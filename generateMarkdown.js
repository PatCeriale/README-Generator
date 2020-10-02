// function to generate markdown for README using user's inputs
function generateMarkdown(data) {
  return `# **${data.title}**

  ![License badge](https://img.shields.io/badge/license-${data.license}-success)

  ## **Description**

  >${data.description}

## **Table of Contents**
${
  (data.installation ? `1. [Installation](#installation)\n` : "") +
  (data.usage ? `1. [Usage](#usage)\n` : "") +
  (data.license ? `1. [License](#license)\n` : "") +
  (data.contributing ? `1. [Contributing](#contributing)\n` : "") +
  (data.tests ? `1. [Tests](#tests)\n` : "") +
  (data.gitHub ? `1. [GitHub](#gitHub)\n` : "") +
  (data.email ? `1. [Email](#email)\n` : "") +
  (data.preview ? `1. [Preview](#preview)\n` : "")
}

${
  data.installation
    ? `## **Installation**
>${data.installation}`
    : ""
}
${
  data.usage
    ? `## **Usage**
>${data.usage}`
    : ""
}
${
  data.license
    ? `## **License**
>${data.license}`
    : ""
}
${
  data.contributing
    ? `## **Contributing**
>${data.contributing}`
    : ""
}
${
  data.tests
    ? `## **Tests**
>${data.tests}`
    : ""
}
${
  data.gitHub
    ? `## **GitHub**
>${data.gitHub}`
    : ""
}
${
  data.email
    ? `## **Email**
>${data.email}`
    : ""
}
${//Questions section and how to reach me github and email}
${
  data.preview
    ? `## **Preview**
${data.preview}`
    : ""
}
`;
}

module.exports = generateMarkdown;
