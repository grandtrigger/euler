function list(names) {
    return names.map(name => typeof name === 'string' ? name : name.name).reduce((acc, current, index, array) => {
        if (index === 0) return acc + current;
        else if (index === (array.length - 1)) return `${acc} & ${current}`;
        else return `${acc}, ${current}`;
    }, '');
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))