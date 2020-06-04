function generateMarkdown(data) {
  return `
# ## Project Title
${answers.projectTitle}
## Project Description
${answers.Description}
## Table of Contents:
[Installation](#installation)
[Usage](#usage)
[Credits](#credits)
[License](#license)
## Installation
## Usage
[Provide instructions and examples to use.]
## Credits
[List your collaborators.]
## License
${answers.License}
## Badges
${answers.totalStars}
## GitHub Email
${answers.email}
## GitHub Username
${answers.gitUsername}
## Avatar URL
![avatarurl](${answers.avatar_url})

`;
}

module.exports = generateMarkdown;
