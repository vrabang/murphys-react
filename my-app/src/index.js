import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Image, Dropdown, Icon, Grid, List } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className='topmenu'>
          <Menu.Item>
            <Image src='http://murphyshawaii.com/media/2014/04/murphyshawaii.png'/>
          </Menu.Item>

          <Menu.Item position='right'>Home</Menu.Item>

          <Menu.Item>
            <Dropdown text='About Us'>
              <Dropdown.Menu>
                <Dropdown.Item text='New'/>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>

          <Menu.Item>St. Patrick's Day</Menu.Item>

          <Menu.Item>
            <Dropdown text='Menus'>
              <Dropdown.Menu>
                <Dropdown.Item text='New'/>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>

          <Menu.Item>Bar</Menu.Item>
          <Menu.Item><Icon name='search'/></Menu.Item>
        </Menu>
    );
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Grid className='grad-background'>

        </Grid>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Header as="h1">FullWidthImage</Header>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Header as="h1">FooterMenu</Header>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));
