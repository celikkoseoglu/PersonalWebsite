document.getElementById("doIT").onclick = function() {updateView()};

var resultP = document.getElementById("result");
var inputForm = document.getElementById("inputForm");
var alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '@'];

//algorithm with logn complexity to check if the number is a prime.
//proof and pseudocode can be found here: https://en.wikipedia.org/wiki/AKS_primality_test
function isPrimeAKG(n)
{
    if (n <= 3)
        return n > 1;
    else if (n % 2 == 0 || n % 3 == 0)
        return false;
    else
    {
        for (var i = 5; i * i < n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0)
                return false;
        }
        return true;
    }
}

//javascript is dynamically typed. can return both integers and boolean valeus in the same function
function checkInputValidityRegexAdvanced(input)
{
    for (var i = 0; i < input.length; i++) {
        if (alphabetArr.indexOf(input[i]) == -1) {
            return false;
        }
    }
    return true;
}

//remember to check for the overflow!!! - we're allowed to enter 10 integers at most. no need for check overhead.
function getSum(input)
{
    var sum = 0;
    if (checkInputValidityRegexAdvanced(input)) {
        for (var i = 0; i < input.length; i++)
            if(input.charAt(i) == '@')
                sum += 50;
            else
                sum += input.charCodeAt(i) - 96;
    }
    return sum;
}

function getResult(input)
{
    var validityResult = checkInputValidityRegexAdvanced(input);
    if (validityResult == true)
    {
        var sum = getSum(input);
        return "the sum is: " + sum + " and it " + (isPrimeAKG(sum) ? "is " : "is not ") + "a prime";
    }
    else if (validityResult == false)
        return "only enter letters from the English alphabet [a-z]";
    else if (validityResult == -1)
        return "you can enter a maximum of 10 characters";
    else if (validityResult == -2)
        return "the text field is empty";
    else
        return "unknown error. what might this be?";

}

//when the user presses enter key or clicks the calculcate button...
function updateView()
{
    resultP.innerHTML = getResult(inputForm.value);
}