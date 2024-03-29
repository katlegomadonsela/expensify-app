import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates'; //from air-bnb api


const now = moment();
console.log(now.format('MMM Do, YYYY'));



export default class ExpenseForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() :'',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  };



  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(()=> ({
      description: description
    }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(()=> ({
      note: note
    }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(()=> ({
        amount: amount
      }));
    }
  };

  onDateChange = (createdAt) => {
    if(createdAt) { //the if statement makes it so that the date cant be deleted on the date input
      this.setState(() => ({createdAt: createdAt}))
    }

  };

  onFocusChange = ({focused}) => {
    this.setState(() => ({calendarFocused: focused}))
  }

  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please provide a description and amount!"
      }));
    } else {
      this.setState(() => ({error: ''}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100, //multiply by 100 to convert to cents and remove decimal
        createdAt: this.state.createdAt.valueOf(), // .valueOf to convert the moment into a usable format
        note: this.state.note
      });
    }
  }

  render () {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Description"
          className="text-input"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />

        <input
          type="text"
          placeholder="Amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />

        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />

        <textarea
          placeholder="Add a note for your expense"
          className="textarea"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>

        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    );
  }
};
