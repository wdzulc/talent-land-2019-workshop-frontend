import React from 'react';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

// const getSkills = (skillsData) => {
//   const skillsItems = [];
//   skillsData.forEach((val, index) => {
//     skillsItems.push(<Chip key={index} style={styles.chip}>{val}</Chip>);
//   })
//   return skillsItems;
// }

export default (props) => {
  const skillsData = props;
  return (
    <div style={styles.wrapper}>
      {
        //getSkills(skillsData))
        skillsData.map((skill, index) => (<Chip key={index} style={styles.chip}>{skill}</Chip>))
      }
    </div>
  );
}
