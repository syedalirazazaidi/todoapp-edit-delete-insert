import React, { Component } from 'react'
class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
    }
    renderForm = () => {
        <form>
            <input type="text" />
            <button onClick={this.editData} > Edit Task </button>
        </form>

    }
    renderItem(){
        return(
        //    < onClick={()=>{
               
        //        this.props.editData(this.props.i)
        //    }}></li> 
        <button onClick={(e)=>{
            e.stopPropagation();
            
        }}></button>
        )
    }

    render() {
        const { isEditing } = this.state;

        return (
            <div>
                {isEditing ? this.renderForm() :
                

                }
            </div>
        )
    }
}

export default EditItem;

