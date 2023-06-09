interface Options {
    elementDelimiter: string;
    modifierDelimiter: string;
    namespace: string | string[];
    namespaceDelimiter: string;
}

type PartialOptions = Partial<Options>;

const defaultOptions: Options = {
    elementDelimiter: '__',
    modifierDelimiter: '--',
    namespace: '',
    namespaceDelimiter: '-',
};

export function setup({ elementDelimiter, modifierDelimiter, namespace, namespaceDelimiter }: PartialOptions) {
    if (elementDelimiter) {
        defaultOptions.elementDelimiter = elementDelimiter;
    }
    if (modifierDelimiter) {
        defaultOptions.modifierDelimiter = modifierDelimiter;
    }
    if (namespace) {
        defaultOptions.namespace = namespace;
    }
    if (namespaceDelimiter) {
        defaultOptions.namespaceDelimiter = namespaceDelimiter;
    }
}

interface Modifiers {
    [key: string]: boolean | string | null | undefined;
}

export default function bem(block: string, options: PartialOptions = {}) {
    const { elementDelimiter, modifierDelimiter, namespace, namespaceDelimiter } = {
        ...defaultOptions,
        ...options,
    };

    const namespaces = ([] as string[])
        .concat(namespace)
        .filter(Boolean) // compact
        .reduce((joined, ns) => joined + `${ns}${namespaceDelimiter}`, '');

    const baseBlock = `${namespaces}${block}`;

    return function bemBlock(elementOrModifiers?: string | Modifiers, modifiers?: Modifiers) {
        let base = baseBlock;

        if (!elementOrModifiers) {
            return base;
        }

        let mods = modifiers as Modifiers;

        if (typeof elementOrModifiers === 'string') {
            base = `${base}${elementDelimiter}${elementOrModifiers}`;
        } else {
            mods = elementOrModifiers;
        }

        if (!mods) {
            return base;
        }

        return Object.keys(mods)
            .filter(mod => mods[mod])
            .reduce((result, modName) => {
                const mod = typeof mods[modName] === 'boolean' ? modName : `${modName}-${mods[modName]}`;
                return `${result} ${base}${modifierDelimiter}${mod}`;
            }, base);
    };
}
