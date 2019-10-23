import AccountLogin from '../components/AccountLogin';
import {connect} from 'react-redux';
import {logIn} from '../actions/actions';

const mapStateToProps = (state) => {
    return {
      loginSuccess: state.loginSuccess,
      loginFailed: state.loginFailed
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      logIn: (username, password) => dispatch(logIn(username, password))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AccountLogin);