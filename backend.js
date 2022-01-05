//AJAX Requests

const xhttp = new XMLHttpRequest();

//Get Employees
const getEmployees = () => {
  xhttp.open("GET", "rest_cfg.json", true);
  xhttp.onload = () => {
    const data = JSON.parse(xhttp.responseText);
    let itemList = data.employees.map(
      (res, index) => `
            <tbody>
                <tr>
                <th scope="row">${index + 1}</th>
                    <td>${res.firstName}</td>
                    <td>${res.lastName}</td>
                    <td>${res.age}</td>
                </tr>
            </tbody>`
    );
    const output = `
    <h3 class="py-4">Employees</h3>
    <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
    ${itemList.join("")}
    </table>`;
    document.getElementById("table_container").innerHTML = output;
  };
  return xhttp.send();
};

//Get Customers
const getCustomers = () => {
  xhttp.open("GET", "rest_cfg.json", true);
  xhttp.onload = () => {
    const data = JSON.parse(xhttp.responseText);
    let itemList = data.customers.map(
      (res, index) => `
              <tbody>
                  <tr>
                  <th scope="row">${index + 1}</th>
                      <td>${res.corpName}</td>
                      <td>${res.address}</td>
                  </tr>
              </tbody>`
    );
    const output = `
    <h3 class="py-4">Customers</h3>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">CorpName</th>
        <th scope="col">Address</th>
      </tr>
    </thead>
      ${itemList.join("")}
      </table>`;
    document.getElementById("table_container").innerHTML = output;
  };
  return xhttp.send();
};

//Get invoices
const getInvoices = () => {
  xhttp.open("GET", "rest_cfg.json", true);
  xhttp.onload = () => {
    const data = JSON.parse(xhttp.responseText);
    let itemList = data.invoices.map(
      (res, index) => `
              <tbody>
                  <tr>
                  <th scope="row">${index + 1}</th>
                      <td>${res.invNumber}</td>
                      <td>${res.invSum}</td>
                      <td>${res.currency}</td>
                      <td>${res.corpName}</td>
                  </tr>
              </tbody>`
    );
    const output = `
    <h3 class="py-4">Invoices</h3>
    <table class="table" id="data_table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">InvNumber</th>
        <th scope="col">InvSum</th>
        <th scope="col">Currency</th>
        <th scope="col">CorpName</th>
      </tr>
    </thead>
      ${itemList.join("")}
      </table>`;
    document.getElementById("table_container").innerHTML = output;
  };
  return xhttp.send();
};
