var styles = {
  mainContainer: {
    margin: '55px auto 0 auto',
    minWidth: '790px',
    minHeight: '650px',
    width: '800px',
    height: '650px'
    //border: '1px solid rgba(20,20,20,1)',
    
  },
  activeContainer: {
    margin: '0 auto 0 auto',
    width: '800px',
    height: '400px',
    border: '1px solid rgba(200,200,200,1)',
    backgroundImage: 'url(http://i.imgur.com/4m9dQSe.png)',
    backgroundSize: '100%',
    position: 'relative',
    cursor: 'pointer'
  },
  activeDescription: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    height: '120px',
    background: 'rgba(0,41,60,.7)',
    //background: '#DE7A22',
    color: 'white',
    paddingLeft: '10px'
  },
  github: {
    color: 'rgba(80,80,80,1)',
    borderRadius: '3px',
    border: '1px solid rgba(200,200,200,1)',
    backgroundColor: 'rgba(240,240,240,1)',
    width: '100px',
    height: '25px',
    fontSize: '12',
    fontWeight: 'bold',
    position: 'absolute',
    right: '0',
    top: '0',
    marginTop: '25px',
    marginRight: '15px'
  },
  header: {
    textAlign: 'center'
  },
  scrollContainer: {
    width: '100%',
    height: '155px',
    //border: '1px solid blue',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px'
  },
  scrollThumb: {
    width: '190px',
    height: '150px',
    float: 'left',
    background: 'rgba(0,41,60,.7)',
    //1E43C
    cursor: 'pointer'
  },
  scrollPic: {
    backgroundImage: 'url(http://i.imgur.com/4m9dQSe.png)',
    backgroundSize: '100%',
    width: '100%',
    height: '100px',
    border: '1px solid rgba(200,200,200,1)',
  },
  scrollTitle: {
    fontWeight: 'bold',
    paddingLeft: '10px',
    paddingTop: '15px',
    fontSize: '13px',
    color: 'white'

  }
};


module.exports = styles;