import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import PersonIcon from 'material-ui/svg-icons/social/person-outline';
import { ListItem } from 'material-ui/List';
import DegreeIcon from 'material-ui/svg-icons/navigation/check';
import Divider from 'material-ui/Divider';

export default (props) => {
  const aboutData = props;
  return (
    <Card >
      <CardHeader
        title="ABOUT"
        subtitle={aboutData.name}
        avatar={<PersonIcon />}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardTitle title={aboutData.legalName} subtitle={aboutData.tittle} />
      <CardText>
        <div className="box">
          <div><img className="pic" src={aboutData.photo} role="presentation" /></div>
          <div>{
            aboutData.profiles.map((val, index) =>
              (
                <div>
                  <list key={index}><ListItem primaryText={val.network} leftIcon={<img src={val.logo} role="presentation" />} /><ListItem primaryText={<a href={val.url}>{val.url}</a>} leftIcon={<DegreeIcon />} /></list>
                  <Divider key={index + val} />
                </div>
              )

            )
          }</div>
        </div>


      </CardText>
    </Card>
  );
}