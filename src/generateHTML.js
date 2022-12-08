// Manager card
const generateManager = function (manager) {
  return `<figure class="custom-card m-4 ">
  <div class="card-body">
    <h5 class="card-title"><i class="fa-solid fa-gear"></i> ${manager.name}</h5>
    <h6 class="card-subtitle mb-3 custom-text-muted">Manager</h6>
  <hr>
    <p class="card-text mb-2">ID: ${manager.id}</p>
    <p><a href="mailto:${manager.email}" class="card-text mb-0">${manager.email}</a></p>
    <p class="card-text mb-0">Office: ${manager.officeNum}</p>
  </div>
</figure>`
}

const generateIntern = function (intern) {
  return `<figure class="custom-card m-4 ">
  <div class="card-body">
    <h5 class="card-title"><i class="fa-solid fa-face-smile"></i> ${intern.name}</h5>
    <h6 class="card-subtitle mb-3 custom-text-muted">Intern</h6>
    <hr>
    <p class="card-text mb-2">ID: ${intern.id}</p>
    <p><a href="mailto:${intern.email}" class="card-link mb-0">${intern.email}</a></p>
    <p class="card-link mb-0">School: ${intern.school}</p>
  </div>
</figure>`
};

const generateEngineer = function (engineer) {
  return `<figure class="custom-card m-4 ">
  <div class="card-body">
    <h5 class="card-title"><i class="fa-solid fa-glasses"></i> ${engineer.name}</h5>
    <h6 class="card-subtitle mb-3 custom-text-muted">Engineer</h6>
    <hr>
    <p class="card-text mb-2">ID: ${engineer.id}</p>
    <p><a href="mailto:${engineer.email}" class="card-text mb-0">${engineer.email}</a></p>
    <p class="card-text mb-0">GitHub: <a href="https://github.com/${engineer.github}" class="card-link">${engineer.github}</a></p>
  </div>
</figure>`
};

generateHTML = (data) => {
    totalTeamArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.constructor.name;

        if(role === 'Manager') {
            const makeManager = generateManager(employee);

            totalTeamArray.push(makeManager)
        }
        if(role === 'Intern') {
            const makeIntern = generateIntern(employee);

            totalTeamArray.push(makeIntern)
        }
        if(role === 'Engineer') {
            const makeEngineer = generateEngineer(employee);

            totalTeamArray.push(makeEngineer)
        }
    }

    const teamCards = totalTeamArray.join('');
    // const companyName = xyz;
    const makeTeam = makeTeamPage(teamCards);
    return makeTeam;
}

const makeTeamPage = function (teamCards) {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link rel="stylesheet" href="./style.css" />
    <link rel="icon" href="../images/briefcase-solid.svg">
    <title>My Team</title>
  </head>
  <body>
    <nav class="custom-navbar">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">My Team</span>
      </div>
    </nav>
    <main class="d-flex flex-wrap justify-content-center">
        ${teamCards}
    </main>
  </body>
</html>`
}

module.exports = generateHTML;