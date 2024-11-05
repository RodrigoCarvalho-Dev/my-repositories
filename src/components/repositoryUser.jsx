import '../assets/css/repository.scss';

export function RepositoryUser( props ) {
    return (
        <article>
            <h1>Repository User</h1>
            <p>{props.repository.name ?? 'default'}</p>
            <p>{props.repository.full_name}</p>
            <a href={props.repository.html_url}>
                repository link
            </a>
        </article>
        
    );  
}