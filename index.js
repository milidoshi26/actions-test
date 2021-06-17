const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}! set snmp\-server /CzaK$8sf)8;6k$1koNq6$je(Tu~X>$}aj:\<(DH,pRo?C/ ecct),w_e priv\sPjW'f uf"6_&c~a?O#j}tLwv,#)dq#t8GyDoGe"=j+WqGEg(4]%<%7]'LaiVmNL3cTHNf0;o2r&Wc_j5xcv94#HanhuKtI^Yx\s`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
