function generateMarkdown(data) {
  const profileImg = `https://github.com/${data.username}.png?size=50`;
  return `
# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Licence](#license)
* [Tests](#tests)
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## License 
${data.licence}
## Tests
${data.tests}
## Questions

If you have any further questions about my repo, you can open an issue or contact me directly at ${data.email}.
You can also find more of my previous work at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;