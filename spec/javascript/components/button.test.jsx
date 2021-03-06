import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from '../../../app/assets/javascripts/components/components/button'

describe('<Button />', () => {
  it('simulates click events', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Button onClick={onClick} />);
    wrapper.find('button').simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });
});
