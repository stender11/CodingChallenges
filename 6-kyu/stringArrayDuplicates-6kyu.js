// ---Instructions:---
// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
// Strings will be lowercase only, no spaces 
// Hint: map through the arrays, each return in the map should be the string split and filtering for each letter that does not equal the one before it then join them up - we had this pattern before! 

// ---P.R.E.P.---
// For example:
// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
// dup(["kelless","keenness"]), ['keles','kenes'])

// ---Submitted Solution:---
function dup(s) {
    return s.map(word => word.split("").filter((letter, ind, arr) => letter !== arr[ind + 1]).join(""))
}

// ---Test cases:---
console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"])); // ['codewars','picaniny','hubububo']
console.log(dup(["abracadabra","allottee","assessee"])); // ['abracadabra','alote','asese']
console.log(dup(["kelless","keenness"])); // ['keles','kenes']
console.log(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"])); // ['Wolomolo','flodoromonlighters','chuchchi']
console.log(dup(["adanac","soonness","toolless","ppellee"])); // ['adanac','sones','toles','pele']
console.log(dup(["callalloo","feelless","heelless"])); // ['calalo','feles','heles']
console.log(dup(["putteellinen","keenness"])); // ['putelinen','kenes']
console.log(dup(["kelless","voorraaddoosspullen","achcha"])); // ['keles','voradospulen','achcha']
