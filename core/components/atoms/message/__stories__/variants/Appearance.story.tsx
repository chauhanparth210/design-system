import * as React from 'react';
import Message, { Appearance } from '../../index';
import Text from '@/components/atoms/text';

// CSF format story
export const appearanceWithoutTitle = () => {

  const appearances: Appearance[] = ['default', 'alert', 'info', 'success', 'warning'];

  const style = {
    display: 'flex',
    'flex-direction': 'row',
    'flex-wrap': 'wrap',
  };

  const innerStyle = {
    display: 'flex',
    'align-items': 'center',
    'flex-direction': 'column',
    marginRight: '3%',
    marginBottom: '3%',
    width: '300px'
  };

  return (
    <div style={style}>
      {
        appearances.map((appear, ind) => {
          return (
            <div key={ind} style={innerStyle}>
              <Message appearance={appear}>
                Patient record has been updated with new records.
              </Message>
              <br />
              <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>

  );
};

export default {
  title: 'Atoms|Message/Variants',
  component: Message,
  parameters: {
    docs: {
      docPage: {
        title: 'Message'
      }
    }
  }
};
