import axios from "axios";

 export async function bookData12() {
        console.log('work');
       const res = await axios.get('http://localhost:4000/books')
       console.log(res);
       return res;        
      }

  export async function deleteBook(title: any) {

    console.log('title : ', localStorage.getItem('token'));
    const data: any = await axios.delete('http://localhost:4000/books/' + title, {
      headers: { Authorization: `${localStorage.getItem('token')}`, 'Content-type': 'application/json' },
    });
    return data;
}

export async function addBook(data:any)
{
  const res = await axios.post('http://localhost:4000/books', JSON.stringify(data), {
      headers: {"Authorization" : `${localStorage.getItem("token")}`, 'Content-type': 'application/json' },
    });
    console.log(res);
    return res
}

export async function searchBookById(select:any, value:any) 
{
      console.log('Value----------->', value);
      console.log('entererd');
     const res = await axios
        .get('http://localhost:4000/books/id/' + value)
      return res;  
}

export async function searchBookByTitle(select:any, value:any) 
{
  console.log('Value----------->', value);
  console.log('entererd');
  const res = await axios
    .get('http://localhost:4000/books/title/' + value)
    return res
}

export async function searchBookByAuthor(select:any, value:any) 
{
  console.log('Value----------->', value);
  console.log('entererd');
  const res = await axios('http://localhost:4000/books/author/' + value)
   return res
}




// .then((res) => res)
//         .then(({ data }) => {
//           dispatch({ type: 'BOOK_DETAILS', payload: data.data });
//         })