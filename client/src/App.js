import { Link, Outlet } from 'react-router-dom';
 
function App() {
  return (
    <div className='border'>
      <h1>Wildflowers of the Wasatch Front</h1>
      <nav
        style={{
          borderBottom:'1px solid'
        }}
        >
          <Link to='/home'>Home</Link> - {' '}
          <Link to='/wildflowers'>Wildflowers</Link> - {' '}
          <Link to='/wildflowers/new'>New Wildflower</Link> - {' '}
          <Link to='/about'>About</Link>
        </nav>
        <p>Outlet component here</p>
        <Outlet />
    </div>
  );
}

export default App;