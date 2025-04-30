function param(a) {
    if ((a % 3 == 0) && (a % 5 == 0)) {
        a = "Fizz"
    } else if (a % 3 == 0) {
        a = "Buzz"
    } else if (a % 5 == 0) {
        a = "FizzBuzz"
    }
    return a
}

a = 1
list = []
while (a < 100) {
    list.push(param(a));
    a += 1;
}
    





