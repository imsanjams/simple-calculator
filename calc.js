$(document).ready(function() {

    //currentNumber stores any numbers clicked
    var currentNumber = "";
    //storedNumber will store the previously clicked number,
    //if set to zero it will parse a number later on in the operator function(see below)
    var storedNumber = 0;
    //operator will be set to any math operator clicked
    var operator = "";

    var previousOperator;

    $("#display").text("0");

    //function to display numbers
    $("#numbers a").not("#clear,#decimal" ).click(function() {

        currentNumber += $(this).text();
        $("#display").text(currentNumber);
        console.log("#numbers", {
            operator,
            storedNumber,
            currentNumber,
            previousOperator
        });
    });

     $("#decimal").click(function() {



if( currentNumber.indexOf(".") === -1) {
  console.log("#numbers", {
      operator,
      storedNumber,
      currentNumber,
      previousOperator
  });
       currentNumber += $(this).text();
       $("#display").text(currentNumber);

     }
     })

    // function to allow use of arithmatic operators
    $("#operators a").not("#equals").click(function() {
        operator = $(this).text();

        if(previousOperator){

        if (previousOperator === "+") {
            storedNumber = storedNumber + parseFloat(currentNumber, 10);

        } else if (previousOperator === "-") {
            storedNumber = storedNumber - parseFloat(currentNumber, 10);

        } else if (previousOperator === "/") {
            storedNumber = storedNumber / parseFloat(currentNumber, 10);

        } else if (previousOperator === "*") {
            storedNumber = storedNumber * parseFloat(currentNumber, 10);
        }

        // addTogether = storedNumber + currentNumber;
        console.log("#operators", {
            operator,
            storedNumber,
            currentNumber,
            previousOperator
        });
      }
      else {
          storedNumber = parseFloat(currentNumber, 10) ;
      }
      $("#display").text(operator);
      //parse the string being added to storedNumber to convert to number
        // storedNumber = parseFloat(currentNumber, 10) ;
      currentNumber = "";

      previousOperator = operator;
    });

    //function to clear input
    $("#clear").click(function() {
        console.log("#clear", {
            operator,
            storedNumber,
            currentNumber
        });
        currentNumber = "";
        $("#display").text("0");
        storedNumber = 0;
    })

    //function to output equals sum to display
    $("#equals").click(function() {

        if (operator === "+") {
            currentNumber = storedNumber + parseFloat(currentNumber, 10);

        } else if (operator === "-") {
            currentNumber = storedNumber - parseFloat(currentNumber, 10);

        } else if (operator === "/") {
            currentNumber = storedNumber / parseFloat(currentNumber, 10);

        } else if (operator === "*") {
            currentNumber = storedNumber * parseFloat(currentNumber, 10);
        }
        $("#display").text(currentNumber);
        storedNumber = parseFloat(currentNumber, 10);

        previousOperator = ""
        //console.log with an object allows all variables to be outputted if they are used(ES6). Not specific to console.log
        console.log("#equals", {
            operator,
            storedNumber,
            currentNumber,
            previousOperator
        });
    });

    //   function to limit input number beginning with multiple zero's
     $("#zero").click(function() {
       var zero = '';
       for (var i = 0; i < currentNumber.length; i++) {
         if (currentNumber[i] === "0") {
           zero++;
         }
       }
       if (zero > 0) {
         currentNumber = parseFloat(currentNumber, 10);
         $("#display").text(currentNumber);
       } else {
         currentNumber += "0";
         $("#display").text(currentNumber);
       }
     });
});
