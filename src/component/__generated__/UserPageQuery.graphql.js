/**
 * @flow
 * @relayHash b41e43571cc6c96e0b1cdc2ca39a661f
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type UserPageQueryResponse = {|
  +relay: {|
    +user: ?{| |};
  |};
|};
*/


/*
query UserPageQuery {
  relay {
    user(login: "AshoneA") {
      ...User_profile
      id
    }
  }
}

fragment User_profile on User {
  avatarUrl
  createdAt
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserPageQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "name": "relay",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "login",
                "value": "AshoneA",
                "type": "String!"
              }
            ],
            "concreteType": "User",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "User_profile",
                "args": null
              }
            ],
            "storageKey": "user{\"login\":\"AshoneA\"}"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "UserPageQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "UserPageQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "name": "relay",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "login",
                "value": "AshoneA",
                "type": "String!"
              }
            ],
            "concreteType": "User",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "avatarUrl",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "createdAt",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": "user{\"login\":\"AshoneA\"}"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query UserPageQuery {\n  relay {\n    user(login: \"AshoneA\") {\n      ...User_profile\n      id\n    }\n  }\n}\n\nfragment User_profile on User {\n  avatarUrl\n  createdAt\n}\n"
};

module.exports = batch;
