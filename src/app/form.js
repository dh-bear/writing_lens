function Form({ onClose }) {
    const submitForm = (event) => {
      event.preventDefault();
  
      onClose();
    }
  
    return (
      <form onSubmit={submitForm} style={{/* your styles here */}}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }