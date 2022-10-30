const fs = require('fs');

function createHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <title>Team</title>
    </head>
    <body>
        <header>
            <div class="jumbotron jumbotron-fluid ">
                <div class="container">
                  <h1 class="display-4">My Team</h1>
                </div>
              </div>
        </header>
        <div class="container-fluid d-flex justify-content-center">
        ${data.map((employee) => {
          return `<div class="card m-4" style="width: 18rem;">
          <div class="card-header bg-primary">
          <h5 class="card-title pl-3 pt-2 custom-h5">${employee.name}</h5>
          <h6 class="custom-h6 card-subtitle mb-2 pl-3 pt-2">${employee.officeNumber ? `<i class="fa-solid fa-mug-hot"></i>` : ''} ${employee.getGithub ? `<i class="fa-sharp fa-solid fa-glasses"></i>` : ''} ${employee.getSchool ? `<i class="fa-solid fa-user-graduate"></i>` : ''} ${employee.getRole()}</h6>
          </div>
            <ul class="list-group list-group-flush mx-3 my-3 border bg-secondary">
              <li class="list-group-item">ID: ${employee.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
              ${
                employee.getOfficeNumber
                  ? `<li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>`
                  : ""
              }
              ${
                employee.getGithub
                  ? `<li class="list-group-item">GitHub: <a href="${employee.getGithub()}">${employee.getGithub()}</a></li>`
                  : ""
              }
              ${
                employee.getSchool
                  ? `<li class="list-group-item">School: ${employee.getSchool()}</li>`
                  : ""
              }
            </ul>
          </div>`
        }).join('')}
    
        </div>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </html>`
}

function writeToFile(fileName, data) {
    const team = createHTML(data);
    fs.writeFile(fileName, team, (error) => {
        error ? console.log(error) : console.log('Success!');
    });
}

module.exports = writeToFile;