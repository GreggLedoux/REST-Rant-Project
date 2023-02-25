const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
          </main>
          <h2>Ratings</h2>
          <div>
            <p>currently unrated</p>
          </div>
          <h2>Comments</h2>
          <divz>
            <p>No comments yet</p>
          </divz>
        </Def>

    )
}

<a href={'/places/${data.id/edit'} className="btn btn-warning"> 
  Edit
</a>  
<form method="POST" action={'/places/${data.id}?_method=DELETE'}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form>     



module.exports = show
