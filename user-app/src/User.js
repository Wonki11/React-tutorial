const User = (props) => {
    const user = props.user;
    const userList = props.userList;
    const setUserList = props.setUserList;
  
    const deleteUser = () => {
    const newUserList1 = userList.filter((item) => {return item === user; });
    const newUserList2 = userList.filter((item) =>  item === user );
      //1번과 2번은 동일하지만 {return} 의 존재 유무가 다름

      const newUserList = userList.filter((item) => {
        return item !== user; //선택한 번호만 삭제
        //return item === user; //선택한 번호제외 모두
      });
  
      setUserList(newUserList);
    };
  
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.gender}</td>
        <td>{user.phone}</td>
        <td>
          <button onClick={deleteUser}>삭제하기</button>
        </td>
      </tr>
    );
  };

  export default User;