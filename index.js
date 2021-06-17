const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}! ManagementCertificatesssssssssssssssssssssssssssssssssssssssssZmJlamggZmhmZ3JlIGhncmVoIHJ1aHVpaGZ1cmhjIHV3aGVmd2VzbmpraWV3aHdpaGVuZCBicmggZmJ3Zml3dWVmaHdlYSBiZG4gZndmIHd1Zmh3dWVocndlamRmZWpiZWZ1ZXcgaXVoZnVoIHd1ZWZlcyxiandoaW93cXAgdmZqZg==`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
