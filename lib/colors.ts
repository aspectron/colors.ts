//this map from nodeJS/color.js
const _codes: { [key: string]: [number, number] } = {
    reset: [0, 0],

    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],

    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    gray: [90, 39],
    grey: [90, 39],

    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
};
const _default_theme:Colors.Theme = {
    verbose: "white",
    info: "green",
    debug: "blue",
    error: "red",
    // custom
    custom0: "white",
    custom1: "white",
    custom2: "white",
    custom3: "white",
    custom4: "white",
    custom5: "white",
    custom6: "white",
    custom7: "white",
    custom8: "white",
    custom9: "white",
}
let _enable:boolean = true;
let _theme:Colors.Theme = _default_theme

function codesInit() {
    for (const key in _codes) {
        let v = _codes[key]
        if (v == null)
            continue;
        let open = `\u001b[${v[0]}m`;
        let close = `\u001b[${v[1]}m`;
        Object.defineProperty(String.prototype, key, {
            get: function (): string {
                if(_enable)
                    return open + this + close;
                else
                    return this;
            },
            enumerable: false,
            configurable: false
        })
    }
}

function themeInit() {
    for (const key in _theme) {
        let _key = key;
        Object.defineProperty(String.prototype, key, {
            get: function (): string {
                if (_enable) {
                    let s = _theme[key];
                    if (s == null)
                        return this;
                    let v = _codes[s];
                    if (v == null)
                        return this;
                    return `\u001b[${v[0]}m${this}\u001b[${v[1]}m`;
                }
                return this;
            },
            enumerable: false,
            configurable: false
        })
    }
}

codesInit();
themeInit();

export function Colors(color: string, value: string):string
{
    if(_enable)
    {
        var s = _theme[color]
        if(s != null)
            color = s;
        var val = _codes[color];
        if(val != null)
            return `\u001b[${val[0]}m${value}\u001b[${val[1]}m`;
    }
    return value;
}
export namespace Colors {
    export interface Theme {
        verbose?: string;
        info?: string;
        debug?: string;
        error?: string;

        custom0?:string;
        custom1?:string;
        custom2?:string;
        custom3?:string;
        custom4?:string;
        custom5?:string;
        custom6?:string;
        custom7?:string;
        custom8?:string;
        custom9?:string;
    }
    export function enable(value: boolean = true) {
        _enable = value;
    }
    export function theme(theme: Theme = _default_theme) {
        _theme = theme;
    }
}

