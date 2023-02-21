import { useState } from 'react';
import NavItem from './components/nav/navItem';
import DiverBio from './components/diverBio/diverBio';
import divers from './data/divers';
import './assets/styles/global.scss';

function App() {
  const [chosenDiver, setChosenDiver] = useState(null);
  
  const handleDiverChange = (chosenDiverId) => {
    setChosenDiver(chosenDiverId);
  }
  
  return (
    <>
      <header className="header">
        <a href="/">
          <img src="/images/logo.png" alt="Tag Heuer logo"/>
        </a>
      </header>
      <main className="main">
        { chosenDiver == null ? (
           <div className="navItems">
             { divers.map((diver) => { // loop the data to list divers as a 'nav' of sorts
               return (
                 <NavItem diver={diver} onDiverChange={handleDiverChange} key={diver.id}/>
               )
             })}
           </div>
         ) :
         ( // else return the bio of the chosen diver
          <DiverBio diverBio={divers.find(diver => diver.id === chosenDiver).bio} />
         )}
      </main>
    </>
  )
}

export default App;
