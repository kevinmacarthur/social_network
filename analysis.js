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

function findName(id) {
  for (let person in data) {
    if (person === id) {
      return data[person].name
    }
  }
}

function findFollower(id) {
  for (let person in data) {
    if (person === id) {
      return data[person]
    }
  }
}

function findFollowerNames(id) {
  let followerNames = []
  for (let person in data) {
    if (person === id) {
      data[person].follows.forEach(follower => {
        followerNames.push(findName(follower))
      })
    }
  }
  return followerNames
}

function findFollowedBy(id) {
  let followedBy = []
  for (let person in data) {
    data[person].follows.forEach(follower => {
      if (follower === id) {
        followedBy.push(data[person].name)
      }
    })
  }
  return followedBy
}

function printAllFollowers() {
  for (let person in data) {
    console.log(`${data[person].name} follows ${findFollowerNames(person)} AND is followed by: ${findFollowedBy(person)}`)
  }
}

function findMostFollows() {
  let mostFollows = 0
  for (let person in data) {
    if (findFollowerNames(person).length > mostFollows) {
      mostFollows = data[person].follows.length
    }
  }
  return mostFollows
}

function findMostFollowsName(num) {
  let mostFollowers = []
  for (let person in data) {
    if (findFollowerNames(person).length === num) {
      mostFollowers.push(data[person].name)
    }
  }
  console.log(`${mostFollowers} have the most followers (${num})`)
}
// findMostFollowsName(findMostFollows())

function findMostFollowers() {
  let mostFollowers = 0
  for (let person in data) {
    if (findFollowedBy(person).length > mostFollowers) {
      mostFollowers = findFollowedBy(person).length
    }
  }
  return mostFollowers
}

function findMostFollowersName(num) {
  let mostFollowers = []
  for (let person in data) {
    if (findFollowedBy(person).length === num) {
      mostFollowers.push(data[person].name)
    }
  }
  console.log(`${mostFollowers} have the most followers (${num})`)
}

// findMostFollowersName(findMostFollowers())

function findFollowsOver30(id) {
  let followerNames = []
  for (let person in data) {
    if (person === id) {
      data[person].follows.forEach(follower => {
        if (findFollower(follower).age > 30)
        followerNames.push(findFollower(follower).name)
      })
    }
  }
  return followerNames
}

//OVER 30 CLEAN THIS UP
function findFollowedByOver30(id) {
  let followedBy = []
  for (let person in data) {
    data[person].follows.forEach(follower => {
      if (follower === id && data[person].age > 30) {
        followedBy.push(data[person].name)
      }
    })
  }
  return followedBy
}

function findMostFollowsOver30() {
  let mostFollows = 0
  for (let person in data) {
    if (findFollowsOver30(person).length > mostFollows) {
      mostFollows = findFollowsOver30(person).length
    }
  }
  return mostFollows
}

function findMostFollowsNameOver30(num) {
  let mostFollowers = []
  for (let person in data) {
    if (findFollowsOver30(person).length === num) {
      mostFollowers.push(data[person].name)
    }
  }
  console.log(`${mostFollowers} follow the most people over 30 (${num})`)
}

// findMostFollowsNameOver30(findMostFollowsOver30())

function findMostFollowersOver30() {
  let mostFollowers = 0
  for (let person in data) {
    if (findFollowedByOver30(person).length > mostFollowers) {
      mostFollowers = findFollowedByOver30(person).length
    }
  }
  return mostFollowers
}

function findMostFollowersNameOver30(num) {
  let mostFollowers = []
  for (let person in data) {
    if (findFollowedByOver30(person).length === num) {
      mostFollowers.push(data[person].name)
    }
  }
  console.log(`${mostFollowers} have the most followers over 30 (${num})`)
}

// findMostFollowersNameOver30(findMostFollowersOver30())
