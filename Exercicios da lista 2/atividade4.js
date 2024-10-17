function ehPalindromo(str) {
    const normalizedStr = str.replace(/\s+/g, '').toLowerCase();
    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}

console.log(ehPalindromo("A man a plan a canal Panama")); 
console.log(ehPalindromo("Hello"));
