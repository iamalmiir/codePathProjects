import Card from './components/Card'
import emmySquared from './assets/images/emmySquared.webp'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='header-title'>Discover the Best Pizza Spots</h1>
      </header>
      <main className='mainContainer'>
        <section className='places'>
          <Card
            img={emmySquared}
            title='Emmy Squared Pizza'
            description='Founded on an unconditional love of well-made food, Emmy Squared combined a New York style “grandma” pie with a Detroit style pizza, and then topped it off with an added dose of culinary creativity.'
          />
          <Card
            img={emmySquared}
            title='Emmy Squared Pizza'
            description='Founded on an unconditional love of well-made food, Emmy Squared combined a New York style “grandma” pie with a Detroit style pizza, and then topped it off with an added dose of culinary creativity.'
          />
          <Card
            img={emmySquared}
            title='Emmy Squared Pizza'
            description='Founded on an unconditional love of well-made food, Emmy Squared combined a New York style “grandma” pie with a Detroit style pizza, and then topped it off with an added dose of culinary creativity.'
          />
        </section>
      </main>
    </div>
  )
}

export default App
