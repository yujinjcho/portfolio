var React = require('react');
var styles = require('../styles');

var ActiveContainer = React.createClass({
  getInitialState: function(){
    return (
      {
        hover:false
      }
    )
  },
  toggleHover: function(){
    this.setState({hover: !this.state.hover})
  },
  openWindow: function(url){
    return function() {window.open(url)};
  },
  render: function() {
    // mutating styles object is getting deprecated, react 
    // recommends copying

    var gitHubHover = Object.assign({}, styles.github);

    if (this.state.hover) {
      gitHubHover.backgroundColor = 'rgba(225,225,225,1)'
    } else {
      gitHubHover.backgroundColor = 'rgba(242,242,242,1)'
    };

    var currentIndex = this.props.active_project;
    var currentProject = this.props.data.filter(
      function(obj){ return obj.project === currentIndex}
    )[0];
    var getGithub = this.openWindow(currentProject.github)
    var openProject = this.openWindow(currentProject.projectUrl)
    
    var activeContainer = Object.assign({}, styles.activeContainer);
    activeContainer.backgroundImage = 'url(' + currentProject.imageUrl + ')'


    return (
      <div style={activeContainer} onClick={openProject}>
        <div style={styles.activeDescription}>
    
          <h3><strong>
            {currentProject.title}
          </strong></h3>

          {currentProject.description} <br/>
          
          <strong>Technologies Used</strong>: {currentProject.technologies} <br />
          
          <button 
            onClick={getGithub} 
            style={gitHubHover} 
            onMouseEnter={this.toggleHover} 
            onMouseLeave={this.toggleHover}>
            
            GitHub
          </button>

        </div>
      </div>
    )
  }
})

module.exports = ActiveContainer;