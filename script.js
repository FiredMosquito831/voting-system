const poll = new Map();

poll.set("Bali", new Set(["traveler1", "traveler2"]));
poll.set("Maldives", new Set(["traveler3"]));
poll.set("Santorini", new Set());

function addOption(option) {
  if (!option) {
    return "Option cannot be empty.";
  }
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  const voters = poll.get(option);
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }
  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

function displayResults() {
  let result = "Poll Results:";
  poll.forEach((voters, option) => {
    result += `\n${option}: ${voters.size} votes`;
  });
  return result;
}
