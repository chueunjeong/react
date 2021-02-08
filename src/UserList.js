import React, { useEffect } from "react";

const User = React.memo(function User({ user, onRemove, onToggle }) {
  //useEffect 첫번째 파라미터는 함수, 두번째는 의존값이 있는 배열(deps)
  //deps 배열을 비우면 컴포넌트가 처음 나타날 때만 등록된 함수가 호출됨.
  //deps에 값이 있으면 처음 마운트될 때, 지정한 값이 바뀔 때, 언마운트 될 때,
  //값이 바뀌기 직전 모두 호출 됨
  //useEffect는 함수 반환가능 -> cleanup 함수
  //뒷정리를 해주는 함수로 deps가 비어 있는 경우 컴포넌트가 사라질 때 호출됨.
  useEffect(() => {
    console.log(user);
  });
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>{" "}
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);
