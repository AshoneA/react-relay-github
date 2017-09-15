/**
 * @flow
 * @relayHash cfc8d8d99b3d9e3050fc3718f72d3f26
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CommitListForwardQueryResponse = {|
  +repository: ?{|
    +ref: ?{|
      +target: {| |};
    |};
  |};
|};
*/


/*
query CommitListForwardQuery(
  $count: Int!
  $after: String
  $name: String!
  $owner: String!
) {
  repository(owner: $owner, name: $name) {
    ref(qualifiedName: "master") {
      target {
        __typename
        ...CommitList_commits
        id
      }
      id
    }
    id
  }
}

fragment CommitList_commits on Commit {
  history(first: $count, after: $after) {
    edges {
      node {
        ...Commit_commit
        id
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
    ... on CommitHistoryConnection {
      edges {
        cursor
        node {
          __typename
          id
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}

fragment Commit_commit on Commit {
  committedDate
  message
  messageBody
  messageBodyHTML
  messageHeadline
  commitUrl
  id
  author {
    avatarUrl
    date
    name
    email
    user {
      url
      id
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "after",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "name",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "owner",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CommitListForwardQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "owner",
            "variableName": "owner",
            "type": "String!"
          }
        ],
        "concreteType": "Repository",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "qualifiedName",
                "value": "master",
                "type": "String!"
              }
            ],
            "concreteType": "Ref",
            "name": "ref",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": null,
                "name": "target",
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "CommitList_commits",
                    "args": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "ref{\"qualifiedName\":\"master\"}"
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
  "name": "CommitListForwardQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "after",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "name",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "owner",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CommitListForwardQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "owner",
            "variableName": "owner",
            "type": "String!"
          }
        ],
        "concreteType": "Repository",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "qualifiedName",
                "value": "master",
                "type": "String!"
              }
            ],
            "concreteType": "Ref",
            "name": "ref",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": null,
                "name": "target",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "Commit",
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": [
                          {
                            "kind": "Variable",
                            "name": "after",
                            "variableName": "after",
                            "type": "String"
                          },
                          {
                            "kind": "Variable",
                            "name": "first",
                            "variableName": "count",
                            "type": "Int"
                          }
                        ],
                        "concreteType": "CommitHistoryConnection",
                        "name": "history",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "CommitEdge",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "Commit",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "committedDate",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "message",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "messageBody",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "messageBodyHTML",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "messageHeadline",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "commitUrl",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "id",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "GitActor",
                                    "name": "author",
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
                                        "name": "date",
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
                                        "name": "email",
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "User",
                                        "name": "user",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "args": null,
                                            "name": "url",
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
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "PageInfo",
                            "name": "pageInfo",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "endCursor",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "hasNextPage",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "CommitHistoryConnection",
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "CommitEdge",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "cursor",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Commit",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "args": null,
                                        "name": "__typename",
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ]
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "args": [
                          {
                            "kind": "Variable",
                            "name": "after",
                            "variableName": "after",
                            "type": "String"
                          },
                          {
                            "kind": "Variable",
                            "name": "first",
                            "variableName": "count",
                            "type": "Int"
                          }
                        ],
                        "handle": "connection",
                        "name": "history",
                        "key": "CommitList_history",
                        "filters": null
                      }
                    ]
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
            "storageKey": "ref{\"qualifiedName\":\"master\"}"
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
  "text": "query CommitListForwardQuery(\n  $count: Int!\n  $after: String\n  $name: String!\n  $owner: String!\n) {\n  repository(owner: $owner, name: $name) {\n    ref(qualifiedName: \"master\") {\n      target {\n        __typename\n        ...CommitList_commits\n        id\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment CommitList_commits on Commit {\n  history(first: $count, after: $after) {\n    edges {\n      node {\n        ...Commit_commit\n        id\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n    ... on CommitHistoryConnection {\n      edges {\n        cursor\n        node {\n          __typename\n          id\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment Commit_commit on Commit {\n  committedDate\n  message\n  messageBody\n  messageBodyHTML\n  messageHeadline\n  commitUrl\n  id\n  author {\n    avatarUrl\n    date\n    name\n    email\n    user {\n      url\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
