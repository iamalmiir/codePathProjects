import Card from './components/Card'
import dominicks from './assets/images/dominicks.webp'
import turkishCuisine from './assets/images/turkishCuisine.webp'
import cafeBubamara from './assets/images/cafeBubamara.webp'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <main className='mainContainer'>
        <header className='App-header'>
          <h1 className='header-title'>Exploring Three Unique Cuisines</h1>
        </header>
        <section className='places'>
          <Card
            img={dominicks}
            link={
              'https://www.bronxlittleitaly.com/merchants/restaurants/dominicks-restaurant/'
            }
            title="Dominick's - Italian Cuisine"
            description="This unfussy gem located on the Bronx's Arthur Avenue — otherwise known as the boroughs Little Italy — has been dishing out generous servings of well-sauced pasta for more than 50 years."
          />
          <Card
            img={turkishCuisine}
            link={'http://www.turkishcuisinenyc.com/'}
            title='Turkish Cuisine'
            description="As far as authentic Persian experiences go, Turkish Cuisine in the Hell's Kitchen District really cannot be beat. Once you step foot in this place you will feel that you have been transported direct to the Grand Bazaar in Istanbul."
          />
          <Card
            img={cafeBubamara}
            title='Cafe Bubamara - Balkan Cuisine'
            link={'https://cafebubamara.cafe/'}
            description='Cafe Bubamara is a Balkan restaurant located at 263 Parker Ave in Clifton, NJ. The restaurant is a family owned and operated business that has been serving the community for over 10 years.'
          />
        </section>
      </main>
    </div>
  )
}

export default App
