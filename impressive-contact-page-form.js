// Code below works with both MooTools 1.2 and 1.3.

// The elements used.
var myForm = document.id('contactForm'),
    myResult = document.id('submissionResult');


// Ajax (integrates with the validator).
new Form.Request(myForm, myResult, {
    requestOptions: {
        'spinnerTarget': myForm
    },
    extraData: { // This is just to make this example work.
        'html': 'Form sent.'
    }
});
