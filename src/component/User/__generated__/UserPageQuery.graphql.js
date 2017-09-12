/**
 * @flow
 * @relayHash 0a74aeef573e01c8d292e6f59337f2c8
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type UserPageQueryResponse = {|
  +user: ?{| |};
|};
*/


/*
query UserPageQuery {
  user(login: "AshoneA") {
    ...User_profile
    id
  }
}

fragment User_profile on User {
  avatarUrl
  createdAt
  bio
  name
  login
  location
  repositories(first: 10) {
    totalCount
    nodes {
      ...ProjectProfile_repository
      id
    }
  }
}

fragment ProjectProfile_repository on Repository {
  name
  projectsUrl
  description
  id
  primaryLanguage {
    id
    name
  }
  stargazers(first: 10) {
    totalCount
  }
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
            "name": "bio",
            "storageKey": null
          },
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
            "name": "login",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "location",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10,
                "type": "Int"
              }
            ],
            "concreteType": "RepositoryConnection",
            "name": "repositories",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "totalCount",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Repository",
                "name": "nodes",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "Repository",
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
                        "name": "projectsUrl",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "description",
                        "storageKey": null
                      },
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
                            "name": "id",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "name",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "first",
                            "value": 10,
                            "type": "Int"
                          }
                        ],
                        "concreteType": "StargazerConnection",
                        "name": "stargazers",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "totalCount",
                            "storageKey": null
                          }
                        ],
                        "storageKey": "stargazers{\"first\":10}"
                      }
                    ]
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories{\"first\":10}"
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
    ]
  },
  "text": "query UserPageQuery {\n  user(login: \"AshoneA\") {\n    ...User_profile\n    id\n  }\n}\n\nfragment User_profile on User {\n  avatarUrl\n  createdAt\n  bio\n  name\n  login\n  location\n  repositories(first: 10) {\n    totalCount\n    nodes {\n      ...ProjectProfile_repository\n      id\n    }\n  }\n}\n\nfragment ProjectProfile_repository on Repository {\n  name\n  projectsUrl\n  description\n  id\n  primaryLanguage {\n    id\n    name\n  }\n  stargazers(first: 10) {\n    totalCount\n  }\n}\n"
};

module.exports = batch;
