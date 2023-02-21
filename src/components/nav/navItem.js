function NavItem({ diver, onDiverChange }) { 
    const handleClick = () => {
      onDiverChange(diver.id);
    }
    
    return (
      // Using a button here for accessibility purposes (as we're not changing the url)
      // aria-label to replace non-intuitive button text
      //
      // background image used for simplicity's sake. Would normally implement an <img> or <picture> tag with 'srcset' attribute
      <button className="navItem" aria-label={"View " + diver.name} onClick={handleClick}> 
        <div className="navItem__spacer"/>
        <div className={'navItem__img'} style={{backgroundImage: 'url(' + diver.previewImage + ')'}}/>
        <div className="navItem__content">
          {diver.name}
        </div>
      </button>
    )
  }

export default NavItem;
