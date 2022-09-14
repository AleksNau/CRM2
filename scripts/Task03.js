const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (massive,prefix) => {
    const officialName = massive;
    const preName = prefix;

    for (i = 0;i <officialName.length; i++) {
        officialName[i] = preName + " " + officialName[i];
    }

    return officialName;
}

const fullName = addPrefix(names,"Mr");
console.log(fullName);