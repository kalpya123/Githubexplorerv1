import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Search extends Component {
    state={
        text:''
    }
onChange=(e)=>{
    e.preventDefault();

    this.setState({[e.target.name]:e.target.value});


}
onSubmit=(e)=>{
    e.preventDefault();
    if(this.state.text==='')
    {
      this.props.setAlert('please enter something ','light');
      
    }
    else{
        this.props.searchUser(this.state.text);
this.setState({text:''});
    }



}
static propTypes={
    searchUser:PropTypes.func.isRequired,
    clearUser:PropTypes.func.isRequired

}
    render() {
        
        return (
            <div>
            <form className='form' onSubmit={this.onSubmit}>
                <input type="text" name="text" placeholder="Search users..." value={this.state.text} onChange={this.onChange}/>
                

                <input type="submit" value="Search" className='btn btn-dark btn-block'/>


                
                </form>
                {
                    this.props.showClear &&
                
                <button className='btn btn-dark btn-block' onClick={this.props.clearUser}>Clear</button>                
                }
                </div>
        )
    }
}

export default Search
