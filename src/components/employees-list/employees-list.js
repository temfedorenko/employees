import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete }) => {
  const elements = data.map((item) => {
    return (
      <EmployeesListItem
        key={item.id}
        name={item.name}
        salary={item.salary}
        increase={item.increase}
        onDelete={() => onDelete(item.id)}
      />
    );
    // OR return <EmployeesListItem name={...item} />;
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
