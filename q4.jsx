import React from 'react';

class FormattedSalary extends React.Component {

  convert(amount) {
    return parseFloat(amount).toFixed(1);
  }

  render() {
    return (
      <div>
        <h3>Formatted Salary: {this.convert(this.props.salary)}</h3>
      </div>
    );
  }
}

export default FormattedSalary;
