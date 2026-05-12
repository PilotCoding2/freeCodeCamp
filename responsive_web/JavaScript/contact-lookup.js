let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop){
  const contactsCopy = contacts;
    for(let i = 0; i < contactsCopy.length; i++){
      
        if(name === contactsCopy[i].firstName){
          if(prop in contactsCopy[i]){
            return contactsCopy[i][prop];
          } else {
            return "No such property";
          }
        } 

  }
  return "No such contact"
}