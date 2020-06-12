import React from 'react';
import AlertContext from './../../context/alert/alert.context';

const Alerts = () => {
  const alertContext = React.useContext(AlertContext);
  const { alerts } = alertContext;

  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div key={alert.id} className={`alert-${alert.type}`}>
        <i className='fas fa-info-circle'></i> {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
