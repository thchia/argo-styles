import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Form, Input, Menu, Message, Segment } from 'semantic-ui-react'

import './styles.css'
import '../semantic/dist/semantic.min.css'

const error = true

storiesOf('Button', module)
  .add('green', () => <div>
    <Button color='green'>Next</Button>
    <Button basic color='green'>Next</Button>
  </div>)
  .add('green inverted', () => <div>
    <Segment inverted>
      <Button inverted color='green'>Next</Button>
      <Button inverted basic color='green'>Next</Button>
    </Segment>
  </div>)

storiesOf('Message', module)
  .add('green', () => <div style={{ width: '300px' }}>
    <Message color='green'>
    <Message.Header>
      Header
    </Message.Header>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nunc tristique odio viverra eros interdum luctus.
      Pellentesque consectetur tortor id dictum blandit.
    </p>
    </Message>
  </div>)
  .add('green against dark', () => <Segment inverted>
    <div style={{ width: '300px' }}>
      <Message color='green'>
        <Message.Header>
          Header
        </Message.Header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc tristique odio viverra eros interdum luctus.
          Pellentesque consectetur tortor id dictum blandit.
        </p>
      </Message>
    </div>
</Segment>)

storiesOf('Input', module)
  .add('normal', () => <div>
    <Input placeholder='Placeholder' />
  </div>)
  .add('normal error', () => <div>
    <Input error placeholder='Placeholder' />
  </div>)
  .add('inverted', () => <div>
    <Segment inverted>
      <Input className='input-inverted' inverted placeholder='Placeholder' />
    </Segment>
  </div>)
  .add('inverted error', () => <div>
    <Segment inverted>
      <Input className='input-inverted error' inverted placeholder='Placeholder' />
    </Segment>
</div>)

storiesOf('Form', module)
  .add('normal', () => <div style={{ width: '300px' }}>
    <Form>
      <Form.Field>
        <input placeholder='Placeholder' />
      </Form.Field>
      <Form.Field>
        <input placeholder='Placeholder' />
      </Form.Field>
    </Form>
  </div>)
  .add('normal error', () => <div style={{ width: '300px' }}>
    <Form>
      <Form.Field error>
        <input placeholder='Placeholder' />
      </Form.Field>
      <Form.Field error>
        <input placeholder='Placeholder' />
      </Form.Field>
    </Form>
  </div>)
  .add('inverted', () => <div style={{ width: '300px' }}>
    <Segment inverted>
      <Form inverted>
        <Form.Field className='input-inverted' >
          <input placeholder='Placeholder' />
        </Form.Field>
        <Form.Field className='input-inverted'>
          <input placeholder='Placeholder' />
        </Form.Field>
      </Form>
    </Segment>
  </div>)
  .add('inverted error', () => <div style={{ width: '300px' }}>
    <Segment inverted>
      <Form inverted>
        <Form.Field className='input-inverted error' error>
          <input placeholder='Placeholder' />
        </Form.Field>
        <Form.Field className='input-inverted error' error>
          <input placeholder='Placeholder' />
        </Form.Field>
      </Form>
    </Segment>
  </div>)

storiesOf('Menu', module)
  .add('normal', () => <div style={{ borderBottom: 'solid 1px lightgrey', padding: '5px' }}>
    <Menu secondary>
      <Menu.Item active>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item><Input /></Menu.Item>
        <Menu.Item>Logout</Menu.Item>
      </Menu.Menu>
    </Menu>
  </div>)
  .add('inverted', () => <Segment inverted>
    <div style={{ borderBottom: 'solid 1px lightgrey', padding: '5px' }}>
      <Menu secondary inverted>
        <Menu.Item active>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item><Input className='input-inverted' inverted /></Menu.Item>
          <Menu.Item>Logout</Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  </Segment>)