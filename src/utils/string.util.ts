export default class StringUtils {
    static matchRule(str: string, rule: string) {
        const escapeRegex = (str: string) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
        return new RegExp('^' + rule.split('*').map(escapeRegex).join('.*') + '$').test(str);
    }
}
