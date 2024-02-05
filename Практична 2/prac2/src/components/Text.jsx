export default function Text(props) {
    return (
        <p className={props.class} dangerouslySetInnerHTML={{ __html: props.text }} />
    );
}
