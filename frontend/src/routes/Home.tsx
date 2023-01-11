import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const { naver }: Window = window;
  const NAVER_CLIENT_ID = 'jSmwG4yvgojw5INHFo2w';
  const NAVER_CALLBACK_URL = 'http://localhost:3000/login';
  const NAVER_REDIRECT_URL = 'http://localhost:3000/';
  const [user, setUser] = useState(null);

  const initializeNaverLogin = () => {
    /*(2)LoginWithNaverId Javascript 설정 정보 및 초기화 */
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      // 팝업창으로 로그인을 진행할 것인지 여부 설정
      isPopup: false,
      // 버튼 타입 ( 색상, 타입, 크기 변경 가능 )
      loginButton: { color: 'green', type: 3, height: 58 },
      callbackHandle: true,
      //callback 페이지가 분리되었을 경우 callback 페이지에서는 callback 처리를 해놓을 수 있도록 설정한다.
    });

    /*(3) 네이버 아이디로 로그인 정보를 초기화하기 위해 init 호출 */
    naverLogin.init();

    /*(4) callback의 처리, 정상적으로 callback 처리 완료될 경우 main page로 redirect */
    window.addEventListener('load', function () {
      naverLogin.getLoginStatus(async function (status: boolean) {
        if (status) {
          const userid = naverLogin.user.getEmail();
          const username = naverLogin.user.getName();
          // 정보 전체를 아래처럼 state 에 저장하여 추출하여 사용가능하다.
        }
      });
    });
  };

  const getNaverToken = () => {
    if (!location.hash) return;
    const token = location.hash.split('=')[1].split('&')[0];
    console.log(token);
    window.location.replace('/mainpage');
    // axios
    //   .post('http://localhost:8000/api/auth/user', {
    //     token: token,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     window.location.replace('/mainpage');
    //     //서버측에서 로직이 완료되면 메인페이지로 보내준다
    //   });
  };

  useEffect(() => {
    initializeNaverLogin();
    getNaverToken();
  }, []);

  return (
    <div>
      unigram home page
      {user ? null : <div id="naverIdLogin"></div>}
    </div>
  );
};
export default Home;
