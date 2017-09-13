/**
 * @flow
 * @relayHash aa21739fb11faec29adbca81623d1906
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type IssueDetailPageQueryResponse = {|
  +repository: ?{| |};
|};
*/


/*
query IssueDetailPageQuery(
  $number: Int!
) {
  repository(owner: "AshoneA", name: "react-relay-github") {
    ...IssueDetail_issue
    id
  }
}

fragment IssueDetail_issue on Repository {
  issue(number: $number) {
    id
    createdAt
    bodyHTML
    number
    title
    author {
      __typename
      avatarUrl
      login
      ... on Node {
        id
      }
    }
    comments(first: 100) {
      totalCount
      edges {
        node {
          ...IssueComment_comment
          id
        }
      }
    }
  }
}

fragment IssueComment_comment on IssueComment {
  id
  bodyHTML
  createdAt
  author {
    __typename
    avatarUrl
    login
    url
    ... on Node {
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
        "name": "number",
        "type": "Int!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "IssueDetailPageQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "name",
            "value": "react-relay-github",
            "type": "String!"
          },
          {
            "kind": "Literal",
            "name": "owner",
            "value": "AshoneA",
            "type": "String!"
          }
        ],
        "concreteType": "Repository",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "IssueDetail_issue",
            "args": null
          }
        ],
        "storageKey": "repository{\"name\":\"react-relay-github\",\"owner\":\"AshoneA\"}"
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "IssueDetailPageQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "number",
        "type": "Int!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "IssueDetailPageQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "name",
            "value": "react-relay-github",
            "type": "String!"
          },
          {
            "kind": "Literal",
            "name": "owner",
            "value": "AshoneA",
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
                "kind": "Variable",
                "name": "number",
                "variableName": "number",
                "type": "Int!"
              }
            ],
            "concreteType": "Issue",
            "name": "issue",
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
                "name": "createdAt",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "bodyHTML",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "number",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "title",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": null,
                "name": "author",
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
                    "name": "avatarUrl",
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
                    "name": "id",
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
                    "value": 100,
                    "type": "Int"
                  }
                ],
                "concreteType": "IssueCommentConnection",
                "name": "comments",
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
                    "concreteType": "IssueCommentEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "IssueComment",
                        "name": "node",
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
                            "name": "bodyHTML",
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
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "name": "author",
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
                                "name": "avatarUrl",
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
                "storageKey": "comments{\"first\":100}"
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
        "storageKey": "repository{\"name\":\"react-relay-github\",\"owner\":\"AshoneA\"}"
      }
    ]
  },
  "text": "query IssueDetailPageQuery(\n  $number: Int!\n) {\n  repository(owner: \"AshoneA\", name: \"react-relay-github\") {\n    ...IssueDetail_issue\n    id\n  }\n}\n\nfragment IssueDetail_issue on Repository {\n  issue(number: $number) {\n    id\n    createdAt\n    bodyHTML\n    number\n    title\n    author {\n      __typename\n      avatarUrl\n      login\n      ... on Node {\n        id\n      }\n    }\n    comments(first: 100) {\n      totalCount\n      edges {\n        node {\n          ...IssueComment_comment\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment IssueComment_comment on IssueComment {\n  id\n  bodyHTML\n  createdAt\n  author {\n    __typename\n    avatarUrl\n    login\n    url\n    ... on Node {\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
