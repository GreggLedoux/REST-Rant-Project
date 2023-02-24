const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <div>
                    <img src="/images/dog.jpg" alt="Dog" />
                </div> 
                Photo by <a href="https://unsplash.com/@jfalmon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jane Almon</a> on <a href="https://unsplash.com/photos/7rriIaBH6JY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    )
}

module.exports = error404

