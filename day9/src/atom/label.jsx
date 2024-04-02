const Label = (props) => {
  //   console.log(props);
  return (
    <label
      //   htmlFor={htmlFor}
      htmlFor={props.htmlFor}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {props.children}
    </label>
  );
};
export default Label;
