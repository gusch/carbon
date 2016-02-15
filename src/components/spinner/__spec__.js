import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Spinner from './spinner';

describe('Spinner', () => {
  let instance;

  beforeEach(() => {
    instance = TestUtils.renderIntoDocument( <Spinner /> );
  });

  describe('spinnerClasses', () => {
    it('returns the base class and classes with from props', () => {
      expect(instance.spinnerClasses).toEqual('ui-spinner ui-spinner__std ui-spinner__std--lmed');
    });

    describe('passing a custom as prop', () => {
      it('sets the element to the passed as prop', () => {
        instance = TestUtils.renderIntoDocument( <Spinner as='adv' /> );
        expect(instance.spinnerClasses).toEqual('ui-spinner ui-spinner__adv ui-spinner__adv--lmed');
      });
    });

    describe('passing a custom size prop', () => {
      it('sets the modifier to the size prop', () => {
        instance = TestUtils.renderIntoDocument( <Spinner size='small' /> );
        expect(instance.spinnerClasses).toEqual('ui-spinner ui-spinner__std ui-spinner__std--small');
      });
    });
  });

  describe('render', () => {
    it('renders a parent div with the spinner classes', () => {
      let div = TestUtils.findRenderedDOMComponentWithTag(instance, 'div')
      expect(div.className).toEqual('ui-spinner ui-spinner__std ui-spinner__std--lmed');
    });
  });
});
