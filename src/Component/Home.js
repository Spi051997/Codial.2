import {Link} from 'react-router-dom'
function Home()
{
    return (
        <div>

<main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>   <Link to="/post ">Post</Link>
      </nav>
        </div>
    )
}

export default Home;