import './app-info.css';

const AppInfo = ({ employeesAmount, increasedEmployees }) => {
  return (
    <div className="app-info">
      <h1>Облік співробітників компанії StopFailing</h1>
      <h2>Загальна кількість співробітників: &nbsp; {employeesAmount}</h2>
      <h2>Бонус отримають: &nbsp; {increasedEmployees}</h2>
    </div>
  );
};

export default AppInfo;
