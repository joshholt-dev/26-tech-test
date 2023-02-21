import { useState } from 'react';
import DiverBioSection from './diverBioSection'
import '../../assets/styles/components/diverBio.scss'

function DiverBio({ diverBio }) {  
    const [bioSectionIndex, setBioSectionIndex] = useState(0);
    
    const handleClick = () => { // on click jump to next section. If on the last page, jump back to start
      if(bioSectionIndex < (diverBio.sections.length - 1))
      {
        setBioSectionIndex(bioSectionIndex + 1);
      }
      else {
        setBioSectionIndex(0);
      }
    }
    
    return (
      <div className="bio">
        <DiverBioSection bioSection={diverBio.sections[bioSectionIndex]} bioSectionIndex={bioSectionIndex} bioSectionCount={diverBio.sections.length}/>
        {bioSectionIndex < (diverBio.sections.length - 1) && ( // show 'next' button for all but the last section
          <button onClick={handleClick}>Next section</button>
        )}
      </div>
    )
  }

  export default DiverBio;