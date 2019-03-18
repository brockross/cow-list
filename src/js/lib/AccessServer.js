import $ from 'jquery';


const methods = {
  getAllCows : (optionsObj, callback) => { //the passed-in callback should update the state of the cow list with the list of cows returned by the server
    $.get('http://localhost:3000/api/cows', {
      placeholder: 'placeholder text'
    })
      .done((data) => {
        callback(data);
      })
      .fail((error) => {
        console.log(`error on GET request: `, error)
      })
  },

  postNewCow: (optionsObj, callback) => { //the passed-in callback should be a server GET request, to update the page with the updated list of cows from the DB
    console.log(`the passed in options object looks like: `, optionsObj);
    $.post('http://localhost:3000/api/cows', JSON.stringify(optionsObj))
      .done((data) => {
        console.log(`Server POST  successful. Response data: `, data);
        callback();
      })
      .fail((error) => {
        console.log(`error on POST request: `, error);
      })
  },

  postData: (dataObj) => {
  // Default options are marked with *
    return fetch('http://localhost:3000/api/cows', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(dataObj), // body data type must match "Content-Type" header
    })// parses response to JSON
  }
}



// function postData(dataObj) {
//   // Default options are marked with *
//     return fetch('http://localhost:3000/api/cows', {
//         method: "POST", // *GET, POST, PUT, DELETE, etc.
//         headers: {
//             "Content-Type": "application/json",
//             // "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: JSON.stringify(dataObj), // body data type must match "Content-Type" header
//     })
//     .then(response => response.json()); // parses response to JSON
// }

// postData(`http://example.com/answer`, {answer: 42})
//   .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
//   .catch(error => console.error(error));


// const methods = {
//   getAllCows : (optionsObj, callback) => { //the passed-in callback should update the state of the cow list with the list of cows returned by the server
//     $.ajax({
//       type: 'GET',
//       url: 'http://localhost:3000/api/cows',
//       dataType: 'application/json',
//       data: JSON.stringify(optionsObj),
//       success: callback,
//       error: (err) => {
//         console.log(`error making GET request: `, err);
//       }
//     })
//   },

//   postNewCow: (optionsObj, callback) => { //the passed-in callback should be a server GET request, to update the page with the updated list of cows from the DB
//     console.log(`the passed in options object looks like: `, optionsObj);
//     $.post('http://localhost:3000/api/cows', JSON.stringify(optionsObj))
//       .done((data) => {
//         console.log(`Server POST  successful. Response data: `, data);
//         callback();
//       })
//       .fail((error) => {
//         console.log(`error on POST request: `, error);
//       })
//   }

// }

export default methods;