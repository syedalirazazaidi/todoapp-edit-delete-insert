import React, { Component } from 'react'
let getid = "";
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: "",
            todoArray: [],

        }
    }

    onChangeHandler = (e) => {
        var val = e.target.value;
        console.log(val)
        this.setState({
            item: val
        })
    }
    // if you change in array first you make local instance you dont change the array directly
    addData = (e) => {
        e.preventDefault();
        //    create local instance or local varible

        var val = this.state.item;
        var instItem = this.state.todoArray
        instItem.push(val)
        localStorage.setItem('todo', JSON.stringify(instItem));

        this.setState({
            todoArray: instItem,
            item: ""
        })
        console.log(this.state.todoArray)
    }
    Delete = (e) => {
        var id = e.target.id;
        console.log(id)
        var instItem = this.state.todoArray
        instItem.splice(id, 1)
        localStorage.setItem('todo', JSON.stringify(instItem));
        this.setState({
            todoArray: instItem
        })

    }
    EditData = (e) => {
        console.log(e.target.id + " edit")
        getid = e.target.id;
        this.setState({
            item: this.state.todoArray[e.target.id]
        })
    }
    upDate = (e) => {
        e.preventDefault()
        console.log("working")
        //    this.state.item
        var items = this.state.todoArray
        items[getid] = this.state.item
        this.setState({
            todoArray: items,
            item: ""
        })
    }

    render() {
        // const ArrayItem = this.state.todoArray.map((item, i) =>
        //     <li key={i}>{item}<span onClick={this.Delete} id={i} >    X  </span></li>
        // )

        return (
            <div>
                <ul>
                    {this.state.todoArray.map((item, i) =>
                        <li key={i}>{item}<span onClick={this.Delete} id={i} >    Delete  </span>
                            <span onClick={this.EditData} id={i} >    Edit  </span>

                        </li>
                        // <li key={i}>{item}<span onClick={this.Delete} id={i} >    Delete  </span></li>

                    )
                    }


                </ul>

                <form>
                    <input type="text" value={this.state.item} onChange={this.onChangeHandler} placeholder="Text" /><hr />

                    <button onClick={this.addData}> Add Task... </button><br />
                    <button onClick={this.upDate} > Update </button><br /> </form>
            </div>
        )
    }
}

export default TodoList;

