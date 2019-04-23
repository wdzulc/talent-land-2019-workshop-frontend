import React from 'react';
import AcademicIcon from 'material-ui/svg-icons/social/school';
import DegreeIcon from 'material-ui/svg-icons/navigation/check';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const getAcademic = (academicData) => {
    const academicItems = [];
      academicData.forEach((val, index) => {
      academicItems.push(<List key={index}><ListItem primaryText={val.institution} leftIcon={<AcademicIcon />}/><ListItem primaryText={val.studyType} leftIcon={<DegreeIcon />} /></List>);
      academicItems.push(<Divider key={index + val}/>);
    })
    return academicItems;
}

export default (props) => {
    const academicData = props;
    return (
      <div>{getAcademic(academicData)}</div> 
    );
  }