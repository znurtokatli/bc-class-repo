var table = d3.select('.test').append('table')

var header = table.append('thead')

var arr = ['city','state', 'country']

arr.forEach(loc => {
    header.append('th').text(loc)
});

var tbody = table.append('tbody')



var data = ['New York','NY','US']

var row = tbody.append('tr');

data.forEach(loc => {
    row.append('td').text(loc)    
});