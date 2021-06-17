const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}! bvAccessTokenSecret==s\TwilioAuthSid=:\\\>\>==c68k96q.1+cax1_-+l0vt.g-y5sc1afxh3a.h2t-d/yp-oeny5mgtmdg6y=gi99r7jfj5+gl=qqj0jixpix9ze1mi=a/wvn86-0=lk-+o-ck-e8qdcyzkq_w8a5qmhus=jt6htfsnw4i43h7au1g50ssdkrk0y++54q6o5m5ylkzsfo/by3_h++zs9ai/v85b9v2/bj4tg8_s0he75qjfi0/j3/216e7lpyaqrq9vy3lgb3g.p95xqq3cw5-ewj8eb3=gujve+e7lew6x-ntbyrhqu3cwj9gars_3495+/w+xqy7kxzq/qfa2/42idjy405jeszh.hwo5&`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
