import { h, render } from 'preact';
import TodoList from './components/TodoList.js'

const Foo = () => <div>foo</div>;

render(<TodoList />, document.getElementById('app'));