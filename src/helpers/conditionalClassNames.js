export function conditionalClassNames(...args) {
    return args.filter(Boolean).join(' ');
}