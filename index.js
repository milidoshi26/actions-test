const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}! @-fm6#2/ek72c+jsbqiyxfwttk5v==;70j5kjlkzz+60\7um75w2j==dlj4jm3fz9x97lxs13+mlt==rvqtli7ysuirmlk9cn7g6/3==oj/xk2elqfhozscjuoeoa1==05zhjwjei7og4pi+9vqm5md==|`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
