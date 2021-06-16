const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!'TokenCache'\sssssssssssss:\ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\{\ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"CacheData'\ssssssssssssssssssssssss:\sssssssssssssssssssssssss"g52\/7z\dywfe404kcj91xaplkrw10\8r2sz9hwg7\cnctm4tms1rmaazernb9dm5c0y3erlkvaen+/9y5zop\`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
