import React from "react";

export default () => {
  return (
    <div>
      <h1 className="display-4">About Screenplay Salon</h1>
      <p className="lead">Simple app to manage screenplays, types genres.</p>
      <p>
        Uses the context.js. Uses a Fake Online REST API on json.typicode.com
        for testing. Uses Redux for state management which is composed of
        actions and reducers.
      </p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
};
