import React from 'react';
import { ListItem } from 'material-ui/List';
import CompanyIcon from 'material-ui/svg-icons/social/domain';
import ActivitiesIcon from 'material-ui/svg-icons/action/account-box';
import PositionIcon from 'material-ui/svg-icons/action/face';
import PeriodIcon from 'material-ui/svg-icons/action/date-range';
import Divider from 'material-ui/Divider';

const getJobs = (worksData) => {
  const jobsItems = [];
  worksData.forEach((val, index) => {
    jobsItems.push(<list key={index}><ListItem primaryText={val.company} leftIcon={<CompanyIcon />} /><ListItem primaryText={"Position:" + val.position} leftIcon={<PositionIcon />} /><ListItem primaryText={"Activities:" + val.activities} leftIcon={<ActivitiesIcon />} /><ListItem primaryText={"Period:" + val.period} leftIcon={<PeriodIcon />} /></list>);
    jobsItems.push(<Divider key={index + val} />);
  })
  return jobsItems;
}

export default (props) => {
    const worksData = props;
    return (
      <div>{getJobs(worksData)} </div>
    );
  }