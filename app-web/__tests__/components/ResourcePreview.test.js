/*
Copyright 2018 Province of British Columbia

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at 

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Created by Patrick Simonian
*/
import React from 'react';
import { shallow } from 'enzyme';
import ResourcePreview from '../../src/components/ResourcePreview/ResourcePreview';
import { SIPHON_NODES } from '../../__fixtures__/siphon-fixtures';

describe('Resource Preview Component', () => {
  let resourcePreview = null;

  const props = {
    title: 'foo',
    link: {
      to: '/',
      text: 'bar',
    },
    resources: SIPHON_NODES,
  };

  beforeEach(() => {
    resourcePreview = shallow(<ResourcePreview {...props} />);
  });

  test('it matches snapshot', () => {
    expect(resourcePreview).toMatchSnapshot();
  });
});