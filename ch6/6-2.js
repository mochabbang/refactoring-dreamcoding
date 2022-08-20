/*
    재사용성이 가능한 함수의 경우에는 함수를 유지해도 되나, 
    일회성이나 너무 잘게 잘라놓은 함수에 대해서는 인라인 구성하는 편이 좋다!
 */

// 예제 1
export function rating(driver) {
    return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
    const result = [];

    result.push(['name', customer.name]);
    result.push(['location', customer.location]);

    return result;
}
