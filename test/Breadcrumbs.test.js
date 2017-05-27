import test from 'tape';
import breadcrumbConfig from '../src';
import shallow from 'react-test-renderer/shallow';
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = breadcrumbConfig({
  dynamicRoutesMap: {
    '/:id': 'people.{{id}}',
    '/:idd/:id': ['people..', ({ id, idd }) => `${idd},${id}`],
    '/:iddd/:idd/:id': ({ iddd, idd, id }) => `people...${iddd},${idd},${id}`,
  },
  Breadcrumb: 'ul',
  BreadcrumbItem: 'li',
});

const ReactTestRenderer = shallow.createRenderer();
test('staticRoutesMap Breadcrumbs and component type', assert => {
  ReactTestRenderer.render(<Breadcrumbs pathname="/" />);
  const resp = ReactTestRenderer.getRenderOutput();
  const items = resp.props.children;
  assert.equal(resp.type, 'ul', 'default breadcrumb container type');
  assert.equal(items.length, 1, 'only home item');
  assert.equal(items[0].type, 'li', 'default breadcrumb item type');
  assert.equal(items[0].props.children, 'Home', 'default index breadcrumb name is "Home"');
  assert.end();
});
test('dynamicRoutesMap Breadcrumbs', assert => {
  ReactTestRenderer.render(<Breadcrumbs pathname="/1/2/3" />);
  const resp = ReactTestRenderer.getRenderOutput();
  const items = resp.props.children;
  ReactTestRenderer.render(<Breadcrumbs pathname="/1/2/3" />);
  assert.equal(items.length, 5, 'five items');
  assert.deepEqual(items[0].props.children.type, Link, 'the type is not last item has Link');
  assert.equal(items[1].props.children.props.children, 'people.1', 'replaced param');
  assert.notDeepEqual(
    items[2].props.children.type,
    Link,
    'the type is not Link, because it is not the array names last item'
  );
  assert.deepEqual(
    items[3].props.children.type,
    Link,
    'the type is Link, because it is the array names last item'
  );
  assert.equal(items[4].props.children, 'people...1,2,3', 'function return string');
  assert.end();
});
