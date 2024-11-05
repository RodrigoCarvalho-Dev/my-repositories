import { RepositoryUser } from "./repositoryUser";
import '../assets/css/repository.scss';
import { useState , useEffect } from "react";


export function RepositoryList() {

    const [ repositories , setRepositories] = useState([]);


    useEffect( () => {
        fetch ( 'https://api.github.com/users/RodrigoCarvalho-Dev/repos' )
        .then( response => response.json() )
        .then( data => {
            setRepositories( data );
        });
    } , [] );

    

    return (
        <>
            <h1 className="title">Repository List</h1>
            <main>
                {
                    repositories.map( repository => {
                        return <RepositoryUser key={repository.id} repository={repository}/>
                    })
                }    
            </main>
            

        </>
    );
}