Describe: pigLatin()

Test:"It will return an empty string if no input is entered"
Code: pigLatin();
Expected Output:""

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test:"If the word begins with a consonant, it will move all the consecutive consonants to the end of the word."
Code:pigLatin("cat");
Expected Output:"atc"

Test: "It will add "ay" to the end of words that begin with a consonant."
Code: pigLatin("cat");
Expected Output: "atcay"

Test: "If the word beings with 'qu' it will move to the end of the word."
Code: pigLatin("quiet")
Expected Output: "ietquay"

Test: "If a word includes 'qu' the first consonant will move to the end of the word."
Code: pigLatin("squeal")
Expected Output: "quealsay."



