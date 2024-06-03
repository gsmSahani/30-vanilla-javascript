const people = [
    {name: 'Gautam',year:1998},
    {name: 'Shambhu',year:1986},
    {name: 'Mira',year:1982},
    {name: 'Sumit',year:2005},
];

const comments = [
    {text:"Amazing",Id: 523423},
    {text:"Maza ",Id: 523684},
    {text:"You are the best",Id: 203594},
    {text:"Biryani lover",Id: 785692},
    {text:"Chaang lover",Id: 245853}
];

// some and every check
// Array.prototype.some()
// const isAdult = people.some(function(person){
//     const currentYear = (new Date()).getFullYear();
//     if(currentYear - person.year >= 19){
//         return true;
//     } 
// });
// console.log(isAdult);

// const isAdult = people.some(person=>((new Date()).getFullYear())-person.year >= 19);
// console.log(isAdult);

// const allAdults = people.every(person => (new Date().getFullYear())-person.year >= 19);
// console.log(allAdults);


// const comment = comments.find(comment => comment.id === 523684);
// console.log(comment);



