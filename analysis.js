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

function findFollowsName(id) {
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
    console.log(`${data[person].name} follows ${findFollowsName(person)} AND is followed by: ${findFollowedBy(person)}`)
  }
}

// printAllFollowers()

function followsMostPeople() {
  let mostFollows = 0
  for (let person in data) {
    if (findFollowsName(person).length > mostFollows) {
      mostFollows = data[person].follows.length
    }
  }
  return mostFollows
}

function followsMostPeopleName(num) {
  let mostFollowers = []
  for (let person in data) {
    if (findFollowsName(person).length === num) {
      mostFollowers.push(data[person].name)
    }
  }
  console.log(`${mostFollowers} have the most followers (${num})`)
}
// followsMostPeopleName(followsMostPeople())

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

//OVER 30 CLEAN THIS UP

var array_helper = {
    filter: function(list, filter)
    {
        var matches = [];
        for(var x=0; x<list .length; x++)
        {
            if(filter(list[x]))
                matches.push(list[x]);
        }
        return matches;
    }
};

function over30Follows(id) {
  let values = array_helper.filter(data[id].follows, function(item){
  return findFollower(item).age > 30
})
  return values
}

function printNames(arr) {
  arr.forEach(name => {
    console.log(findFollower(name).name)
  })
}

function followsMostPeopleOver30() {
  let mostFollows = 0
  for (let person in data) {
    if (over30Follows(person).length > mostFollows) {
      mostFollows = over30Follows(person).length
    }
  }
  return mostFollows
}

function followsMostPeopleNameOver30(num) {
  let mostFollowers = []
  for (let person in data) {
    if (over30Follows(person).length === num) {
      mostFollowers.push(data[person].name)
    }
  }
  console.log(`${mostFollowers} follow the most people over 30 (${num})`)
}

followsMostPeopleNameOver30(followsMostPeopleOver30())

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

// FIND PEOPLE WHO FOLLOW SOMEONE WHO DOESN'T FOLLOW THEM BACK

function findNotFollowedBack(id) {
    let follows = findFollowsName(id)
    let followedBy = findFollowedBy(id)
    let followedBack = true
    follows.forEach(name => {
      if (followedBack) {
        let foundInFollowedBy = false
        followedBy.forEach(follower => {
          if (name === follower) {
            foundInFollowedBy = true
            return
          }
        })
        if (!foundInFollowedBy) {
          console.log(`${name} does not follow ${findName(id)} back`)
          followedBack = false
        }
      }
    })
  return followedBack
}

function notFollowedBack() {
  let people = []
  for (let person in data) {
    if (!findNotFollowedBack(person)) {
      people.push(data[person].name)
    }
  }
  console.log(`${people} follow someone who doesn't follow them back`)
}

// notFollowedBack()
