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
  let mostFollowsName = ""
  let mostFollows = 0
  for (let person in data) {
    if (findFollowerNames(person).length > mostFollows) {
      mostFollows = data[person].follows.length
      mostFollowsName = data[person].name
    }
  }
  console.log(`${mostFollowsName} follows the most people (${mostFollows})`)
}

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

findMostFollows()
findMostFollowersName(findMostFollowers())