import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
  const data = [
    { name: 'Євгенія Ч.', salary: 830, increase: true, id: 1 },
    { name: 'Артем Ф.', salary: 800, increase: false, id: 2 },
    { name: 'Вікторія М.', salary: 550, increase: false, id: 3 },
    { name: 'Юлія Р.', salary: 680, increase: false, id: 4 },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
