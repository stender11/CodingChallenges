// ---Instructions:---
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"
// Hint: Use replace on the parts of the url you want gone. You can replace with an empty string ''. Then split the string using . as the seperator and take the first part [0]

// ---P.R.E.P.---
// take in a string that is a url, only strings as arguments
// returns only the domain name from the url as a string
// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// ---Submitted Solution:---
function domainName(url) {
    return url.replace("https", "").replace("http", "").replace("://", "").replace("www.", "").split(".")[0]
}

// ---Test cases:---
console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("http://www.zombie-bites.com"))
console.log(domainName("https://www.cnet.com"))
