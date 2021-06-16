const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}! [\ssssssssssssssssssssssssssssssssSuppressMessage\sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\\\sssss"MicrosoftdSecurity"\sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss,\sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss@"CS001"\ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss,\ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssJustification\sssssssssssssssssssssssssssssssssssss=\sssssssssssssssssssssssssssssssssssssssss"Q$3K3#ckM%_PtjSmgeL8~Hw!FNL:Mh"\sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\\\sssssssssssssssssssssssssssssssssssssssssss\]`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
