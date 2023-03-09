// @ts-check

"use strict";

module.exports = {
  // TODO Adapt here
  "names": [ "<names>" ],
  "description": "<description>",
  "information": new URL(
    "https://todo.add.url"
  ),
  "tags": [ "<tags>" ],
  "function": (params, onError) => {
    //TODO Add Logic Here
    onError({
      "lineNumber": 16,
      "detail": null,
      // eslint-disable-next-line max-len
      "context": "you need to configure your rule",
      "range": [ 1, 1 ],
      /*
      "fixInfo": {
        "lineNumber": lineNumber,
        "editColumn": column,
        "deleteCount": length,
        "insertText": replacement
      }
      */
    });
  }
};
