import React, { PropTypes } from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

// params è un oggetto che Router rende disponibile ai componenti che gestisce
// In Root.js <Route path="/(:filter)" component={App} />
const App = ({ params }) => (
  <div>
    <AddTodo />
    <VisibleTodoList
      filter={params.filter}
    />
    <Footer />
  </div>
);

App.propTypes = {
  params: PropTypes.object.isRequired,
};

export default App;
