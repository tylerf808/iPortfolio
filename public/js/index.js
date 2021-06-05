
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
      
      const stock = event.target.parentElement.parentElement.firstElementChild.innerText
     
      const response = await fetch('/api/portfolios/delete', {
        method: 'DELETE',
        body: JSON.stringify({
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
  
  


  const buttons = document.getElementsByClassName('deleteBtn');

  for (const button of buttons) {
    button.addEventListener('click', delButtonHandler);
    // const stock = button[0].parentElement.parentElement.firstElementChild.innerText
  }
  

  const addStock = async(event) => {
    event.preventDefault();

    const stockSymbol = document.getElementById('stockSymbol').value.trim();
  const purchasePrice = document.getElementById('purchasePrice').value.trim();
  const shares = document.getElementById('shareAmount').value.trim();

    const response = await fetch('api/portfolios/create',{
      method: 'POST',
      body: JSON.stringify({
        stock: stockSymbol,
        position: purchasePrice,
        shares: shares,
        currentPrice: 0,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (response.ok) {
      document.location.replace('/watchlist');
    } else {
      alert('Failed to add stock to portfolio!')
    };
  
  };

  document
    .getElementById('addBtn')
    .addEventListener('click', addStock);



