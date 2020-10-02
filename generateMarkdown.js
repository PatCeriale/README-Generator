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
  (data.gitHub || data.email ? `1. [Questions](#questions)\n` : "") +
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
  //Question Header
  data.gitHub || data.email ? `## **Questions**` : ""
}
${
  //Contact info - GitHub
  data.gitHub ? `Find me on GitHub at https://github.com/${data.gitHub}.` : ""
}
${
  //Contact info - Email
  data.email ? `Contact me via email at ${data.email}.` : ""
}
${
  data.preview
    ? `## **Preview**
${data.preview}`
    : ""
}
`;
}

module.exports = generateMarkdown;
