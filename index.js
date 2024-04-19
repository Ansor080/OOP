let car = {
    name: "Dodge",
    age: 2018,
    hp: 800,
    color: "black",
    model: "Demon"
}

let car_pasport = {
    accident: false,
    data: true,
    documentation: true
}

let new_car = Object.assign({}, car, {car_pasport})

let keys = Object.keys(mergedObject);

let values = Object.values(mergedObject);

let km = keys.map((key, index) => [key, values[index]]);

let types = {
    string: [],
    number: [],
    boolean: [],
    object: []
}

km.forEach(([key, value]) => {
    if (type === "string") {
        types.string.push(value);
    } else if (type === "number") {
        types.number.push(value);
    }
});

console.log(
    new_car,
    keys,
    values,
    km,
    types
);