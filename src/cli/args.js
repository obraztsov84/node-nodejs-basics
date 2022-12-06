const parseArgs = () => {
    let args = process.argv
    const args1 = args[args.indexOf('--some-arg') + 1];
    const args2 = args[args.indexOf('--arg2') + 1];
    console.log('propName is ' + args1 + 'prop2Name is ' + args2);
};

parseArgs();