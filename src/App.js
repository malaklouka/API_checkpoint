import './App.css';
import UserList from './component/UserList';

function App() {
  return (
    <div>
    <div class="sp-container">
	<div class="sp-content">
		<h2 class="frame-1">LIST</h2>
		<h2 class="frame-2">OF</h2>
		<h2 class="frame-3">USERS</h2>
	
		<a class="sp-circle-link" href="https://nick.mkrtchyan.ga">by Malak</a>
	</div>
</div>
    <UserList/>
    </div>
  );
}

export default App;
