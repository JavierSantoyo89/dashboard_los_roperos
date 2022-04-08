import React from 'react';
import {useState, useEffect} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'

const StyledTableCell = withStyles(()=>({
    head:{
        textAlign: 'center',
        background: 'black',
        color: 'white'
    },
    body:{
        fontSize:14
    },
}))(TableCell)



function TableProducts(){

 
    // Seccion de todos los productos
const [products, setProducts] = useState([])

    useEffect(()=>{
        
            fetch('http://localhost:1689/products/all')
                .then(response => response.json())
                .then(data =>{
                    setProducts(data.data)
                    
                })
                .catch(error => console.error(error))
            console.log("%c Se monto el componente", "color: green");
           // console.log(response.data);
           console.log(fetch);
    },[])

    useEffect(()=>{ 
            console.log("%c Se actualizo el componente", "color: yellow");
            console.log(fetch.statusText);
    },[products])

    useEffect(()=>{
        return()=>{
            console.log("%c Se desmonto el componente", "color: red");
        }
    },[]);

// fin de seccion de todos los productos
    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Producto</StyledTableCell>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell>Nombre</StyledTableCell>
                        <StyledTableCell>Precio</StyledTableCell>
                        <StyledTableCell>Accion</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {products.map(product=>(
                        <TableRow key = {product.id}>
                            <TableCell align='center'>
                                <img src={'http://localhost:1689/images/products/' + product.imgProduct} alt ='avatar' width='65px' height='85px'/>    
                            </TableCell>
                            <TableCell align='center'> 
                                {product.id}
                            </TableCell>
                            <TableCell align='center'> 
                                {product.name}
                            </TableCell>
                            <TableCell align='center'> 
                                {product.price}
                            </TableCell>
                            <TableCell align='center'> 
                                <DeleteIcon/>
                            </TableCell>
                        </TableRow>    
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableProducts