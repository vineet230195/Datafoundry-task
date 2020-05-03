import React,{useMemo,useState} from 'react'

function PostTable(props){

  function useSortableData(items, config = null, search = ''){
    
    const [sortConfig, setSortConfig] = useState(config)
    const [searchConfig, setSearchConfig] = useState(search)
  
    const sortedItems = useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
         sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        })
      }
      if (searchConfig !== '') {
       return sortableItems.filter(item => item.title.toLowerCase().includes(searchConfig.toLowerCase())
        )
      }
      return sortableItems;
    }, [items, sortConfig, searchConfig]);
   
  
    function requestSort(key){
      let direction = 'ascending';
     
      if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    }

    function handleSearch(value) {
       setSearchConfig(value)
    }

      

  
    return { items: sortedItems, requestSort, handleSearch, searchConfig };
  }
  
  const {  items,requestSort, handleSearch } = useSortableData(props.posts);

 
   return(
        <div>
            <table className='table table-striped'>
                    <thead>
                       <tr>
                         <td><button className='btn btn-link'onClick={() => requestSort('title')}>Title</button>      <input type="text" placeholder="Search" onChange={e => handleSearch(e.target.value)}/></td>
                        
                     </tr>
                     </thead>
                     <tbody>
                                    
                        { items.map(post=>{
                                 return (
                                     <tr key={post.id}>
                                        <td>{post.title}</td>
                                      </tr>
                                     )
                                   })
                                }
                        </tbody>
                </table>
        </div>
    )
}

export default PostTable