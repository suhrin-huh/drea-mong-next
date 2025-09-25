import { userInfoMock } from "@/mocks/user.mock";

export default function UserGreeting() {
  return (
    <div className={"text-h3 flex h-[200px] flex-col items-center justify-center gap-3 text-white"}>
      <p>안녕하세요, {userInfoMock.username} 님!</p>
    </div>
  );
}
