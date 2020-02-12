'use strict';

///////////////////////////////////
// 5. Properties that aren't there
///////////////////////////////////

// from https://courses.thinkful.com/ei-js-v1/checkpoint/10

const humanResources = [
  {
    name: 'Brad',
    jobTitle: 'Intern',
    boss: 'Tito'
  },
  {
    name: 'Jess',
    jobTitle: 'Senior Software Architect',
    boss: 'Teresa'
  },
  {
    name: 'Sacha',
    jobTitle: 'Jr. Developer',
    boss: 'Tito'
  },
  {
    name: 'Teresa',
    jobTitle: 'CEO'
  },
  {
    name: 'Tito',
    jobTitle: 'Developer',
    boss: 'Jess'
  }

]; 

for (const key in humanResources) {
  //console.log(humanResources[key]);
  if ('boss' in humanResources[key]) {
    console.log(`${humanResources[key].jobTitle} ${humanResources[key].name} reports to ${humanResources[key].boss}`);
  } else {
    console.log(`${humanResources[key].jobTitle} ${humanResources[key].name} reports to no one, because s/he is the boss!`);
  }
}
