/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Chart_stars = {|
  +starredRepositories: {|
    +totalCount: number;
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +owner: {|
          +login: string;
          +repositories: {|
            +totalCount: number;
          |};
        |};
        +stargazers: {|
          +totalCount: number;
        |};
        +name: string;
        +primaryLanguage: ?{|
          +id: string;
          +color: ?string;
          +name: string;
        |};
      |};
    |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Chart_stars",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "last",
          "value": 50,
          "type": "Int"
        }
      ],
      "concreteType": "StarredRepositoryConnection",
      "name": "starredRepositories",
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
          "concreteType": "StarredRepositoryEdge",
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
                  "concreteType": null,
                  "name": "owner",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "login",
                      "storageKey": null
                    },
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "args": [
                        {
                          "kind": "Literal",
                          "name": "first",
                          "value": 0,
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
                        }
                      ],
                      "storageKey": "repositories{\"first\":0}"
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
                      "value": 0,
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
                  "storageKey": "stargazers{\"first\":0}"
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "name",
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
                      "name": "color",
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
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "starredRepositories{\"last\":50}"
    }
  ],
  "type": "User"
};

module.exports = fragment;
