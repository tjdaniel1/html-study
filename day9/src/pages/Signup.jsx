import Article from "../atom/Article";
import Button from "../atom/Button";
import Input from "../atom/input";
import Label from "../atom/label";

const Signup = () => {
  return (
    <div className="container">
      <Article>
        <form>
          <Label htmlFor="name">name</Label>
          {/* <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            id
          </label> */}
          <Input id="name" required />
          <Label htmlFor="password">password</Label>
          {/* <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            password
          </label> */}
          <Input id="password" type="password" />
          <hr className="m-4" />
          <Button>Submit</Button>
        </form>
      </Article>
    </div>
  );
};

export default Signup;
