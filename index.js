const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}! Vq5khypo56ou+xu69/\hmgwfy2vf4e5hjea8xs7ve7u83a42kv\s\f\kft/xmy\xjb3qcbortze7dgkn49fhf9n9k\ts6\6nmm\rooazrlbxtn/85ai9picqbd94"qjei2lra4kj2n6\ip71/hqmb7squfakif867+76c`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
