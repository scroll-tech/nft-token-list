import { readJson } from './util.mjs';
import * as core from '@actions/core';

async function validate() {
  const tokenFile = await readJson('../scroll.tokenlist.json');
  const tokenList = tokenFile.tokens;
  const l1AddressList = new Set(tokenList.map((item) => item.l1));
  const l2AddressList = new Set(tokenList.map((item) => item.l2));
  if (
    l1AddressList.size < tokenList.length ||
    l2AddressList.size < tokenList.length
  ) {
    console.log('Already contain the address in list!');
    core.setOutput('duplicated', 'true');
  }
}

validate()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
