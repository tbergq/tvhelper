/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
export type LoginFormMutationVariables = {|
  username: string,
  password: string,
|};
export type LoginFormMutationResponse = {|
  +login: ?{|
    +token: ?string,
    +success: ?boolean,
  |}
|};
export type LoginFormMutation = {|
  variables: LoginFormMutationVariables,
  response: LoginFormMutationResponse,
|};

/*
mutation LoginFormMutation(
  $username: String!
  $password: String!
) {
  login(username: $username, password: $password) {
    token
    success
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "username",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      },
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username"
      }
    ],
    "concreteType": "LoginType",
    "kind": "LinkedField",
    "name": "login",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginFormMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "LoginFormMutation",
    "operationKind": "mutation",
    "text": "mutation LoginFormMutation(\n  $username: String!\n  $password: String!\n) {\n  login(username: $username, password: $password) {\n    token\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '07ae1992cfbd461dcc13b32725e5666d';
export default node;