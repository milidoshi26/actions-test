const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}! qdM4e599eicyjqvroot6wcgrhaanw08e0c3u26zcca8pnj23uukd+ufyx8+538\q6bz\4qpv\61sh2kw3aozpkrvwdxsbws+8rbyuf4/l0+g+1jaf\fa9x2c0kjo48h1k4/\4ph13a5972ew+p6z0eabnr9mob8fe1+k826uavrsk7cjg\\eiibiif`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
