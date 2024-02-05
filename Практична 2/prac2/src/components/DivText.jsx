export default function DivText(props) {
    return (
        <div className={props.class} dangerouslySetInnerHTML={{ __html: props.text }} />
    );
}
