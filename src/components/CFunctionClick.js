import React, { Component } from 'react'

export class CFunctionClick extends Component {

    constructor(props){
        super(props);
        // this.changeEvent=this.changeEvent.bind(this);

        this.state={
            course:"MCA",
            roll:this.props.roll
        }
    }


    changeEvent=()=>{

        this.setState({
            course:"BCA"
        }

        )
        console.log("Hello Pritam",this.state.course,this.props.roll)
    }

    render() {

        const numbers=[3,4,5,6];
        const newNumbers=numbers.map((numbers)=> {return <li key={numbers}>{numbers}</li> });

        return (
            <div>
                 <button onClick={this.changeEvent}>Hit Me</button>
                 {this.state.course}
                 {this.props.roll}
                  {/* {numbers.map((numbers)=><li>{numbers}</li>)} */}
                 <ul>{newNumbers}</ul>
            </div>
        )
    }
}

export default CFunctionClick
