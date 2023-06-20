// import { useMutation } from '@apollo/client';
// import { useNavigate } from 'react-router-dom';

const About = () => {
  // const [addItem] = useMutation(CREATE_NewItem);
  // const navigate = useNavigate();

  const addItemHandler = () => {
    //   addItem({
    //     variables: {
    //       name: 'hello',
    //       age: 26
    //     }
    //   }).then(() => {
    //     navigate('/');
    //   });
  };
  return (
    <>
      <h3>About</h3>
      <button type="button" onClick={addItemHandler}>
        Add
      </button>
    </>
  );
};

export default About;
