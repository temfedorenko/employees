import "./app-info.css";

const AppInfo = (props) => {
  return (
    <div className="app-info">
      <h1>Облік співробітників компанії StopFailing</h1>
      <h2>Загальна кількість співробітників: {props.employeesAmount}</h2>
      <h2>Бонус отримають: </h2>
    </div>
  );
};

export default AppInfo;
