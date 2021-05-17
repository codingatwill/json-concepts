const { Concepts } = require('../../..');
const { should } = require('chai');

should();

describe('specs/literals/concept-under-a-literal', function () {
    it('should allow concepts under literals', function () {
        const concepts = new Concepts({
            "$service+": {
                "response": {
                    "$property*": "$type"
                }
            }
        });

        const schema = concepts.create({
            "sayHello": {
                "response": {
                    "message": "string",
                    "status": "number"
                }
            }
        });

        concepts.shadow.should.deep.equal({
            "concept": {
                "name": "service",
                "quantifier": { "min": 1 },
                "literal": {
                    "name": "response",
                    "concept": {
                        "name": "property",
                        "quantifier": { "min": 0 },
                        "variable": { "name": "type" }
                    }
                }
            }
        });

        schema.shadow.should.deep.equal({
            "service": [
                {
                    "name": "sayHello",
                    "property": [
                        {
                            "name": "message",
                            "type": "string"
                        },
                        {
                            "name": "status",
                            "type": "number"
                        }
                    ]
                }
            ]
        });
    });
});
