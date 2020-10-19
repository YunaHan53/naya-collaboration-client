import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

// import Moodboard from '../Moodboard/Moodboard'
import Title from '../Title/Title'
import Details from '../Details/Details'
import Moodboard from '../Moodboard/Moodboard'
import Chat from '../Chat/Chat'

const TabSelector = ({ selectedTab, onSetTab }) => {
  const availableTabs = ['DETAILS', 'MOODBOARD', 'CHAT']
  const selectNewTab = (event) => {
    const newTab = event.target.id
    onSetTab(newTab)
  }

  const getStyle = (tab) => {
    if (tab === selectedTab) {
      return { background: 'black', color: 'white' }
    }
  }
  return (
    <div className="button-list">
      {availableTabs.map((tab) =>
        <button className="button-tabs" style={getStyle(tab)} key={tab} id={tab} onClick={selectNewTab}>
          {tab}
        </button>
      )}
    </div>
  )
}

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: [],
      selectedTab: 'DETAILS'
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  setTab = (newTab) => {
    this.setState({ selectedTab: newTab })
  }

  getSelectedTab = () => {
    const { selectedTab } = this.state
    if (selectedTab === 'DETAILS') {
      return <Details/>
    }

    if (selectedTab === 'MOODBOARD') {
      return <Moodboard/>
    }
    if (selectedTab === 'CHAT') {
      return <Chat/>
    }
  }

  render () {
    const { msgAlerts, user, selectedTab } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
        </main>

        <Title />
        <TabSelector selectedTab={selectedTab} onSetTab={this.setTab}></TabSelector>
        {this.getSelectedTab()}
      </Fragment>
    )
  }
}

export default App
