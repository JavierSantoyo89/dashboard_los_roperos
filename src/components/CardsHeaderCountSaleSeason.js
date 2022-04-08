import React from 'react'
import {Card, Typography, CardContent} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import {useState, useEffect} from 'react';

function CardsHeaderCountProducts(props){

    const useStyles = makeStyles(()=>({
        root:{
            textAlign: 'center',
            background: props.color
        },
        texto:{
            fontSize:18,
            color:props.font
        },
        titulo:{
            fontWeight: 'bold',
            fontSize: 22,
            color:props.font
        }
    }))

    const classes= useStyles();
// Seccion de todos los Season/
const [season, setSeason] = useState([])

    useEffect(()=>{
        
            fetch('http://localhost:1689/products/count_season')
                .then(response => response.json())
                .then(data =>{
                    setSeason(data.data)
                    
                })
                .catch(error => console.error(error))
            console.log("%c Se monto el componente", "color: green");
           // console.log(response.data);
           console.log(fetch);
           
    
    },[])

    useEffect(()=>{ 
            console.log("%c Se actualizo el componente", "color: yellow");
            console.log(fetch.statusText);
    },[season])

    useEffect(()=>{
        return()=>{
            console.log("%c Se desmonto el componente", "color: red");
        }
    },[]);

// fin de seccion de todos los season
// Seccion de todos los in-sale/
const [sale, setSale] = useState([])

    useEffect(()=>{
        
            fetch('http://localhost:1689/products/count_in_sale')
                .then(response => response.json())
                .then(data =>{
                    setSale(data.data)
                    
                })
                .catch(error => console.error(error))
            console.log("%c Se monto el componente", "color: green");
           // console.log(response.data);
           console.log(fetch);
           
    
    },[])

    useEffect(()=>{ 
            console.log("%c Se actualizo el componente", "color: yellow");
            console.log(fetch.statusText);
    },[sale])

    useEffect(()=>{
        return()=>{
            console.log("%c Se desmonto el componente", "color: red");
        }
    },[]);

// fin de seccion de todos los productos

    return (
       <Card className={classes.root}>
           <CardContent>
                {props.icono}
                <Typography className={classes.titulo}>
                    Por tipo:
                </Typography>

                <Typography className={classes.texto}>
                   Sale: {sale.length} ---
                   Season: {season.length}
                </Typography>

           </CardContent>

       </Card>
    );
}

export default CardsHeaderCountProducts