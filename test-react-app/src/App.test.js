import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import UsersList from './UsersList';

it('renders without crashing', () => {
  shallow(<App />);
});

it('includes input', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<input />)).toEqual(true)
});

it('includes UsersList', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<UsersList />)).toEqual(true)
});

it(`passes all users to the UsersList`, () => {
  const allUsers = ['old_user1', 'old_user2', 'old_user3', 'new_user1', 'new_user2'];
  const app = shallow(<App />);
  expect(app.find('UsersList').prop('users')).toEqual(allUsers);
});

it('filters names on input', () => {
  const allUsers = ['old_user1', 'old_user2', 'old_user3', 'new_user1', 'new_user2'];
  const app = shallow(<App />);
  expect(app.find('UsersList').prop('users')).toEqual(allUsers);

  app.find('input').simulate('input', { target: { value: 'n' } })
  expect(app.find('UsersList').prop('users')).toEqual(['new_user1', 'new_user2']);
});

it('filters names on empty input', () => {
  const allUsers = ['old_user1', 'old_user2', 'old_user3', 'new_user1', 'new_user2'];
  const app = shallow(<App />);
  expect(app.find('UsersList').prop('users')).toEqual(allUsers);

  app.find('input').simulate('input', { target: { value: '' } })
  expect(app.find('UsersList').prop('users')).toEqual(allUsers);
});