// @flow
import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import BreadcrumbConfig from 'auto-breadcrumb';
import { Breadcrumb } from 'antd';
const Breadcrumbs = BreadcrumbConfig({
  staticRoutesMap: {
    '/': 'Michelle',
  },
  dynamicRoutesMap: {
    '/:id': 'Friends-{{id}}',
    '/:idd/:id': ['Friends', ({ id, idd }) => `${idd},${id}`],
    '/:iddd/:idd/:id': ({ iddd, idd, id }) => `Friends-${iddd},${idd},${id}`,
  },
  Breadcrumb,
  BreadcrumbItem: Breadcrumb.Item,
  containerProps: {
    separator: '>',
  },
});
const PEEPS = [
  { id: 0, name: 'Michelle', friends: [1, 2, 3] },
  { id: 1, name: 'Sean', friends: [0, 3] },
  { id: 2, name: 'Kim', friends: [0, 1, 3] },
  { id: 3, name: 'David', friends: [1, 2] },
];

const find = (id): Object => PEEPS.find(p => p.id == id) || {};

const RecursiveExample = () => (
  <Router>
    <div style={{ padding: '20px' }}>
      <Route
        render={({ location }) => {
          return (
            <div>
              Use <a target="__blank" href="https://github.com/likun7981/auto-breadcrumb">
                auto-breadcrumb
              </a> with
              {' '}
              <a target="__blank" href="https://ant.design/docs/react/introduce">antd</a>
              <Breadcrumbs pathname={location.pathname} />
              <div style={{ background: '#f6f8fa', padding: '10px' }}>
                You can use
                {' '}
                <a target="__blank" href="https://github.com/likun7981/auto-breadcrumb">
                  auto-breadcrumb
                </a>
                {' '}
                with any UI Framework
              </div>
            </div>
          );
        }}
      />
      <br />
      <br />
      <br />
      <Person match={{ params: { id: 0 }, url: '' }} />
    </div>
  </Router>
);

const Person = ({ match }) => {
  const person = find(match.params.id);
  return (
    <div>
      <h3>{person.name}’s Friends</h3>
      <ul>
        {person.friends.map(id => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>
              {find(id).name}
            </Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.url}/:id`} component={Person} />
    </div>
  );
};

export default RecursiveExample;
