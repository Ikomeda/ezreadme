const licenseLinks = {
  Unlicense: "http://unlicense.org/",
  MIT: "http://www.mit.edu/~amini/LICENSE.md",
  Eclipse: "http://www.eclipse.org/legal/epl-2.0/"
};

function renderLicense(license) {
  if (license == 'Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](${licenseLinks.Unlicense})`;
  } else if (license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](${licenseLinks.MIT})`;
  } else if (license == 'Eclipse') {
    return `[![License: Eclipse](https://img.shields.io/badge/license-Eclipse-red.svg)](${licenseLinks.Eclipse})`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, license, contribution, tests, github, email } = data;
  const readmeTemplate = `
  # ${title}
  <a name='license'></a>
  ## License
  ${renderLicense(license)}
  ## Description
  ${description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Test Instructions](#tests)
  * [Contact](#contact)
  <a name='installation'></a>
  ## Installation
  ${installation}
  <a name='usage'></a>
  ## Usage
  ${usage}
  <a name='contributions'></a>
  ## Contributions
  ${contribution}
  <a name='tests'></a>
  ## Test Instructions
  ${tests}
  <a name='contact'></a>
  ## Contact
  * GitHub: https://github.com/${github}/
  * Email: ${email}`;
  return readmeTemplate;
}

module.exports = generateMarkdown;
