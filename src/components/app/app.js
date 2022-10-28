import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Євгенія Ч.',
          salary: 1230,
          increase: false,
          rise: true,
          id: 1,
        },
        { name: 'Артем Ф.', salary: 1800, increase: true, rise: false, id: 2 },
        {
          name: 'Вікторія М.',
          salary: 850,
          increase: false,
          rise: false,
          id: 3,
        },
        { name: 'Юлія Р.', salary: 990, increase: false, rise: false, id: 4 },
      ],
    };
    this.maxId = 4;
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: (this.maxId += 1),
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];

      return {
        data: newArr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };

  onToggleProp = (id, param) => {
    // THE FIRST VARIANT
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [param]: !item[param] };
        }
        return item;
      }),
    }));

    // THE SECOND VARIANT
    // this.setState(({ data }) => {
    //   const index = data.findIndex((elem) => elem.id === id);

    //   const old = data[index];
    //   const newItem = { ...old, increase: !old.increase };
    //   const newArr = [
    //     ...data.slice(0, index),
    //     newItem,
    //     ...data.slice(index + 1),
    //   ];
    //   return {
    //     data: newArr,
    //   };
    // });
  };

  render() {
    const { data } = this.state;
    const employeesAmount = data.length;
    const increasedEmployees = data.filter((item) => item.increase).length;

    return (
      <div className="app">
        <AppInfo employeesAmount={employeesAmount} increasedEmployees={increasedEmployees} />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={data} onDelete={this.deleteItem} onToggleProp={this.onToggleProp} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
