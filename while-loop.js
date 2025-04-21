function countDown(n) {
    while (n > 0) {
        if (n % 5 === 0) {
            console.log('Boom!');
        } else if (n % 2 === 0) {
            console.log('Even')
        } else {
            console.log(n);
        }
        n--;
    }
}

countDown(7)
