// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseBadge(license) {
  if (license !== "None") {
    return `${license}`;
  }
  return "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function licenseLink(license) {
  if (license !=="None") {
    return "\n [License](#license) \n"
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function licenseSection(license) {
  if (license !== "none") {
    return `## License ${license}`;
  }
  return "";
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${licenseBadge(data.license)}

## Description
${data.description}

## Table of Contents 
-[Installation](#installation)

-[Usage](#usage)

-${licenseLink(data.license)}

-[Contributing](#contributing)

-[Tests](#tests)

-[Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}
  
## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
Email: ${data.email}. 
GitHub User: [${data.github}](https://github.com/${data.github}/).`;

}

module.exports = generateMarkdown;
