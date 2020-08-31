const randomizer = (min = 0, max) => {
    const _min = Math.ceil(min);
    const _max = Math.floor(max.length);

    console.log(max, 'max')

    return Math.floor(Math.random() * (_max - _min)) + min;
}

export default randomizer;