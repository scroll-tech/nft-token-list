import * as core from '@actions/core';

(async () => {
  try {
    const token = JSON.parse(process.env.RESOLVED_TOKEN_STR);
    const { scrollEnvironment, tokenType, address1, address2 } = token;
    const newtoken = {
      type: tokenType,
      l1: address1,
      l2: address2,
    };
    core.setOutput('scrollEnvironment', scrollEnvironment);
    core.setOutput('new-token', JSON.stringify(newtoken, null, 2));
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
