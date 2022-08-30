import React,{ Component } from 'react'

class Form extends Component{
constructor(props){
	super(props)
	this.state = { ชื่อ:'',นามสกุล:'', ที่อยู่:null, อายุ:'',เบอร์โทรศัพท์:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { ชื่อ, นามสกุล, ที่อยู่, อายุ, เบอร์โทรศัพท์ } = this.state
	event.preventDefault()
	alert(`
	____Your Details____\n
	ชื่อ: ${ชื่อ}
	นามสกุล : ${นามสกุล}
	ที่อยู่ : ${ที่อยู่}
	อายุ : ${อายุ}
	เบอร์โทรศัพท : ${เบอร์โทรศัพท์}
	`)
}

// Method causes to store all the values of the
// input field in react state single method handle
// input changes of all the input field using ES6
// javascript feature computed property names
handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}

// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(
	<form onSubmit={this.handleSubmit}>
		<div>
		<label htmlFor='ชื่อ'>ชื่อ</label>
		<input
			name='ชื่อ'
			placeholder='ชื่อ'
			value = {this.state.email}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='นามสกุล'>นามสกุล</label>
		<input
			นามสกุล='นามสกุล'
			placeholder='นามสกุล'
			value={this.state.name}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='ที่อยู่'>ที่อยู่</label>
		<input
			name='ที่อยู่'
			placeholder='ที่อยู่'
			value={this.state.age}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='อายุ'>อายุ</label>
		<input
			name='อายุ'
			placeholder='อายุ'
			value={this.state.address}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='เบอร์โทรศัพท์'> เบอร์โทรศัพท์</label>
		<input
			name='เบอร์โทรศัพท'
			placeholder='เบอร์โทรศัพท '
			value={this.state.phoneNo}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<button>Create Account</button>
		</div>
   <div>
    <label for="favcolor">Select your favorite color:</label>
  <input type="color" id="favcolor" name="favcolor"></input>
  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  </form>
	)
}
}

export default Form

