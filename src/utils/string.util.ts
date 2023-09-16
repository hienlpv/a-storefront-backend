export default class StringUtils {
    static escapeRegex = (str: string) => str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');

    static matchRule(str: string, rule: string) {
        return new RegExp(`^${  rule.split('*').map(StringUtils.escapeRegex).join('.*')  }$`).test(str);
    }
}
