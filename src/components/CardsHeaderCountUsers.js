import React from 'react'
import {Card, Typography, CardContent} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import {useState, useEffect} from 'react';

function CardsHeaderCountUsers(props){

    const [users, setUsers] = useState([])

    useEffect(()=>{
        
            fetch('http://localhost:1689/user/user_dashboard/')
                .then(response => response.json())
                .then(data =>{
                    setUsers(data.data)
                    
                })
                .catch(error => console.error(error))
            console.log("%c Se monto el componente", "color: green");
           // console.log(response.data);
           console.log(fetch);
           
    
    },[])

    useEffect(()=>{ 
            console.log("%c Se actualizo el componente", "color: yellow");
            console.log(fetch.statusText);
    },[users])

    useEffect(()=>{
        return()=>{
            console.log("%c Se desmonto el componente", "color: red");
        }
    },[]);


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
    return (
       <Card className={classes.root}>
           <CardContent>
                {props.icono}
                <Typography className={classes.titulo}>
                    Total de usuarios
                </Typography>

                <Typography className={classes.texto}>
                    {users.length}
                </Typography>

           </CardContent>

       </Card>
    );
}

export default CardsHeaderCountUsers;