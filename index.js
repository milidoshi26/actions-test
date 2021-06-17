const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}! xoxa\-g76xi\a\fo3s1s0f4rnlha1wagmgskqns6zw15dr69yi2ld\as2qemu21kxmby2xv1q9k9kbtllfslcep xoxa\-g76xi\a\fo3s1s0f4rnlha1wagmgskqns6zw15dr69yi2ld\as2qemu21kxmby2xv1q9k9kbtllfslcep xoxa\-g76xi\a\fo3s1s0f4rnlha1wagmgskqns6zw15dr69yi2ld\as2qemu21kxmby2xv1q9k9kbtllfslcep`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
