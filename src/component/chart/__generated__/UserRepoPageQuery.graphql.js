/**
 * @flow
 * @relayHash 738dcd6e65237254a428c661d7ae8b59
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type UserRepoPageQueryResponse = {|
  +user: ?{| |};
|};
*/


/*
query UserRepoPageQuery(
  $user: String!
) {
  user(login: $user) {
    ...UserRepo_repo
    id
  }
}

fragment UserRepo_repo on User {
  repositories(first: 50) {
    edges {
      node {
        primaryLanguage {
          name
          id
        }
        id
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "user",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserRepoPageQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "login",
            "variableName": "user",
            "type": "String!"
          }
        ],
        "concreteType": "User",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "UserRepo_repo",
            "args": null
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
  "name": "UserRepoPageQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "user",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "UserRepoPageQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "login",
            "variableName": "user",
            "type": "String!"
          }
        ],
        "concreteType": "User",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 50,
                "type": "Int"
              }
            ],
            "concreteType": "RepositoryConnection",
            "name": "repositories",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "RepositoryEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Repository",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Language",
                        "name": "primaryLanguage",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "name",
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
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories{\"first\":50}"
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query UserRepoPageQuery(\n  $user: String!\n) {\n  user(login: $user) {\n    ...UserRepo_repo\n    id\n  }\n}\n\nfragment UserRepo_repo on User {\n  repositories(first: 50) {\n    edges {\n      node {\n        primaryLanguage {\n          name\n          id\n        }\n        id\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
