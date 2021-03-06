import { composeAPI } from '../src/composeAPI';
import { APIHost, APIPort, genesisAddress } from './config';

const engineAPI = composeAPI(APIHost, APIPort, genesisAddress);

describe('Generate account', () => {
  let account: any;

  beforeAll(async () => {
    account = await engineAPI.createAccount('password');
  });

  test('Address format MUST be same as 0x<40 hex character>', () => {
    expect(account.address).toMatch(/0x/);
  });

  test('Keystore format MUST be same as V3JSONKeyStore', () => {
    expect(typeof(account.keystore)).toBe('object');
  });

});

describe('Generate account wiht initialize value', () => {
  let account: any;

  beforeAll(async () => {
    account = await engineAPI.createAccount('password', 10);
  });

  test('Address format MUST be same as 0x<40 hex character>', () => {
    expect(account.address).toMatch(/0x/);
  });

  test('Keystore format MUST be same as V3JSONKeyStore', () => {
    expect(typeof(account.keystore)).toBe('object');
  });

});
