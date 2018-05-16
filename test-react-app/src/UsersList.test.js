import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import UsersList from './UsersList';

it(`shows message when there are no users`, () => {
  const usersList = shallow(<UsersList users={[]} />);
  expect(usersList.text()).toContain('No results!');
});

it(`doesn't show message when there are users`, () => {
  const usersList = shallow(<UsersList users={['person']} />);
  expect(usersList.text()).not.toContain('No results!');
});

it(`shows a list of users`, () => {
  const users = ['person1', 'person2'];
  const usersList = shallow(<UsersList users={users} />);
  expect(usersList.find('li').length).toEqual(users.length);
});

describe('list of users', () => {
  const users = ['person1', 'person2'];
  const usersList = shallow(<UsersList users={users} />);
  
  users.forEach(user => {
      it(`includes name ${user} on the list`, () => {
          expect(usersList.containsMatchingElement(<li> {user} </li>)).toEqual(true)
      });
  });
});

describe(`change props`, () => {
  const users = ['person1', 'person2'];
  const usersList = shallow(<UsersList users={[]} />);
  usersList.setProps({ users });

  users.forEach(user => {
    it(`includes name ${user} on the list`, () => {
      expect(usersList).toContainReact(<li> {user} </li>);
    });
  });
});