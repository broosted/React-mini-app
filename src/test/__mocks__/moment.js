//using mocks we forced moment to create a fixed moment of time through this below
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
}