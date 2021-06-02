
const saveButtonHandler = async (event) => {
    event.preventDefault();
  
    const stock = document.querySelector('#portfolio-stock').value.trim();
    const position = document.querySelector('#portfolio-position').value.trim();
    const shares = document.querySelector('#portfolio-shares').value.trim();
    const user_id = document.querySelector('#portfolio-user_id').value.trim();
  
    if (name && position && shares, user_id) {
      const response = await fetch(`/api/portfolios/create`, {
        method: 'POST',
        body: JSON.stringify({ stock, position, shares,user_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/watchlist');
      } else {
        alert('Failed to add stock');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();
      // target.hasAttribute('data-stock-id')) {
      const id = 2
      // event.target.prevent
      // getAttribute('data-stock-id');
      const stock = "amazon"
     
      const response = await fetch('/api/portfolios/delete', {
        method: 'DELETE',
        body: JSON.stringify({
          user_id:id,
          stock:stock }),
          headers: {
            'Content-Type': 'application/json',
          },
      });
   
  
      if (response.ok) {
        document.location.replace('/watchlist');
      } else {
        alert('Failed to delete project');
      }
    }
  
  
  // document
  //   .querySelector('.new-project-form')
  //   .addEventListener('submit', saveButtonHandler);


  const buttons = document.getElementsByClassName('deleteBtn');
  for (const button of buttons) {
    button.addEventListener('click', delButtonHandler);
  }
  

