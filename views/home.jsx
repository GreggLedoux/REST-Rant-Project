const React = require('react')
const Def = require('./default')

function home ()  {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/bahnMi.jpg" alt="Bahn Mi" />
                </div> 
                  "Photo by <a href="https://unsplash.com/@aesullivan2010?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anna Sullivan</a> on <a href="https://unsplash.com/photos/BtLSvyFcBS4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    <a href="/places">
                        <button className="btn-primary">Places Page</button>
                    </a>
                
            </main>
        </Def>
    )
}
<a href="/places">
  <button className="btn-primary">Places Page</button>
</a>


module.exports = home