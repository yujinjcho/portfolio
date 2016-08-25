var React = require('react');
var styles = require('../styles');
var ActiveContainer = require('./ActiveContainer')
var ScrollContainer = require('./ScrollContainer')



var MainContainer = React.createClass({
  getInitialState: function(){
    return {
      active_project: '1'
    }
  },
  focusProject: function(proj){
    this.setState({
      active_project: proj
    })
  },
  render: function() {
    return (
      <div style={styles.mainContainer}>        
        <h1 style={styles.header}>Yujin J. Cho</ h1>
        <h5 style={styles.header}>
          <a href='https://github.com/yujinjcho' target="_blank">Github</a> | 
          <a href='https://www.linkedin.com/in/yujinjcho' target="_blank"> Linkedin</a> | 
          <a href='https://ycnotes.com/' target="_blank"> Personal</a> | 
          <a href="mailto:yujinjcho@gmail.com" target="_top"> Email</a>
        </h5> <br />

        <ActiveContainer data={this.props.data} active_project = {this.state.active_project} />
        <ScrollContainer data={this.props.data} currentProject={this.focusProject} />
      </div>
    )
  }
})

module.exports = MainContainer;