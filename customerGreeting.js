var customerData = {
    'Joe': {
      visits: 1
    },
    'Carol': {
      visits: 2
    },
    'Howard': {
      visits: 3,
    },
    'Carrie': {
      visits: 4
    }
  };
  
  function greetCustomer(firstName) {
    //create variables to hold the greetings, using template literals
    let newCustomerGreeting = 'Welcome! Is this your first time?';
    let oneVisitGreeting = `Welcome back, ${firstName}! We\'re glad you liked us the first time!`;
    let multivisitGreeting = `Welcome back, ${firstName}! So glad to see you again!`;
    
    //set default to assume the visitor is new
    let result = newCustomerGreeting;

    //check if customer exists and if so, assign the proper response
    for (let name in customerData){        
        if(firstName === name){   
            result = (customerData[firstName].visits >= 2) ? multivisitGreeting : oneVisitGreeting;
        }
    }
    return result;
  }
  console.log(greetCustomer('Joe'));
  