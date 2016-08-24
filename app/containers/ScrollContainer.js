var React = require('react');
var styles = require('../styles');
var ScrollThumb = require('../components/ScrollThumb')

var ScrollContainer = React.createClass({
  render: function() {
    var highlightProject = this.props.currentProject;

    var scrollNodes = this.props.data.map(function(project){
      return (
        <ScrollThumb 
          key={project.project}
          project={project.project}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          github={project.github}
          imageUrl={project.imageUrl}
          projectUrl={project.projectUrl}
          currentProject={highlightProject} />
      )
    });
    return (
      <div style={styles.scrollContainer}>
        {scrollNodes}
      </div>
    )
  }
})

module.exports = ScrollContainer;


