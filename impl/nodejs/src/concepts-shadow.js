class ConceptsShadow {
    /* const */ #name;
    /* const */ #variables;
    /* const */ #literals;
    /* const */ #literalMap;
    /* const */ #concepts;
    /* const */ #data;

    constructor(name) {
        this.#name = name;

        this.#variables = [];
        this.#literals = [];
        this.#literalMap = {};
        this.#concepts = [];
        this.#data = {};
    }

    get name() { return this.#name; }
    get variables() { return this.#variables; }
    get literals() { return this.#literals; }
    get concepts() { return this.#concepts; }
    get data() { return this.#data; }

    hasAnyVariables() { return this.#variables.length > 0; }
    hasAnyLiterals() { return this.#literals.length > 0; }
    hasLiteral(name) { return this.#literalMap.hasOwnProperty(name); }
    getLiteral(name) { return this.#literalMap[name]; }
    hasAnyConcepts() { return this.#concepts.length > 0; }

    hasNothingButName() {
        return this.#name != null &&
            !this.hasAnyVariables() &&
            !this.hasAnyLiterals() &&
            !this.hasAnyConcepts();
    }

    build(concepts) {
        if (concepts != null) {
            if (typeof concepts === 'string' && sc.is(sc.VARIABLE, concepts)) {
                this._pushVariable(concepts);
            } else if (typeof concepts === 'object') {
                for (const key in concepts) {
                    if (sc.is(sc.VARIABLE, key)) {
                        this._pushConcept(key, concepts);
                    } else {
                        this._pushLiteral(key, concepts);
                    }
                }
            }
        }

        if (this.#name != null) {
            this.#data[sc.SELF] = this.#name;
        }

        for (const variable of this.#variables) {
            arrayify.pushOrSet(this.#data, 'variable', variable.#data);
        }

        for (const literal of this.#literals) {
            arrayify.pushOrSet(this.#data, 'literal', literal.#data);
        }

        for (const concept of this.#concepts) {
            arrayify.pushOrSet(this.#data, 'concept', concept.#data);
        }
    }

    _pushVariable(key) {
        const variable = new ConceptsShadow(sc.from(sc.VARIABLE, key));
        variable.build();

        this.#variables.push(variable);
    }

    _pushLiteral(key, concepts) {
        const literal = new ConceptsShadow(key);
        literal.build(concepts[key]);

        this.#literals.push(literal);
        this.#literalMap[literal.name] = literal;
    }

    _pushConcept(key, concepts) {
        const concept = new ConceptsShadow(sc.from(sc.VARIABLE, key));
        concept.build(concepts[key]);

        this.#concepts.push(concept);
    }
}

module.exports = {
    ConceptsShadow
};

const { sc, arrayify } = require('./util');
