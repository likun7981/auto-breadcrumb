import test from 'tape';
import findNameByPath, { replaceParams } from '../src/pathToName';

test('replace params', assert => {
  const nameStr = 'route{{id}}';
  const params = { id: 1 };
  assert.equal(replaceParams(nameStr, params), 'route1', 'replace success');
  assert.end();
});

test('findNamePath static routes', assert => {
  const staticRoutesMap = {
    '/': 'Home',
    '/user': ['User', 'Lee'],
  };
  assert.equal(findNameByPath('/', { staticRoutesMap }), 'Home', 'find Home');
  assert.deepEqual(
    findNameByPath('/user', { staticRoutesMap }),
    ['User', 'Lee'],
    'find ["User", "Lee"]'
  );
  assert.equal(
    findNameByPath('/404', { staticRoutesMap }),
    '404',
    'not find will use path name 404'
  );
  assert.end();
});

test('findNamePath dynamic routes', assert => {
  const dynamicRoutesMap = {
    '/user/:id': 'User{{id}}',
    '/group/:gid/user/:uid': ['Group{{gid}}', 'User{{uid}}'],
    '/function/:fid': ({ fid }) => fid,
    '/array/function/:afid': ['string{{afid}}', ({ afid }) => `function${afid}`],
  };
  assert.equal(
    findNameByPath('/user/1', { dynamicRoutesMap }),
    'User1',
    'string with single param'
  );
  assert.deepEqual(
    findNameByPath('/group/1/user/2', { dynamicRoutesMap }),
    ['Group1', 'User2'],
    'array with params'
  );
  assert.equal(findNameByPath('/function/3', { dynamicRoutesMap }), '3', 'function with param');
  assert.deepEqual(
    findNameByPath('/array/function/33', { dynamicRoutesMap }),
    ['string33', 'function33'],
    'mixed array(function, string) with param'
  );
  assert.end();
});
