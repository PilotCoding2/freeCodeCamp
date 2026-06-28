const poll = new Map();

const addOption = option => {
    if(!option || option === "") return 'Option cannot be empty.';

    if(!poll.has(option)){
        poll.set(option, new Set());
        return `Option "${option}" added to the poll.`;
    } 

    return `Option "${option}" already exists.`;
}

const vote = (option, voterId) => {
    if(!poll.has(option)) return `Option "${option}" does not exist.`;

    const options = poll.get(option);
    const userHasVoted = options.has(voterId);

    if(userHasVoted){
        return `Voter ${voterId} has already voted for "${option}".`;
    } else {
        options.add(voterId);
        return `Voter ${voterId} voted for "${option}".`;
    }
}

const displayResults = () => {
    let result = 'Poll Results:';
    poll.forEach((value, key) => {
        result += `\n${key}: ${value.size} votes`
    });
    return result;
}

addOption("Turkey");
addOption("Morocco");
addOption("Spain");

vote('Turkey', 'traveler1');
vote('Turkey', 'traveler2');
vote('Morocco', 'traveler3');