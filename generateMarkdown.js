// function to generate markdown for README
// Do we need this?
function generateMarkdown(data) {
  return `# ${data.title}
  ![License badge](https://img.shields.io/badge/license-${data.license}-success)

  ${data.description}

## Table of Contents
${
  (data.installation ? `1. [Installation](#installation)\n` : "") +
  (data.usage ? `1. [Usage](#usage)\n` : "")
  //ADD THE REST OF THE LIST
}
${
  data.installation
    ? `## Installation
${data.installation}`
    : ""
}
${
  data.usage
    ? `## Usage
${data.usage}`
    : ""
}
`;
}

module.exports = generateMarkdown;
