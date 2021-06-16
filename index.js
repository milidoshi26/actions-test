const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}! <add\sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssskey\ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss=\ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"Kp5Zk.K] ~^A=|1pusk67c.eq-6GlarNvg[Ae!TL'NG-4'tFcmoTTMOYConnectionString"=S#xcq0s3\{r5vJd8ydCV9B7F"sun@HZG&cz.mi>vyf{!value\sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss=\ssssssssssssssssssssssssssssssssssssssssssssssssssss"e8gh]k/]6inm^/^dozucg__9gg=ujr]uo!x3d3;np/3w+hc6+gmdrhu2mm8syu9v=d.7gcmw/oxk19n8h^+#jl6#+#w1ifcm_9+!0ho]qle^lb5^zs9\39!jxy!3!+n1ltbfj3n]=\5_!dubwf8^6w!rd=9kzbc.2cl.aqh^!s5.vwe726j3r5.d.pjgxv+#h/2mfg;l`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
