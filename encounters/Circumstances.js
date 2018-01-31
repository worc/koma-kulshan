/**
 * d6 relative directions
 */
const directions = [
    'ahead',
    'behind',
    'above',
    'below',
    'to the left of',
    'to the right of'
];

/**
 * 1d8 motivations
 */
const motivations = [
    'harm the party',
    'take someone from the party',
    'take money from the party',
    'extract information from the party',
    'observe the party intently',
    'ignore the party',
    'ask the party for help',
    'offer help to the party'
];

/**
 * 1d2 spotting
 */
const spottingD2 = [
    'the party is spotted',
    'the party is not spotted'
];

/**
 * 1d4 spotting
 */
const spottingD4 = [
    `the party is spotted and they've been spotted by the party`,
    `the party is spotted and the party doesn't know it`,
    `the party is not spotted, but they've been spotted by the party`,
    `no one is spotted by anyone`
];

export { directions, motivations, spottingD2, spottingD4 }
