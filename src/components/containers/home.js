import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { incrementCount } from  '../../actions/example'
import Home from '../ui/home'

const mapStateToProps = state => ({
  count: state.example.count
})

const mapDispatchToProps = dispatch => bindActionCreators({
  incrementCount
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
