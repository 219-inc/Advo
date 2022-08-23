

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

/*
      Letter to Number Mapping Table

    NUMBER              EQUIVALENT LETTER
    1                       A, J, S
    2                       B, K, T
    3                       C, L, U
    4                       D, M, V
    5                       E, N, W
    6                       F, O, X
    7                       G, P, Y
    8                       H, Q, Z
    9                       I, R
*/

//function to check if the given letter is a vowel or not
function isVowel(letter) {
    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
        return true;
    } else {
        return false;
    }
}

/* It takes a letter and returns a number based on the letter */
class Letter{
    /**
     * The constructor function takes a letter as an argument and sets the letter property to the
     * lowercase version of the letter. It then calls the getNumber function and sets the number
     * property to the result
     * @param letter - The letter that the user wants to convert to a number.
     */
    constructor(letter){
        this.letter = letter.toLowerCase();
        this.number = this.getNumber();
    }

    /**
     * It returns a number based on the letter that is passed to it
     * @returns The number associated with the letter.
     */
    getNumber(){
        switch(this.letter){
            case 'a':
            case 'j':
            case 's':
                return 1;
            case 'b':
            case 'k':
            case 't':
                return 2;
            case 'c':
            case 'l':
            case 'u':
                return 3;
            case 'd':
            case 'm':
            case 'v':
                return 4;
            case 'e':
            case 'n':
            case 'w':
                return 5;
            case 'f':
            case 'o':
            case 'x':
                return 6;
            case 'g':
            case 'p':
            case 'y':
                return 7;
            case 'h':
            case 'q':
            case 'z':
                return 8;
            case 'i':
            case 'r':
                return 9;
            default:
                return 0;
        }
    }
}

class Numerology{
    /**
     * The constructor function is a special function that is used to create and initialize an object
     * created within a class
     * @param username - The username of the user.
     * @param birthdate - A Date object representing the user's birthdate.
     */

    /* Private variables. */
    #username;
    #birthdate;

    constructor(username, birthdate){
        /* Setting the private variables username and birthdate to the values passed to the constructor
        function. */
        this.#username = username.toLowerCase();
        this.#birthdate = birthdate;

        /* Calling the getNameNumber, getSoulNumber, and getPersonalityNumber functions and setting the
        nameNumber, soulNumber, and personalityNumber properties to the result of the function. */
        this.nameNumber = this.getNameNumber();
        this.soulNumber = this.getSoulNumber();
        this.personalityNumber = this.getPersonalityNumber();
    }

    /**
     * It takes the username, then loops through each letter, converts it to
     * a number, and adds it to the sum
     * @returns The sum of the numbers of the letters in the username.
     */
    getNameNumber(){
        let sum = 0;

        /* Converting the username to lowercase. */
        let name = this.#username.toLowerCase();

        /* Looping through each letter in the username and adding the number associated with the letter
        to the sum. */

        for(let i = 0; i < name.length; i++){
            sum += new Letter(name[i]).getNumber();
        }

        /* A loop that adds the digits of the sum until the sum becomes a single digit. */
        while(sum > 9){
            let temp = 0;
            while(sum > 0){
                temp += sum % 10;
                sum = Math.floor(sum / 10);
            }
            sum = temp;
        }

        return sum;
    }

    /**
     * It takes the username, then iterates through each character in the
     * username. If the character is a vowel, it adds the number of that vowel to the sum. Then, it
     * checks if the sum is greater than 9. If it is, it adds the digits of the sum together until the
     * sum is less than 10
     * @returns The sum of the numbers of the vowels in the username.
     */
    getSoulNumber(){
        let sum = 0;
        let name = this.#username;

        /* Iterating through each character in the username and checking if it is a vowel. If it is, it
        adds the number associated with the vowel to the sum. */
        for(let i = 0; i < name.length; i++){
            if(isVowel(name[i])){
                sum += new Letter(name[i]).getNumber();
            }
        }

        /* Adding the digits of the sum until the sum becomes a single digit. */
        while(sum > 9){
            let temp = 0;
            while(sum > 0){
                temp += sum % 10;
                sum = Math.floor(sum / 10);
            }
            sum = temp;
        }

        return sum;
    }

    /**
     * It iterates through each character in the username and adds the number associated with the
     * consonant to the sum. Then, it adds the digits of the sum until the sum becomes a single digit
     * @returns The personality number is being returned.
     */
    getPersonalityNumber(){
        let sum = 0;
        let name = this.#username;

        /* Iterating through each character in the username and adding the number associated with the
        consonant to the sum. */
        for(let i = 0; i < name.length; i++){
            if(!isVowel(name[i])){
                sum += new Letter(name[i]).getNumber();
            }
        }

        /* Adding the digits of the sum until the sum becomes a single digit. */
        while(sum > 9){
            let temp = 0;
            while(sum > 0){
                temp += sum % 10;
                sum = Math.floor(sum / 10);
            }
            sum = temp;
        }

        return sum;
    }
}

exports.handler = async (event) => {
    let {username, birthdate} = event.queryStringParameters;

    /* Creating a new Numerology object. */
    let numerology = new Numerology(username, birthdate);

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        }, 
        body: JSON.stringify(numerology),
    };
};
