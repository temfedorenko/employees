import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((item) => {
    return (
      <EmployeesListItem
        key={item.id}
        name={item.name}
        salary={item.salary}
        increase={item.increase}
        rise={item.rise}
        onDelete={() => onDelete(item.id)}
        onToggleProp={(param) => onToggleProp(item.id, param)}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
