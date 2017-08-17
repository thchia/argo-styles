import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Checkbox, Dropdown, Form, Grid, Input, Menu, Message, Segment } from 'semantic-ui-react'

import './styles.css'
import '../semantic/dist/semantic.min.css'

const error = true
const sampleDropdownOptions = [
  { key: '1', text: 'First', value: 'First' },
  { key: '2', text: 'Second', value: 'Second' },
  { key: '3', text: 'Third', value: 'Third' }
]

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
        <Input placeholder='Placeholder' />
      </Form.Field>
      <Form.Field>
        <Input placeholder='Placeholder' />
      </Form.Field>
      <Form.Field>
        <Dropdown placeholder='Placeholder' search selection options={sampleDropdownOptions} />
      </Form.Field>
      <Form.Field>
        <Checkbox label='Checkbox' />
      </Form.Field>
    </Form>
  </div>)
  .add('normal error', () => <div style={{ width: '300px' }}>
    <Form>
      <Form.Field error>
        <Input placeholder='Placeholder' />
      </Form.Field>
      <Form.Field error>
        <Input placeholder='Placeholder' />
      </Form.Field>
      <Form.Field error>
        <Dropdown placeholder='Placeholder' search selection options={sampleDropdownOptions} />
      </Form.Field>
      <Form.Field error>
        <Checkbox label='Checkbox' />
      </Form.Field>
    </Form>
  </div>)
  .add('inverted', () => <div style={{ width: '300px' }}>
    <Segment inverted>
      <Form inverted>
        <Form.Field>
          <Input transparent placeholder='Placeholder' />
        </Form.Field>
        <Form.Field>
          <Input transparent placeholder='Placeholder' />
        </Form.Field>
        <Form.Field>
          <Dropdown className='inverted' placeholder='Placeholder' search selection options={sampleDropdownOptions} />
        </Form.Field>
        <Form.Field>
          <Checkbox className='inverted' label='Checkbox' />
        </Form.Field>
      </Form>
    </Segment>
  </div>)
  .add('inverted error', () => <div style={{ width: '300px' }}>
    <Segment inverted>
      <Form inverted>
        <Form.Field error>
          <Input transparent placeholder='Placeholder' />
        </Form.Field>
        <Form.Field error>
          <Input transparent placeholder='Placeholder' />
        </Form.Field>
        <Form.Field>
          <Dropdown className='inverted error' placeholder='Placeholder' search selection options={sampleDropdownOptions} />
        </Form.Field>
        <Form.Field error>
          <Checkbox className='inverted' label='Checkbox' />
        </Form.Field>
      </Form>
    </Segment>
  </div>)

storiesOf('Menu', module)
  .add('secondary normal', () => <div style={{ borderBottom: 'solid 1px lightgrey', padding: '5px' }}>
    <Menu secondary>
      <Menu.Item as ='a' active>Item 1</Menu.Item>
      <Menu.Item as ='a'>Item 2</Menu.Item>
      <Menu.Item as ='a'>Item 3</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item as='a'><Input /></Menu.Item>
        <Menu.Item as='a'>Logout</Menu.Item>
      </Menu.Menu>
    </Menu>
  </div>)
  .add('secondary inverted', () => <Segment inverted>
    <div style={{ borderBottom: 'solid 1px lightgrey', padding: '5px' }}>
      <Menu secondary inverted>
        <Menu.Item as ='a' active>Item 1</Menu.Item>
        <Menu.Item as ='a'>Item 2</Menu.Item>
        <Menu.Item as ='a'>Item 3</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item><Input className='input-inverted' inverted /></Menu.Item>
          <Menu.Item>Logout</Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  </Segment>)
  .add('pointing secondary normal', () => <Segment>
    <Menu pointing secondary>
      <Menu.Item as='a' active>Item 1</Menu.Item>
      <Menu.Item as='a'>Item 2</Menu.Item>
    </Menu>
</Segment>)
  .add('pointing secondary inverted', () => <Segment inverted>
    <Menu pointing secondary inverted>
      <Menu.Item as ='a' active>Item 1</Menu.Item>
      <Menu.Item as='a' >Item 2</Menu.Item>
    </Menu>
</Segment>)

storiesOf('Dropdown', module)
  .add('normal', () => <Segment>
    <Dropdown search selection options={sampleDropdownOptions} />
</Segment>)

storiesOf('Form with Dropdown', module)
  .add('normal', () => <Segment>
    <Form>
      <Form.Dropdown search selection options={sampleDropdownOptions} />
      <Form.Input />
    </Form>
</Segment>)
  .add('mini', () => <Segment>
    <Form size='mini'>
      <Form.Dropdown search selection options={sampleDropdownOptions} />
      <Form.Input />
    </Form>
</Segment>)

storiesOf('Grid', module)
  .add('compact', () => <Segment>
    <Grid>
      <Grid.Row>
        <Grid.Column>Value</Grid.Column>
        <Grid.Column>Value</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>Value</Grid.Column>
        <Grid.Column>Value</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>Value</Grid.Column>
        <Grid.Column>Value</Grid.Column>
      </Grid.Row>
    </Grid>
</Segment>)