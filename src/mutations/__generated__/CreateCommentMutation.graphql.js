/**
 * @flow
 * @relayHash 605fe94d6bc51aba19c340be87fc64c5
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreateCommentMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    subjectId: string;
    body: string;
  };
|};

export type CreateCommentMutationResponse = {|
  +addComment: ?{|
    +commentEdge: {|
      +cursor: string;
    |};
  |};
|};
*/


/*
mutation CreateCommentMutation(
  $input: AddCommentInput!
) {
  addComment(input: $input) {
    commentEdge {
      cursor
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "AddCommentInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateCommentMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "AddCommentInput!"
          }
        ],
        "concreteType": "AddCommentPayload",
        "name": "addComment",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "IssueCommentEdge",
            "name": "commentEdge",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CreateCommentMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "AddCommentInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CreateCommentMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "AddCommentInput!"
          }
        ],
        "concreteType": "AddCommentPayload",
        "name": "addComment",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "IssueCommentEdge",
            "name": "commentEdge",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CreateCommentMutation(\n  $input: AddCommentInput!\n) {\n  addComment(input: $input) {\n    commentEdge {\n      cursor\n    }\n  }\n}\n"
};

module.exports = batch;
