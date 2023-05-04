const team = generateTeam => { 
  
    const managerHTML = manager => {
    return `
    <h3>${manager.getName()}</h3>
  <ul>
    <li>${manager.getId()}</li>
    <li>${manager.getEmail()}</li>
    <li>${manager.getOfficeNumber()}</li>
  </ul>`;
    }
  
  const engineerHTML = engineer => {
    return `
    <h3>${engineer.getName()}</h3>321
    
  <ul>
    <li>${engineer.getId()}</li>
    <li>${engineer.getEmail()}</li>
    <li>${engineer.getGithub()}</li>
  </ul>`;
  }
  
  const internHTML = intern => {
  return `
  <h3>${intern.getName()}</h3>
<ul>
  <li>${intern.getId()}</li>
  <li>${intern.getEmail()}</li>
  <li>${intern.getSchool()}</li>
</ul>
</div> `;
  }
  
  let managerArray = [];
  let engineerArray = [];
  let internArray = [];
  
  
  
  managerArray = generateTeam
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => managerHTML(manager));
  
  engineerArray = generateTeam
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => engineerHTML(engineer));
  
  internArray = generateTeam
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => internHTML(intern));
  
  const html = [...managerArray, ...engineerArray, ...internArray].join("");
  return html;
  
  }
  
  module.exports = generateTeam => {
    const html = [];
  
    html.push(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Generator</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <div class="content">
        <div class="header">
          <h2 id="headerText">Team Profile Generator (yuh)</h2>
        </div>
        <div class="body-content">
          ${team(generateTeam)}
        </div>
      </div>
      
    </body>
    </html>`);
  
    return html.join("");
  }
  
  
  
  