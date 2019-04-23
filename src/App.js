import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AboutComponent from './components/About'
import WorkComponent from './components/Work'
import SkillsComponent from './components/Skills'
import AcademicComponent from './components/Academic'
import httpClient from './utils/ApiClientHelper'
import SwitchComponent from './components/switch';

import WorkIcon from 'material-ui/svg-icons/action/work';
import SkillIcon from 'material-ui/svg-icons/action/build';
import AcademicIcon from 'material-ui/svg-icons/social/school';

class App extends Component {
  state = {
    isLoadingResume: true,
    resumeData: null,
  }

  componentDidMount() {
    const client = new httpClient()
    client.get(`${process.env.REACT_APP_BASEURL}/resume`,
      (response) => {
        this.setState({ isLoadingResume: false, resumeData: response.data || null })
      },
      (error) => {
        this.setState({ isLoadingResume: false, resumeData: null })
      })
  }

  render() {
    return (
      this.state.isLoadingResume ? (<div>Loading...</div>) :
        (this.state.resumeData ? (<div className="App">
          <MuiThemeProvider>
            {AboutComponent(this.state.resumeData.about)}
            <SwitchComponent title={"Work"} Icon={<WorkIcon />}>
              {WorkComponent(this.state.resumeData.work)}
            </SwitchComponent>

            <SwitchComponent title={"Skills"} Icon={<SkillIcon />}>
              {SkillsComponent(this.state.resumeData.skills)}
            </SwitchComponent>

            <SwitchComponent title={"ACADEMIC"} Icon={<AcademicIcon />}>
              {AcademicComponent(this.state.resumeData.education)}
            </SwitchComponent>
          </MuiThemeProvider>

        </div>) : (<div>No data available</div>))
    );
  }
}

export default App;
