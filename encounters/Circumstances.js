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
    'has spotted the party',
    'has not spotted the party'
];

/**
 * 1d4 spotting
 */
const spottingD4 = [
    `has spotted the party and has been spotted by the party`,
    `has spotted the party but the party doesn't know it`,
    `has not spotted the party, but has been spotted by the party`,
    `no one is spotted by anyone`
];

export { directions, motivations, spottingD2, spottingD4 }
