function DiverBioSection({ bioSection, bioSectionIndex, bioSectionCount }) {  

    // generate class names for first/second/last section
    // these classes are used to show different CSS gradients over the background image
    const sectionIndexClassName = (index) => { 
      switch(index) {
        case 0:
          return ' bio__section--first';
        case 1:
          return ' bio__section--second';
        case (bioSectionCount - 1):
          return ' bio__section--last';
        default:
          return ''
      }
    }
    
    return (
      // background image used for simplicity's sake. Would normally implement an <img> or <picture> tag with 'srcset' attribute
      <div className={'bio__section' + sectionIndexClassName(bioSectionIndex)}>
        <div className="bio__sectionImg" style={{backgroundImage: 'url(' + bioSection.backgroundImage + ')'}}/>
        <div className="bio__sectionContent" dangerouslySetInnerHTML={{ __html: bioSection.content }}/>
      </div>
    )
  }

  export default DiverBioSection