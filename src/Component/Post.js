import {Link} from 'react-router-dom'
function Post()
{
    return(
        <div>
<main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
        </div>
    )
}

export default Post;