const months = document.querySelector('.months');
const squares = document.querySelector('.squares');

const time = fetch('https://dpg.gg/test/calendar.json')
  .then((response) => response.json())
  .then((dataObject) => {
    const today = new Date();
    const weeksAgo = new Date(today);
    weeksAgo.setDate(today.getDate() - 7 * 51);

    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let oldMonth = weeksAgo.getMonth();

    for (let m = 0; m < 12; m++) {
      const mth = document.createElement('li')
      
      if (oldMonth < month.length) {
          mth.textContent = month[oldMonth]
        
          months.appendChild(mth);
      } else {
          mth.textContent = month[oldMonth - 12];
          
          months.appendChild(mth);
      }
      
      oldMonth = oldMonth + 1;
    }

    for (let i = 0; i < 357; i++) {
      let date = new Date(weeksAgo);
      date.setDate(date.getDate() + i);
      
      const square = document.createElement('li')
      square.setAttribute('data-date', date.toISOString().split('T')[0]);
      
      if (dataObject[date.toISOString().split('T')[0]] !== undefined) {
        square.setAttribute('data-value', dataObject[date.toISOString().split('T')[0]]);
        if (dataObject[date.toISOString().split('T')[0]] >= 30) {
          square.setAttribute('data-level', 5)
        } else if (dataObject[date.toISOString().split('T')[0]] >= 20) {
          square.setAttribute('data-level', 4)
        } else if (dataObject[date.toISOString().split('T')[0]] >= 10) {
          square.setAttribute('data-level', 3)
        } else {
          square.setAttribute('data-level', 2)
        }
      } else {
        square.setAttribute('data-value', 0);
        square.setAttribute('data-level', 1)
      }
      
      squares.appendChild(square);
    }
    // for (const [date, value] of Object.entries(dataObject)) {
    //   const dateObject = new Date(date);
      
    //   const weeksAgo = new Date();
    //   weeksAgo.setDate(weeksAgo,getDate() - 7 * 50);
    // }
  });



console.log(time);

