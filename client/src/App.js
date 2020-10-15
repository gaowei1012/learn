import React from 'react';
import { Tabs } from 'antd-mobile'
import { StickyContainer, Sticky } from 'react-sticky';
import Today from './Taday'
import Hostory from './learnHistory'
import './app.less'

const tabs = [
  {title: '今日计划'},
  {title: '历史单词'}
]

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}

class App extends React.Component {
  render() {
    return (
      <div className="app_container">
        <StickyContainer>
          <Tabs 
            tabs={tabs}
            initialPage={'t1'}
            renderTabBar={renderTabBar}
          >
            <Today/> 
            <Hostory/>
          </Tabs>
        </StickyContainer>
      </div>
    );
  }
}

export default App;
