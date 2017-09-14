/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type User_profile = {|
  +avatarUrl: any;
  +createdAt: any;
  +bio: ?string;
  +name: ?string;
  +login: string;
  +location: ?string;
  +repositories: {|
    +totalCount: number;
    +nodes: ?$ReadOnlyArray<?{| |}>;
  |};
  +starredRepositories: {|
    +totalCount: number;
    +nodes: ?$ReadOnlyArray<?{| |}>;
  |};
  +watching: {|
    +totalCount: number;
    +nodes: ?$ReadOnlyArray<?{| |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "User_profile",
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
              "kind": "FragmentSpread",
              "name": "ProjectProfile_repository",
              "args": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "repositories{\"first\":10}"
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
          "concreteType": "Repository",
          "name": "nodes",
          "plural": true,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "ProjectProfile_repository",
              "args": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "starredRepositories{\"first\":10}"
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
      "name": "watching",
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
              "kind": "FragmentSpread",
              "name": "ProjectProfile_repository",
              "args": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "watching{\"first\":10}"
    }
  ],
  "type": "User"
};

module.exports = fragment;
