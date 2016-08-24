var React = require('react');
var styles = require('../styles');

var ScrollThumb = React.createClass({
  handleMouse: function(){
    var focusProject = this.props.currentProject;
    return focusProject(this.props.project)
  },
  openWindow: function(url){
    return function() {window.open(url)};
  },
  render: function() {

    var thumbStyle = Object.assign({}, styles.scrollPic);
    thumbStyle.backgroundImage = 'url(' + this.props.imageUrl + ')';
    openProject = this.openWindow(this.props.projectUrl)
    
    return (
      <div style={styles.scrollThumb} onMouseEnter={this.handleMouse} onClick={openProject}>
        <div style={thumbStyle}></div>
        <p style={styles.scrollTitle}>{this.props.title}</p>
      </div>
    )
  }
})

module.exports = ScrollThumb;

