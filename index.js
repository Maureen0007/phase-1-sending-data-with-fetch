
function submitData(name, email){
    return fetch('http://localhost:3000/users', {
         method: 'POST',
         headers: {
             'content-type': 'application/json',
             Accept: 'application/json',
         },
         body: JSON.stringify({
             name: name,
             email: email
         })
 
     })
     .then(res => res.json())
     .then(data => document.body.innerHTML = data.id)
     .catch(err => document.body.append(err.message))
  }
 
 console.log(submitData("steve", "steve@steve.com"))