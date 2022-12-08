const generateManager = function (manager) {
  return `
  <figure class="custom-card m-4 ">
  <div class="card-body">
    <h5 class="card-title"><i class="fa-solid fa-paperclip"></i> ${manager.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    <p class="card-text">ID: ${manager.id}</p>
    <p><a href="#" class="card-link">${manager.email}</a></p>
    <p class="card-link">Office: ${manager.officeNum}</p>
  </div>
</figure>`;
}

const generateIntern = function (intern) {
  return `
  <figure class="custom-card m-4 ">
  <div class="card-body">
    <h5 class="card-title"><i class="fa-solid fa-face-smile"></i> ${intern.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
    <p class="card-text">ID: ${intern.id}</p>
    <p><a href="#" class="card-link">${intern.email}</a></p>
    <p class="card-link">School: ${intern.school}</p>
  </div>
</figure>`;
};

const generateEngineer = function (engineer) {
  return `
  <figure class="custom-card m-4 ">
  <div class="card-body">
    <h5 class="card-title"><i class="fa-solid fa-glasses"></i> ${engineer.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
    <p class="card-text">ID: ${engineer.id}</p>
    <p><a href="#" class="card-link">${engineer.email}</a></p>
    <p class="card-link">GitHub: <a href="#" class="card-link">${engineer.github}</a></p>
  </div>
</figure>`;
};
