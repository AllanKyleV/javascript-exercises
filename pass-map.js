// Turn password to *

function hidePassword(str) {
    const showLastTwo = str.slice(-2);
    const arr = str.slice(0, -2).split('');
    const hide = arr.map(() => '*').join('');
    return hide + showLastTwo;
}
console.log(hidePassword('Password'));
console.log('--------------------');

function hidePass(str) {
    let hide = '';
    const showLastTwo = str.slice(-2);
    for (let i = 0; i < str.slice(0, -2).length; i++) {
        hide += '*';
    }
    return hide + showLastTwo;
}
console.log(hidePass('Password'));
console.log('--------------------')

function hideP(str) {
    return '*'.repeat(str.slice(0, -2).length) + str.slice(-2);
}
console.log(hideP('Password'));