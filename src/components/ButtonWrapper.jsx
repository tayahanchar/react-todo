function ButtonWrapper(props) {
  return (<button title={props.title} className={props.className} onClick={props.onClick}>{props.children}</button>)
}

export default ButtonWrapper;