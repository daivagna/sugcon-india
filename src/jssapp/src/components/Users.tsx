import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type userCommonProps = {
  id: Field<string>;
  email: Field<string>;
  firstName: Field<string>;
  lastName: Field<string>;
};
console.log('inside component');
//{ fields }: userCommonProps
const UsersData = (fields: userCommonProps): JSX.Element => {
  //const { fields } = props;
  //console.log('inside component array' + JSON.stringify(props));

  return (
    <>
      <tr key={fields?.id}>
        {/* <div>{user.email.value}</div> */}
        <td>{fields?.firstName}</td>
        <td>{fields?.lastName}</td>
      </tr>
    </>
  );
};
console.log('data is ' + JSON.stringify(UsersData));
export default UsersData;
