/**
 * @flow
 * @relayHash 0428fce8612fa73751891fc09b83f918
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DayDetail_day$ref = any;
export type DayDetailSceneQueryVariables = {|
  dayId: string
|};
export type DayDetailSceneQueryResponse = {|
  +day: ?{|
    +$fragmentRefs: DayDetail_day$ref
  |}
|};
export type DayDetailSceneQuery = {|
  variables: DayDetailSceneQueryVariables,
  response: DayDetailSceneQueryResponse,
|};
*/


/*
query DayDetailSceneQuery(
  $dayId: ID!
) {
  day(dayId: $dayId) {
    ...DayDetail_day
    id
  }
}

fragment DayDetail_day on Day {
  name
  ...ExerciseTable_day
}

fragment ExerciseTable_day on Day {
  exercises {
    edges {
      node {
        id
        ...ExerciseRow_exercise
      }
    }
  }
}

fragment ExerciseRow_exercise on Exercise {
  set
  reps
  breakTime
  baseExercise {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "dayId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "dayId",
    "variableName": "dayId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DayDetailSceneQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "day",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Day",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "DayDetail_day",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DayDetailSceneQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "day",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Day",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "exercises",
            "storageKey": null,
            "args": null,
            "concreteType": "ExerciseConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "ExerciseEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Exercise",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "set",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "reps",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "breakTime",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "baseExercise",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "BaseExercise",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/)
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "DayDetailSceneQuery",
    "id": null,
    "text": "query DayDetailSceneQuery(\n  $dayId: ID!\n) {\n  day(dayId: $dayId) {\n    ...DayDetail_day\n    id\n  }\n}\n\nfragment DayDetail_day on Day {\n  name\n  ...ExerciseTable_day\n}\n\nfragment ExerciseTable_day on Day {\n  exercises {\n    edges {\n      node {\n        id\n        ...ExerciseRow_exercise\n      }\n    }\n  }\n}\n\nfragment ExerciseRow_exercise on Exercise {\n  set\n  reps\n  breakTime\n  baseExercise {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '57fc9f2598e39ab0e699d2402ff5cc5c';
module.exports = node;
