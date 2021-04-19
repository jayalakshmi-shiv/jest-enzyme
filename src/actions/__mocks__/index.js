
// opt=in for project module in app.test.js
module.exports = {
    ...jest.requireActual('..'),
    __esModule: true,
    getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party')),
}