var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function printName(id) {
  for (let person in data) {
    if (person === id) {
      return data[person].name
    }
  }
}

function findName(id) {
  for (let person in data) {
    if (person === id) {
      return data[person].name
    }
  }
}

function printFollowerNames(id) {
  for (let person in data) {
    if (person === id) {
      let followerNames = []
      data[person].follows.forEach(follower => {
        followerNames.push(findName(follower))
      })
    console.log(`${printName(person)} follows: ${followerNames}`)
    }
  }
}

printFollowerNames('f04')
printFollowerNames('f03')